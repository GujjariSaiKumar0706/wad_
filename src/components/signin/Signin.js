import React from "react";
import Interface from "../interface/Interface";
import {useForm} from 'react-hook-form';
import { Form } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import { compareSync } from "bcryptjs";
function Signin(){
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()

  function formSubmit(userObj){
    console.log(userObj)
    /*  fetch(`http://localhost:5000/users?username=${userObj.username}`,{ method: "GET"})
      .then((res)=> res.json())
      .then((userArray)=>{if(userArray.length===0)
      {

        alert("Invalid username")
      }
    else{
      let result=compareSync(userObj.password,userArray[0].password)
      if (result===true)
      {

        navigate('/Interface',{state:userArray[0]})

      }
      else{
        alert("Invalid password ")
      }

    }}
      );

      
  */
  }

    return(


        <div>
            <h1>
                Signin
            </h1>
            <Form className="Form-inline" onSubmit={handleSubmit(formSubmit)} >
 

 <div className="Form-group m-5">
 <label htmlFor='username' className='to form-label text-primary '>Username</label>
                    <input type='text'   className='form-control two m-2 p-1 ' id="username" {...register('username',{required:true,minLength:4})} />
                    {errors.username?.type==='required' && <p className="lead text-danger">username is required</p>}
                    {errors.username?.type==='minLength' && <p className="lead text-danger">minLength of 4</p>}



 {/*<label htmlFor='username' className='to form-label text-primary '>username</label>
                    <input type='text'   className='form-control two m-2 p-1 ' id="username" {...register('username',{required:true,minLength:4})} />
                    {errors.username?.type==='required' && <p className="lead text-danger">username is required</p>}
                    {errors.username?.type==='minLength' && <p className="lead text-danger">minLength of 4</p>}
    */}
 </div>
 <div className="Form-group m-5">
 <label htmlFor='password' className='to text-primary form-label'>password</label>
   <input type="password" className="form-control m-2" id="password" placeholder="Password" {...register('password',{required:true})}/>
   {errors.password?.type==='required' && <p className="lead text-danger">password is required</p>}
 </div>

 
 <button type="submit" className="btn btn-primary mb-2">Login</button>
</Form>
<p className="mr-5">New User then signup First
  <Link to='/signup' className="m-5">Signup</Link>
</p>
        </div>
    )
}

export default Signin;