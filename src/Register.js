import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        await axios.post("https://event-project2.herokuapp.com/register", values)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    },
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };


  return (
    <div>
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
                          {/* <i className="fas fa-cubes fa-2x me-3" ></i> */}
                           <span className="h1 fw-bold mb-0">Register here</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" >Sign up into your account</h5>
                        <div className="form-outline mb-4">
                          <input type="text"  className="form-control form-control-lg" placeholder='Enter your name' name='name' onChange={formik.handleChange}
                              value={formik.values.name} required />
                         
                        </div>
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
                          <button type="submit " className="btn btn-dark btn-lg btn-block" >Register</button>
                        </div>
                        <hr className="my-4" />
                    
                        <p className="mb-5 pb-lg-2" >Click here to Login Page ⬇ <Link to={"/"}> Login</Link> </p>
      
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
