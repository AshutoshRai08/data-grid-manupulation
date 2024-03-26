import axios from "axios"
import { createSlice,PayloadAction,createAsyncThunk  } from "@reduxjs/toolkit"
import { GridRowId, GridRowParams } from "@mui/x-data-grid"
import { Todo,Inputs } from "../../Interfaces/typeRow"
import { modalToogleReducer } from "../helper/modalReducer"
import { useEffect } from "react"
import { DisplayType } from "../../Interfaces/typeRow"


// export const fetchDetailed=createAsyncThunk<DisplayType,string>('user/fetchDetails',async(id)=>{
// const response=await axios.get<DisplayType>(`https://api.slingacademy.com/v1/sample-data/users/${id}`)

// console.log(response.data.user)
// console.log(response)
// return response.data.user;    
// })

const fetchDetailsReducer=createSlice({    
    name:'fetching',
    initialState:{
        success:false ,
        message:"",
        user:{} as Inputs
      },
    reducers:{
        display:(state,action:PayloadAction<Inputs>)=>{
        //   fetchDetailed.fulfilled(action.payload)
        // state.user[0]=
                state.user=action.payload
                
                // state.message=action.payload.message;
                // state.success=action.payload.success
                console.log(state.user);
                // console.log(state.success);
                // console.log(state.message);
              },
     },
    extraReducers:builder=>{
       
        // builder.addCase(fetchDetailed.fulfilled, (state, action) => {
        //     console.log((action.payload));
        //     state.user=action.payload
        //     console.log(state.user);
            
            
        //   });
       
    }
});
export const {display} = fetchDetailsReducer.actions;
export default fetchDetailsReducer.reducer;
   
export  const user=()=>{

}