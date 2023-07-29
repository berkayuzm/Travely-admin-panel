import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CategoryItem(props) {
  const navigate = useNavigate();
  const navigateTo = (event) => {
    if (event.target.name != "button") {
      navigate(`${props.obj.id}`);
    } else {
      axios
        .delete(`https://localhost:44304/category/${props.obj.id}`)
        .then(() => {
          console.log("silme başarılı");
          toast("Başarıyla Silindi")
          props.obj.updateCategoryList();
        })
        .catch(() => {
          console.log("silme işleminde bir hata oluştu");
        });
    }
  };
  return (
    <tr className="place-item" onClick={navigateTo}>
      <td>{props.obj.id}</td>
      <td>{props.obj.name}</td>
      <td>{props.obj.imageUrl}</td>
      <td>
        <Button name="button" className="detail-form-input" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default CategoryItem;
