// Your component file

import React, { useEffect } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchTodos } from '../../../Features/data/fetchData';
import { DataGrid, GridColDef, GridColumnHeaderParams , GridValueGetterParams,GridToolbar,GridActionsCellItem,GridRowId, GridRowParams, GridEventListener } from '@mui/x-data-grid';
import { GridDeleteIcon } from '@mui/x-data-grid';
import { Security,Delete,FileCopy,Edit } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
import { deleteTodo,editReducer } from '../../../Features/data/fetchData';
import TransitionsModal from '../../Shared/modal';
import { modalToogleReducer,dialogModalToogleReducer,getRowParam } from '../../../Features/helper/modalReducer';
import { redirect, useNavigate, useRoutes } from 'react-router-dom';
import axios from 'axios';
import { DisplayType, Inputs } from '../../../Interfaces/typeRow';
import { display } from '../../../Features/data/fetchDetails';
import AlertDialogSlide from '../../Shared/dialog';
// import { display } from '../../../Features/data/fetchDetails';

//   let colDef=[];
//   const colDefGetter=(params:GridValueGetterParams)=>{
//     for(let i=0;i<5;i++){
//         // colDef.push({ field: `${params.}`, headerName: 'ID', width: 90 })
//     }
//   }


const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.fetching.todos);
  const status = useSelector((state: RootState) => state.fetching.status);
  const error = useSelector((state: RootState) => state.fetching.error);
  

  

  const editUser=React.useCallback((params:GridRowParams)=>()=>{
  dispatch(modalToogleReducer());
  dispatch(editReducer(params))
},[]);
// let param:GridRowParams
const deleteUser=React.useCallback((params:GridRowParams)=>()=>{
    dispatch(dialogModalToogleReducer())
    dispatch(getRowParam(params))

// alert(params);
debugger
},[]);

let toogle=false

const toogleModal=React.useCallback((id:GridRowId)=>()=>{
    // alert(id)
//  return toogle =true;
 debugger
},[])


const getFullName=(params: GridValueGetterParams)=> {
    return `${params.row.first_name || ''} ${params.row.last_name|| ''}`;
  }


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 , hideable: false},
  //   { field: 'fullName', headerName: 'Title', width: 300 ,},
    {
      field: 'fullName',
      renderHeader: (params: GridColumnHeaderParams) => (
          <strong>
            {'Full Name'}
            <span role="img" aria-label="enjoy">
              🎂
            </span>
          </strong>
      
        ),
        valueGetter: getFullName,
        width:200
      },
      { field: 'country', headerName: 'Country',    
      renderHeader: (params: GridColumnHeaderParams) => (
          <strong>
            {params.field.toUpperCase()}
            <span role="img" aria-label="enjoy">
              🎂
            </span>
          </strong>),
          width: 130 },
      {
          field: 'email',
          headerName: 'Email',
          width: 160,
          // renderCell:renderC
          // valueGetter: getFullName,x
        },
        {
          field: 'actions',
          type: 'actions',
          width: 150,
          getActions: (params) => [
            <GridActionsCellItem
              
              icon={<Delete />}
              label="Delete"
              onClick={deleteUser(params)}
            />,
            <GridActionsCellItem
              
              icon={<Edit />}
              label="Edit"
              onClick={editUser(params)}
            />,
            <GridActionsCellItem
              icon={<Security />}
              label="Toggle Admin"
              // onClick={toggleAdmin(params.id)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<FileCopy />}
              label="Duplicate User"
              // onClick={duplicateUser(params.id)}
              showInMenu
            />,
          ],
        },
  
  ];
//   debugger
const fetchUserDetail=async(id:GridRowId)=>{
  const response=await axios.get<Inputs>(`https://api.slingacademy.com/v1/sample-data/users/${id}`)
  // console.log(response);
  // console.log(typeof(response.status));
  
  // console.log(response.data);
  if(response.status==200){
    dispatch(display(response.data))
    navigate(`/userInfo/${id}`)
  }
  
  return response.data;  
}
let navigate=useNavigate()
const handleEvent: GridEventListener<'cellClick'> = (
  params,  // GridCellParams<any>
  event,   // MuiEvent<React.MouseEvent<HTMLElement>>
  details, // GridCallbackDetails
) => {

  // console.log(params);
  let paramId=params.id
  let userView= fetchUserDetail(paramId)
  // console.log(userView);
  
  // console.log(event);
  // console.log(details);
  // redirect("/userInfo/");
 
  // window.location.href("/userInfo")
  // dispatch(display(paramId))
 
  
}


  useEffect(() => {
    if (status === 'idle') {
        debugger
      dispatch(fetchTodos());
        debugger
      
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={todos} columns={columns} initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10 ,
            }
          },
        }}
        // onCellClick={handleEvent}
        onRowClick={handleEvent}
        slots={{
            toolbar: GridToolbar,
          }}
        pageSizeOptions={[5, 10, 25]}/>
<TransitionsModal modalOptions={toogleModal}/>
<AlertDialogSlide  />

    </div>
  );
};

export default TodoList;
