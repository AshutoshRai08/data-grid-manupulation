import { createSlice  } from "@reduxjs/toolkit"
import { GridRowParams } from "@mui/x-data-grid"

const modalSlice=createSlice({    
    name:'modalState',
    initialState:{
       openModal:false,
       openDialog:false,
       rowPara:{} as GridRowParams
      },
    reducers:{
      modalToogleReducer:(state)=>{
        
            state.openModal=!state.openModal;
            // console.log(state.open);
          },
      dialogModalToogleReducer:(state)=>{

            state.openDialog=!state.openDialog;
      
          },
      getRowParam:(state,actions)=>{

            state.rowPara=actions.payload;
          },
          },
    },
);
export const {modalToogleReducer,dialogModalToogleReducer,getRowParam} =modalSlice.actions;
export default modalSlice.reducer;
   
