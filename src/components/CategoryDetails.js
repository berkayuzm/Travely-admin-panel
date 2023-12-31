import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CategoryDetails() {
    const [nameText,setNameText]=useState("");
    const [imageUrlText,setImageUrlText]=useState("");
    const [status,setStatus]=useState(0);

    let {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`https://localhost:44304/category/${id}`).then((response)=>{
    setNameText(response.data.data.name)
    setImageUrlText(response.data.data.imageUrl)
    setStatus(response.data.data.status)
  })
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault();
        const values={
            id:parseInt(id),
            name:event.target.name.value,
            imageurl:event.target.imageUrl.value,
            status: event.target.status.value,
        }
        console.log(values)
        let result = document.cookie.split("; ").reduce((prev, current) => {
          const [name, ...value] = current.split("=");
          prev[name] = value.join("=");
          return prev;
        }, {});
        let accessToken = result._auth;
        const headers={"Authorization": `Bearer ${accessToken}`}
        axios.put(`https://localhost:44304/category`,values,{headers}).then(()=>{
            console.log("kayıt güncellendi")
            toast("Kayıt Güncellendi");
            navigate("/admin/categories")
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
        <Form.Label>Image URL</Form.Label>

        <Form.Control  name="imageUrl" value={imageUrlText} 
        onChange={e=>setImageUrlText(e.target.value)}
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

export default CategoryDetails