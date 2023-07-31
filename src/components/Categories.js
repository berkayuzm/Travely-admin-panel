import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import PlaceItem from './PlaceItem';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import CategoryItem from './CategoryItem';
import loadingIcon from  "../loading.gif"


function Categories() {
const [categories,setCategories]=useState([]);
const navigate = useNavigate();

useEffect(()=>{
    console.log("state==>"+categories)
})

useEffect(()=>{
    updateCategoryList()
},[])

const updateCategoryList=()=>{
    axios.get("https://localhost:44304/category").then((response)=>{
        console.log(response)
        setCategories(response.data.data)
      })
}

  return (
    <div className='content-container'>
      {
        categories.length>0 ? <>
          <h2 className='content-header-text' >Categories</h2>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Category ID</th>
          <th>Name</th>
          <th>Image URL</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
            categories.map((category,index)=>{
               return <CategoryItem key={index} obj={{
                    id:category.id,
                    name:category.name,
                    imageUrl:category.imageUrl,
                    status:category.status,
                    updateCategoryList:updateCategoryList
                }}/>
            })
        }
      </tbody>
    </Table>
    <Button name="button" className="detail-form-input" variant="primary" onClick={()=>{
        navigate("create")
    }} >
          New Category
        </Button>
        </>:<img className='loading-img' src={loadingIcon}/>
      }
    </div>
  )
}

export default Categories