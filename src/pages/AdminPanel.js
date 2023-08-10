import Button from "react-bootstrap/Button";
import React from "react";
import { useSignOut } from "react-auth-kit";
import { Route, useNavigate, Routes, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Places from "../components/Places";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function AdminPanel() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const signOutFunc = () => {
    signOut();
    //       let result= document.cookie.split('; ').reduce((prev, current) => {
    //     const [name, ...value] = current.split('=');
    //     prev[name] = value.join('=');
    //     return prev;
    //   }, {});
    //  let accessToken=result._auth;
    //   axios.interceptors.request.use(
    //     config=>{
    //       config.headers.Authorization=`x`;
    //       return config;
    //     },
    //     error=>{
    //       return Promise.reject(error);
    //     }
    //   );
    navigate("/");
  };

  return (
    <>
      <div className="admin-panel-container">
        {/* <Button className="btn btn-primary" onClick={signOutFunc}>
          Çıkış yap
        </Button> */}
        <ToastContainer />
        <div className="main-container">
          <div className="side-bar-fix">
            <div className="side-bar">
              <SideBar />
            </div>
          </div>
          <div className="content">
            <div className="welcome-area">
              <h1>Hoş Geldiniz</h1>
              <Button className="btn btn-warning btn-lg sign-out-button" onClick={signOutFunc}>
                Çıkış yap
              </Button>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
