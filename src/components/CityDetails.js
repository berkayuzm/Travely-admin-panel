import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CityDetails() {
    const [nameText,setNameText]=useState("");
    const [status,setStatus]=useState(0);
    const navigate=useNavigate();
    let {id}=useParams();
    useEffect(()=>{
        axios.get(`https://localhost:44304/city/${id}`).then((response)=>{
    setNameText(response.data.data.name)
    setStatus(response.data.data.status);
  })
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault();
        const values={
            id:parseInt(id),
            name:event.target.name.value,
            status:event.target.status.value
        }
        console.log(values)
        axios.put(`https://localhost:44304/city`,values).then(()=>{
            console.log("kayıt güncellendi")
            toast("Kayıt Güncellendi!")
            navigate("/admin/cities")
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className='place-detail-container'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control  name="name" value={nameText} 
        onChange={e=>setNameText(e.target.value)}
        className='detail-form-input' />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Status</Form.Label>
        <Form.Control  name="status" value={status} 
        onChange={e=>setStatus(e.target.value)}
        className='detail-form-input' />
      </Form.Group>
      
      <Button className='detail-form-input' variant="primary" type="submit">
        Kaydı Güncelle
      </Button>
    </Form>
    </div>
  )
}

export default CityDetails