import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./user.css";

function UserLogin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post("https://event-project2.herokuapp.com/login", values)
        window.localStorage.setItem("my_token", loginData.data.token)
        navigate("/userdashboard")
      } catch (error) {
        console.log(error)
      }
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
       <section className="vh-100">
        <div className="container py-3 h-100" id='userLogin'>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card " id='card' >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      alt="login form"
                      className="img-fluid w-100 h-100"
                      id='loginimg'
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-5 p-lg-5 text-black">

                      <form onSubmit={formik.handleSubmit}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                       
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input type="email"  className="form-control form-control-lg" placeholder='Email address' name='email' onChange={formik.handleChange}
                              value={formik.values.email} required />
                         
                        </div>

                        <div className="form-outline mb-4 pwd ">
                      
                          <input  type={passwordShown ? "text" : "password"} name='password' className="form-control form-control-lg" placeholder='password' onChange={formik.handleChange}
                            value={formik.values.password} required />
                
                          <span className="p-viewer d-flex align-item-center">
                            <i onClick={togglePassword} className="fa fa-eye" aria-hidden="true"></i>
                          </span>
                        </div>

                        <div className="pt-1 mb-4">
                          <button type="submit " className="btn btn-dark btn-lg btn-block" >Login</button>
                        </div>
                        <hr className="my-4" />
                    
                        <p className="mb-5 pb-lg-2" >Don't have an account? <Link to={"/register"}>Register here</Link> </p>
                      
                        <hr className="my-4" />
                       
                        <p className="mb-5 pb-lg-2" >Admin account? <Link to={"/adminlogin"}>Admin</Link></p>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserLogin
