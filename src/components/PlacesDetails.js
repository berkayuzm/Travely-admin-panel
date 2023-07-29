import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function PlacesDetails() {
    const [nameText,setNameText]=useState("");
    const [descriptionText,setDescriptionText]=useState("");
    const [imageUrlText,setImageUrlText]=useState("");
    const [coordinateX,setCoordinateX]=useState(0);
    const [coordinateY,setCoordinateY]=useState(0);
    const navigate=useNavigate();
    let {id}=useParams();
    useEffect(()=>{
        axios.get(`https://localhost:44304/place/${id}`).then((response)=>{
    setNameText(response.data.data.name)
    setDescriptionText(response.data.data.description)
    setImageUrlText(response.data.data.imageUrl)
    setCoordinateX(response.data.data.coordinateX)
    setCoordinateY(response.data.data.coordinateY)
  })
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault();
        const values={
            id:parseInt(id),
            name:event.target.name.value,
            description:event.target.description.value,
            imageurl:event.target.imageUrl.value,
            coordinatex:event.target.coordinateX.value,
            coordinatey:event.target.coordinateY.value,

        }
        console.log(values)
        axios.put("https://localhost:44304/place",values).then(()=>{
            console.log("kayıt güncellendi")
            toast("Kayıt Güncellendi!")
            navigate("/admin/places")
        }).catch(()=>{
            console.log("güncellemede hata oluştu")
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
        <Form.Label>Description</Form.Label>
        <Form.Control  name="description" value={descriptionText} 
        onChange={e=>setDescriptionText(e.target.value)}
        
        className='detail-form-input' />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Image URL</Form.Label>

        <Form.Control  name="imageUrl" value={imageUrlText} 
        onChange={e=>setImageUrlText(e.target.value)}
        className='detail-form-input' />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Coordinate X</Form.Label>
        <Form.Control  name="coordinateX" value={coordinateX} 
        onChange={e=>setCoordinateX(e.target.value)}
        className='detail-form-input' />

      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Coordinate Y</Form.Label>
        <Form.Control  name="coordinateY" value={coordinateY} 
        onChange={e=>setCoordinateY(e.target.value)}
        
        className='detail-form-input' />
      </Form.Group>

      
      
      <Button className='detail-form-input' variant="primary" type="submit">
        Kaydı Güncelle
      </Button>
    </Form>
    </div>
  )
}

export default PlacesDetails