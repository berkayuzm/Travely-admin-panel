import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import PlaceItem from './PlaceItem';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import loadingIcon from  "../loading.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Places() {
const [places,setPlaces]=useState([]);
const navigate = useNavigate();

useEffect(()=>{
    console.log("state==>"+places)
})

useEffect(()=>{
  updatePlaceList()
},[])

const updatePlaceList=()=>{
    axios.get("https://localhost:44304/place").then((response)=>{
        console.log(response)
        setPlaces(response.data.data)
      })
}


    return (
       
    <div className='content-container'>
       {
        places.length>0 ? <> <h2 className='content-header-text'>Places</h2>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Place ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image URL</th>
          <th>Coordinate X</th>
          <th>Coordinate Y</th>
          <th>Category ID</th>
          <th>City ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
            places.map((place,index)=>{
               return <PlaceItem key={index} obj={{
                    id:place.id,
                    name:place.name,
                    description:place.description,
                    imageUrl:place.imageUrl,
                    coordinateX:place.coordinateX,
                    coordinateY:place.coordinateY,
                    categoryId:place.categoryId,
                    cityId:place.cityId,
                    status:place.status,
                    updatePlaceList:updatePlaceList
                }}/>
            })
        }
      </tbody>
    </Table>
    <Button name="button" className="detail-form-input" variant="primary" onClick={()=>{
        navigate("create")
    }} >
          New Place
        </Button></> : <img className='loading-img' src={loadingIcon}/>
       }
       
    </div>
  )
}

export default Places