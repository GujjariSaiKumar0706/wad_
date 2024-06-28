import React from "react";
import {useForm} from 'react-hook-form';
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { hashSync } from "bcryptjs";
import { Link } from "react-router-dom";
function Signup(){

  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()

  function formSubmit(userObj){
    console.log(userObj)

     let hashpassword= hashSync(userObj.password,5)
     userObj.password=hashpassword;
     navigate('/signin')

    /*fetch('http://localhost:3000/users',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userObj)
    })
    .then(res=>{
      if(res.status===201){
        navigate('/signin')

      }
    })*/
  }

    return(


        <div className="text-centre ">
            <h1>
                Signup
            </h1>
            {/*<div className="form-group mx-sm-3 mb-2">
            <input type='text'   className=' form-control m-2  ' id="username" placeholder="Username" />
            <input type='email'   className='form-control ' id="email" placeholder="Email" />
            <input type='number'   className='form-control ' id="mobilenumber" placeholder="Mobile Number" />
            <input type='text'   className='form-control ' id="password" placeholder="Password" />
            <button className="bg-success">signup</button>
    </div>*/}

<Form className="Form-inline" onSubmit={handleSubmit(formSubmit)} >
 
  <div className="Form-group m-5">
  
  <label htmlFor='username' className='to form-label text-primary '>Username</label>
                    <input type='text'   className='form-control two m-2 p-1 ' id="username" {...register('username',{required:true,minLength:4})} />
                    {errors.username?.type==='required' && <p className="lead text-danger">username is required</p>}
                    {errors.username?.type==='minLength' && <p className="lead text-danger">minLength of 4</p>}

  
  </div>
  <div className="Form-group m-5">
    
    <label htmlFor='email' className='to text-primary form-label'>email</label>
                <input type='email'   className='two form-control m-2 ' id="email" {...register('email',{required:true})} />
                {errors.email?.type==='required' && <p className="lead text-danger">email is required</p>}
  </div>
  <div className="Form-group m-5">
  <label htmlFor='password' className='to text-primary form-label'>password</label>
    <input type="password" className="form-control m-2" id="password" placeholder="Password" {...register('password',{required:true})}/>
    {errors.password?.type==='required' && <p className="lead text-danger">password is required</p>}
  </div>
 
  <div className="Form-group m-5">
    <input type="number" className="form-control" id="phonenumber" placeholder="phonenumber" {...register('phonenumber',{required:true,minLength:10,maxLength:10})} />
    {errors.phonenumber?.type==='required' && <p className="lead text-danger">phonenumber is required</p>}
                {errors.phonenumber?.type==='minLength' && <p>Phone contains only 10 digits</p>}
                {errors.phonenumber?.type==='maxLength' && <p>Phone contains only 10 digits</p>}
  </div>
  <button type="submit" className="btn btn-primary mb-2">Signin</button>
</Form>
<p className="mr-5">Already registered
  <Link to='/signin' className="m-5">Signin</Link>
</p>
        </div>
    )
}

export default Signup;