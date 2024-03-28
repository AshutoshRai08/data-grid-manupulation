import React, { useEffect, useState } from 'react';
import { fetchJSON,fetchAutocomplete ,setValue,setCardValue,setFocus} from '../../Features/data/dataDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';


const Autocomplete = () => {
    const dispatch=useDispatch();
    let val=useSelector((state:RootState)=>state.fetchJson.value)
    let suggestions=useSelector((state:RootState)=>state.fetchJson.suggestions)
    let dataALL=useSelector((state:RootState)=>state.fetchJson.allData)
//   const [inputValue, setInputValue] = useState('');
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
useEffect(()=>{
val=val;
},[val,suggestions])
  const handleInputChange = (event:any) => {
        dispatch(setValue(event.target.value))
        dispatch(fetchAutocomplete(event.target.value))
   
  };
  const setData=(event:any)=>{
    dispatch(setCardValue(event))
    // debugger
  }
  const setSuggestion=()=>{
     dispatch(setFocus())
    
  }

  return (
    <div>
      <input type="text" value={val} onChange={handleInputChange} onFocus={setSuggestion} />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion} onClick={()=>setData(suggestion)}>
          {suggestion}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;