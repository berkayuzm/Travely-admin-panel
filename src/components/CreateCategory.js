import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateCategory() {
    const [nameText,setNameText]=useState("");
    const [imageUrlText,setImageUrlText]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const values={
            name:event.target.name.value,
            imageurl:event.target.imageUrl.value,

        }
        console.log(values)
        axios.post("https://localhost:44304/category",values).then(()=>{
            console.log("eklendi")
            toast("Başarıyla Eklendi!")
            navigate("/admin/categories")
        }).catch(()=>{
            console.log("eklenirken hata oluştu")
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
        <Form.Label>Image URL</Form.Label>

        <Form.Control  name="imageUrl" value={imageUrlText} 
        onChange={e=>setImageUrlText(e.target.value)}
        className='detail-form-input' />
      </Form.Group>
 

      
      
      <Button className='detail-form-input' variant="primary" type="submit">
        Kaydet
      </Button>
    </Form>
    </div>
  )
}

export default CreateCategory