import { Url } from "url";

export interface Todo {
    offset: number;
    success: boolean;
    limit:number,   
    // completed: boolean;
    users:[]
    id:number
    

  }
  export interface Inputs  {
    id:number
    gender: string
    email: string
    date_of_birth:Date|string
    zipcode:number
    city:string,
country:string,
first_name: string,
job:string,
last_name: string,
latitude:number,
longitude: number,
phone:number,
profile_picture: Url,
state:string,
street:string

  }
  export interface DisplayType{
    success:boolean,
    message:string,
    user:Inputs[]
  }