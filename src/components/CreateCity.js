import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CreateCity() {
  const [nameText, setNameText] = useState("");
  const [status, setStatus] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      name: event.target.name.value,
      status: event.target.status.value,
    };
    console.log(values);
    axios
      .post("https://localhost:44304/cities", values)
      .then(() => {
        console.log("eklendi");
        toast("Başarıyla Eklendi!");
        navigate("/admin/cities");
      })
      .catch(() => {
        console.log("eklenirken hata oluştu");
      });
  };
  return (
    <div className="place-detail-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
            className="detail-form-input"
          />
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="detail-form-input"
            />
          </Form.Group>
        </Form.Group>
        <Button className="detail-form-input" variant="primary" type="submit">
          Kaydet
        </Button>
      </Form>
    </div>
  );
}

export default CreateCity;
