import { useForm, SubmitHandler, useFormState } from "react-hook-form"
import React, { useCallback, useEffect } from "react"
import { Input,Button,TextField, colors, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, InputLabel } from "@mui/material"
import { red } from "@mui/material/colors"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { RootState } from "../../store"
import { Todo } from "../../Interfaces/typeRow"
// import { addRow } from "../../features/rowsUpdate/rowSlice"
// import MyTable from "../fetchedDataGrid/Table1/viewTable"

import { Inputs  } from "../../Interfaces/typeRow"
import { modalToogleReducer} from "../../Features/helper/modalReducer"
import { updateReducer } from "../../Features/data/fetchData"
import { GridRowParams } from "@mui/x-data-grid"

const FormModal=()=> {
  const dispatch=useDispatch();
  const rows:Inputs[] = useSelector((state: RootState) => state.fetching.rows);
  const open1=useSelector((state:RootState)=>state.modalReducer.openModal)
  
  let row={...rows}
  // console.log(rows[0].gender);
  // console.log(row);
//   let rows:{}=props.rows
//   console.log(rows);
  
//   const rows=useSelector((state: RootState) => state.rowUpdate.rows);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()
  let toogle=false
  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {
      // console.log(data);
    //   const json:Inputs ={
    //     id=
    //   }
        dispatch(modalToogleReducer())
        dispatch(updateReducer(data))
     
    // //   dispatch(addRow([data]))
    // //   let abc=rows;
    //   debugger
    // // console.log(data)
},[])
const {  gender,email,date_of_birth,zipcode,id}=rows[0]
// console.log(gender);
let d:Date =new Date(date_of_birth)
// console.log(typeof(d));
// console.log(d);
// console.log(date_of_birth);
// console.log(typeof(date_of_birth));

// let newDate=`${d.getDay()}  ${d.getMonth()}  ${d.getFullYear()}`
 
// const formattedDate = formatter.format(d);
// const formattedDate1 = formatter.format(date_of_birth);
debugger
// console.log(formattedDate);
// let newDate:Date=new Date(`${formattedDate}`)
function formatDate(date:any) {

    let day = date.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let year = date.getFullYear();
    return  year+ "-" + month + "-" +day ;
}


// Using Date() constructor
let dt= new Date(date_of_birth);
 
// Display output
console.log();;


// console.log(formattedDate1);
// console.log(newDate);
// console.log(typeof(formattedDate)\);
// console.log(typeof(newDate));

// console.log();
// console.log(date_of_birth);
let value=gender
const radioChanege=(e:any)=>{
    e.preventDefault()
value=e.target.value
debugger
}
let selectedValue=gender
const handleChange=(e:any)=>{
selectedValue=e.target.value
}

useEffect(() => {
    
    // Set values of registered fields equal to the properties of the row object
    setValue('gender', gender);
    setValue('email',email);
    setValue('zipcode',zipcode);
    setValue("date_of_birth",formatDate(d));
    setValue("id",id)
    
    // Add more setValue calls for additional fields if needed
  }, [value, email,date_of_birth,zipcode, setValue]);
  
  
  // console.log(watch("Name")) // watch Input focs value by passing the name of it


  return (<React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>
      
    {/* <FormControl >
        
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    defaultValue={gender}
    // value={value}
    onChange={radioChanege}
    
    
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl> */}

<InputLabel> Female</InputLabel><Input type="radio" value="female" placeholder="Female" {...register("gender")} />

<InputLabel> Male</InputLabel><Input type="radio"  value="male" aria-label="" {...register("gender")} />
<br/>
<InputLabel> Others</InputLabel><Input type="radio"  value="others" {...register("gender")}/>
      {/* <TextField {...register("gender",{required:"Name Cannot be Empty"})} sx={{mb:1}} placeholder="gender"  defaultValue="" />
      {errors.gender && <span style={{color:"red"}}>This field is required</span>} */}
<br/>

      <TextField type="date"  {...register("date_of_birth", { valueAsDate:true, required: {value:true,message:'DOB is Required'}, })} sx={{mb:1}} variant="outlined" placeholder="date_of_birth"/>
      {errors.date_of_birth && <span style={{color:"red"}}>{errors.date_of_birth.message}</span>}
      <br/>

      <TextField type="email" placeholder="email" {...register("email",  { required: "email is required", pattern: {value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ , message:'Enter Correct Mail'}})} variant="outlined" sx={{mb:1}}/>
      {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
      <br/>
      
      <TextField type="number" placeholder="Password" {...register("zipcode", { required:"Zipcode Required" ,minLength:{value:5,message:"Incorrect Format less then 5"},maxLength:{value:5,message:"Incorrect Format Greater then 5"}})} variant="outlined" sx={{mb:1}}/>
      {errors.zipcode && <span style={{color:"red"}}>{errors.zipcode.message}</span>}
      <br/>
      

      <Button variant="contained" type="submit"  >Submit</Button>
      <Input type="number" disabled {...register("id")} />
    </form>
  
    </React.Fragment>
  )
}
export default FormModal;