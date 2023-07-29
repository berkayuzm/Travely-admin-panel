import React from 'react'
import "./Login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';


function Login() {
const signIn=useSignIn();
const navigate=useNavigate();

const handleSubmit=(event)=>{
    event.preventDefault();
    const values={
        username:event.target.name.value,
        password:event.target.password.value
    }
    event.target.name.value="";
    event.target.password.value="";

   axios.post("https://localhost:44304/auth/login",values).then((response)=>{
    signIn({
        token:response.data.accessToken,
        expiresIn:3600,
        tokenType:"Bearer",
        authState:{name:values.username}
    })
    navigate("/admin/places")
    toast("Giriş Başarılı!")
   }).catch((e)=>{
    console.log(e)
    toast("Kullanıcı adı veya şifre hatalı!")

   })
}

  return (
    <div className='login-container '>
      <ToastContainer/>
    <Form onSubmit={handleSubmit} className='form-container'>
    <Form.Group className="mb-3 " controlId="formBasicEmail">
      <Form.Label className='text-black' >Kullanıcı Adı</Form.Label>
      <Form.Control name='name' type="name" className='form-input' placeholder="Kullancı adı" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className='text-black'>Şifre</Form.Label>
      <Form.Control name='password' type="password" placeholder="Şifre" className='form-input' />
    </Form.Group>
    <Button variant="dark" type="submit" className='form-input'>
      Giriş Yap
    </Button>
  </Form>
  
  </div>

  )
}

export default Login