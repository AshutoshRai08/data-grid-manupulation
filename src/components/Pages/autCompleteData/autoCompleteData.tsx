import ConditionalRender from "./conditionalRender";
import { fetchJSON } from "../../../Features/data/dataDisplay";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import React from "react";
import { Box } from "@mui/material";

const ViewComplete=()=>{
    let status=useSelector((state:RootState)=>state.fetchJson.status)
    const dispatch = useDispatch<AppDispatch>();
    // const suggestions = ['apple', 'banana', 'cherry'];
    useEffect(() => {
        if (status === "idle") {
          debugger;
          dispatch(fetchJSON());
          debugger;
        }
      }, [dispatch, status]);
      
    return (
        <React.Fragment>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'600px'}}>
            <ConditionalRender/>
            </div>
          
                {/* <SearchBar/> */}
      </React.Fragment>
    
)
}
export default ViewComplete