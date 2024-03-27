import { createSlice,PayloadAction  } from "@reduxjs/toolkit"
import { Inputs } from "../../Interfaces/typeRow"


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

                state.user=action.payload
                
                console.log(state.user);
           
              },
     },

});
export const {display} = fetchDetailsReducer.actions;
export default fetchDetailsReducer.reducer;
