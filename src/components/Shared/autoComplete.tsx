import React, { useEffect, useState } from 'react';
import { fetchJSON,fetchAutocomplete ,setValue,setCardValue,setFocus} from '../../Features/data/dataDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import SearchIcon from '@mui/icons-material/Search';
import "./searchStyle.css"
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
    // val=event.target.value;
    setShowCSS(true);
    // debugger
  }
  const setSuggestion=()=>{
     dispatch(setFocus())
    //  setShowCSS(true);
    
  }
// let content= 
// const elemnt=document.getElementById("search-Input") as HTMLElement

  return <div><div className={showCSS ? 'search-input input-up input-field input-icons' : 'search-input input-field input-icons'} ><i className="fa fa-search icon"></i><input size={80} className='input-field' type="text" value={val} onChange={handleInputChange} onFocus={setSuggestion}/>
  </div>
  <ul style={{marginTop:'10px'}}>
 
  {suggestions.map((suggestion) => (
    <div>
    <li key={suggestion} onClick={()=>setData(suggestion)}>
    {suggestion}
  </li>
  </div>
  ))}
</ul>
</div>
  
};

export default Autocomplete;