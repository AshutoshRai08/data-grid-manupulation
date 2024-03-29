import React, { useEffect, useState } from 'react';
import { fetchJSON,fetchAutocomplete ,setValue,setCardValue,setFocus} from '../../Features/data/dataDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import "./trasnform.css"
// import { createPortal } from 'react-dom';



const Autocomplete = () => {
  
    const dispatch=useDispatch();
    let val=useSelector((state:RootState)=>state.fetchJson.value)
    let suggestions=useSelector((state:RootState)=>state.fetchJson.suggestions)
    let dataALL=useSelector((state:RootState)=>state.fetchJson.allData)
    const [showCSS, setShowCSS] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
useEffect(()=>{
val=val;
},[val,suggestions])
  const handleInputChange = (event:any) => {
    
        dispatch(setValue(event.target.value))
        dispatch(fetchAutocomplete(event.target.value))
        setShowCSS(event.target.value !== '');
   
  };
  const setData=(event:any)=>{
    dispatch(setCardValue(event))
    setShowCSS(true);
    // debugger
  }
  const setSuggestion=()=>{
     dispatch(setFocus())
    //  setShowCSS(true);
    
  }
// let content= 
// const elemnt=document.getElementById("search-Input") as HTMLElement

  return <div><input size={50} style={{marginTop:'100px'}} className={showCSS ? 'search-input input-up' : 'search-input'} type="text" value={val} onChange={handleInputChange} onFocus={setSuggestion}/>
  
  <ul style={{marginTop:'10px'}}>

  {suggestions.map((suggestion) => (
    <li key={suggestion} onClick={()=>setData(suggestion)}>
    {suggestion}
  </li>
  ))}
</ul>
</div>
  
};

export default Autocomplete;