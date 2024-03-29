import ProdDetail from "./productDetails";
import Autocomplete from "../../Shared/autoComplete"
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
const ConditionalRender=()=> {
    const displayStatus = useSelector((state:RootState)=>state.fetchJson.status)
    debugger
    switch (displayStatus) {
      case 'idle':
        return <Autocomplete/>;
      case 'succeeded':
        
        return (<Autocomplete/>);

    case 'showAll':
        return(
<React.Fragment>
        <Autocomplete />
        <br/>
            <ProdDetail />
            </React.Fragment>
        )
      default:
        return <Autocomplete/>;
    }
  }
  export default ConditionalRender