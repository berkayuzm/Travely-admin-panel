import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlaceItem(props) {
  const navigate = useNavigate();
  const navigateTo = (event) => {
    if(event.target.name!="button"){
        navigate(`${props.obj.id}`);
    }
    else{
        axios.delete(`https://localhost:44304/place/${props.obj.id}`).then(()=>{
            console.log("silme başarılı")
            props.obj.updatePlaceList();
            toast("Başarıyla silindi!")
        }).catch(()=>{
            console.log("silme işleminde bir hata oluştu")
        })
    }
  };
  return (
    <tr className="place-item" onClick={navigateTo}>
      <td>{props.obj.id}</td>
      <td>{props.obj.name}</td>
      <td>{props.obj.description}</td>
      <td>{props.obj.imageUrl}</td>
      <td>{props.obj.coordinateX}</td>
      <td>{props.obj.coordinateY}</td>
      <td>{props.obj.categoryId}</td>
      <td>{props.obj.cityId}</td>
      <td>{props.obj.status}</td>
      <td>
        <Button name="button" className="detail-form-input" variant="danger" >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default PlaceItem;
