import React, { useEffect, useState } from 'react';
import { fetchJSON,fetchAutocomplete ,setValue,setCardValue} from '../../Features/data/dataDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';


const Autocomplete = () => {
    const dispatch=useDispatch();
    var val=useSelector((state:RootState)=>state.fetchJson.value)
    var suggestions=useSelector((state:RootState)=>state.fetchJson.suggestions)
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
useEffect(()=>{
val=val;
},[val,suggestions])
  const handleInputChange = (event:any) => {
        dispatch(setValue(event.target.value))
        dispatch(fetchAutocomplete(event.target.value))
        let vala=val
        let suggestion=suggestions
  };
  const setData=(event:any)=>{
    dispatch(setCardValue(event))
    // debugger
  }

  return (
    <div>
      <input type="text" value={val} onChange={handleInputChange} />
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