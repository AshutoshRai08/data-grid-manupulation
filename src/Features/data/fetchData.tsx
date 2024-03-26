import axios from "axios"
import { createSlice,PayloadAction,createAsyncThunk  } from "@reduxjs/toolkit"
import { GridRowParams } from "@mui/x-data-grid"
import { Todo,Inputs } from "../../Interfaces/typeRow"
import { modalToogleReducer } from "../helper/modalReducer"
import { useEffect } from "react"
import { log } from "util"
/* eslint-disable */
interface dataTypeFetch{
    users:[],
    // limit:number,
    // message:string,
    // offset:number,
    // success:string,
    // total_users:number,
    // prototype:{}
}
const initialState:dataTypeFetch={
    users:[]
}

export const fetchTodos=createAsyncThunk('todos/fetchTodos',async()=>{
const response=await axios.get<Todo>("https://api.slingacademy.com/v1/sample-data/users?offset=0&limit=10")
// let users:Todo[]=response.data.users
// console.log(response.data.users);
// console.log(response.data.users)
// console.log(response)
// let respons:Todo
//  respons=response.data;
return response.data.users;    
})
type rddd={
  id:number,
  title:string
}
const fetchReducer=createSlice({    
    name:'fetching',
    initialState:{
        todos: [] as Inputs[] ,
        status: 'idle',
        error: '',
        rows:[] as Inputs[],
        modalState:false
      },
    reducers:{
      editReducer:(state,action:PayloadAction<GridRowParams>)=>{
        state.rows=JSON.parse(JSON.stringify(state.todos));
        state.rows=state.rows.filter(data=>data.id == action.payload.id)  
          // console.log(state.rows);
          // state.modalState=true

             
          },
          updateReducer:(state,action:PayloadAction<Inputs>)=>{
            // console.log(action.payload);
            
            let rowUpdate:Inputs=JSON.parse(JSON.stringify(state.todos)).find((todo:any)=>todo.id==action.payload.id)
            // const rowUpdate:Inputs|undefined=Ntodo.find(todo=>todo.id=action.payload.id)
            // console.log(rowUpdate);
            
            debugger
    //  console.log({...rowUpdate});
  //   if(rowUpdate){
  //  l}
            if(rowUpdate){
              // rowUpdate
              rowUpdate.email=action.payload.email
              rowUpdate.gender=action.payload.gender
              rowUpdate.zipcode=action.payload.zipcode
              // debugger
              // rowUpdate.=action.payload
             let indexBe= JSON.parse(JSON.stringify(state.todos)).findIndex((data:any)=>data.id == action.payload.id)
             debugger
            //  console.log(indexBe,Ntodo);
             
            //  state.todos.map(mp=>{
            //   mp.city
              
            //  })
            
             state.todos.splice(indexBe,1,rowUpdate)
             console.log(JSON.parse(JSON.stringify(state.todos)));
             console.log(rowUpdate);
             debugger
            }
            
            

          },

        deleteTodo: (state, action: PayloadAction<GridRowParams>) => {
          console.log(action.payload);
          
          // console.log(JSON.parse(JSON.stringify(state.todos)));
          let Ntodo:Inputs[]=JSON.parse(JSON.stringify(state.todos))
          state.todos=Ntodo.filter(todo=>todo.id!==action.payload.id)
          // console.log(Ntodo);
          // console.log(state.todos );
          
          
            // console.log(action.payload);
            
        // state.todos= state.todos.filter(todo=>{
        //   console.log(todo.id);
        //   console.log(todo.limit);
          
        //       // todo.id !== action.payload
        //   })

            // state.todos = state.todos.filter((row) => {
            // row==action.payload
            // });
          },
    },
    extraReducers:builder=>{
        builder.addCase(fetchTodos.pending,(state)=>{
            state.status= 'loading';
        })
        // builder.addCase(modalToogleReducer.type,(state)=>{
        //     state.
        // })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            // console.log((action.payload));
            state.todos = action.payload;
            // console.log(state.todos);
            state.status = 'succeeded';
            
          });
          builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message !== undefined ? action.error.message :'' ; 
          });
    }
});
export const {deleteTodo,editReducer,updateReducer} = fetchReducer.actions;
export default fetchReducer.reducer;
   
