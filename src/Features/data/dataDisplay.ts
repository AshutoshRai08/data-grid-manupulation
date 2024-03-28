import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk, Action } from "@reduxjs/toolkit";
import { GridRowParams } from "@mui/x-data-grid";
import { productType,jsonType } from "../../Interfaces/typeRow";
import { stat } from "fs";
import { log } from "console";
import { useDispatch } from "react-redux";


export const fetchJSON = createAsyncThunk<jsonType>("data/fetchJSON", async () => {
  const response = await axios.get<jsonType>(
    "https://dummyjson.com/products"
  );

  return response.data;
});


const fetchJsonReducer = createSlice({
  name: "autcompelteState",
  initialState: {
    allData:[] as string[],
    suggestions: [] as string[],
    status: "idle",
    error: "",
    json: {} as jsonType,
    value:'',
    cardVal:''
  },
  reducers: {
        fetchAutocomplete:(state,action:PayloadAction<string>)=>{
       
            // let suggestions1=JSON.parse(JSON.stringify(state.suggestions));
            if(action.payload !==''){
               state.suggestions=state.allData.filter((suggestion:any) => suggestion.includes(action.payload));}
               else
               state.suggestions=[]
               debugger
        },
        setValue:(state,action)=>{
                state.value=action.payload
                debugger
        },
        setCardValue:(state,action)=>{
            state.suggestions=[]
                state.cardVal=action.payload
                console.log(state.cardVal);
                state.status = "showAll";
                debugger
        }
  },
 
  extraReducers: (builder) => {
    builder.addCase(fetchJSON.fulfilled, (state, action) => {
    
        state.json=action.payload
        state.allData=action.payload.products.map(mp=>mp.title)
        state.status = "succeeded";
        console.log(state.json);
        console.log(state.suggestions);
        
        })
  
    
  },
});
export const { fetchAutocomplete,setValue,setCardValue } = fetchJsonReducer.actions;
export default fetchJsonReducer.reducer;
