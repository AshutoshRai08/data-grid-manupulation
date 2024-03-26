import { useForm, SubmitHandler } from "react-hook-form";
import React, { useCallback, useEffect } from "react";
import {
  Input,
  Button,
  TextField,
  InputLabel,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Inputs } from "../../Interfaces/typeRow";
import { modalToogleReducer } from "../../Features/helper/modalReducer";
import { updateReducer } from "../../Features/data/fetchData";

const FormModal = () => {
  const dispatch = useDispatch();
  const rows: Inputs[] = useSelector((state: RootState) => state.fetching.rows);
  const open1 = useSelector((state: RootState) => state.modalReducer.openModal);

  let row = { ...rows };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  let toogle = false;
  const onSubmit: SubmitHandler<Inputs> = useCallback((data) => {

    dispatch(modalToogleReducer());
    dispatch(updateReducer(data));

  }, []);
  const { gender, email, date_of_birth, zipcode, id } = rows[0];
  // console.log(gender);
  let d: Date = new Date(date_of_birth);
  // let newDate=`${d.getDay()}  ${d.getMonth()}  ${d.getFullYear()}`
  // const formattedDate = formatter.format(d);
  // const formattedDate1 = formatter.format(date_of_birth);
  debugger;
  function formatDate(date: any) {
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    return year + "-" + month + "-" + day;
  }



  let value = gender;

  useEffect(() => {
    // Set values of registered fields equal to the properties of the row object
    setValue("gender", gender);
    setValue("email", email);
    setValue("zipcode", zipcode);
    setValue("date_of_birth", formatDate(d));
    setValue("id", id);

  }, [value, email, date_of_birth, zipcode, setValue]);

  // console.log(watch("Name")) // watch Input focs value by passing the name of it

  return (
    <React.Fragment>
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

        <InputLabel> Female</InputLabel>
        <Input
          type="radio"
          value="female"
          placeholder="Female"
          {...register("gender")}
        />

        <InputLabel> Male</InputLabel>
        <Input
          type="radio"
          value="male"
          aria-label=""
          {...register("gender")}
        />
        <br />
        <InputLabel> Others</InputLabel>
        <Input type="radio" value="others" {...register("gender")} />
        <br />
         

        <TextField
          type="date"
          {...register("date_of_birth", {
            valueAsDate: true,
            required: { value: true, message: "DOB is Required" },
          })}
          sx={{ mb: 1 }}
          variant="outlined"
          placeholder="date_of_birth"
        />
           <span role="img" aria-label="enjoy">
              🎂
            </span>
        {errors.date_of_birth && (
          <span style={{ color: "red" }}>{errors.date_of_birth.message}</span>
        )}
        <br />

        <TextField
          type="email"
          placeholder="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter Correct Mail",
            },
          })}
          variant="outlined"
          sx={{ mb: 1 }}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <br />

        <TextField
          type="number"
          placeholder="Password"
          {...register("zipcode", {
            required: "Zipcode Required",
            minLength: { value: 5, message: "Incorrect Format less then 5" },
            maxLength: { value: 5, message: "Incorrect Format Greater then 5" },
          })}
          variant="outlined"
          sx={{ mb: 1 }}
        />
        {errors.zipcode && (
          <span style={{ color: "red" }}>{errors.zipcode.message}</span>
        )}
        <br />

        <Button variant="contained" type="submit">
          Submit
        </Button>
        <Input type="number" disabled {...register("id")} />
      </form>
    </React.Fragment>
  );
};
export default FormModal;
