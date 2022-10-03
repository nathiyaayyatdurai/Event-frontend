import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
function UserDashboard() {

    const [eventList, setEventList] = useState([])
    useEffect(async () => {
        try {
            let dashboard = await axios.get("https://event-project2.herokuapp.com/userdashboard", {
                headers: {
                    Authorization: window.localStorage.getItem("my_token")
                }
            })
            console.log(dashboard.data.authorization)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchTheaters()
    }, [])

    let fetchTheaters = async () => {
        try {
            let allEvent = await axios.get("https://event-project2.herokuapp.com/event")
            setEventList(allEvent.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleLogout=()=>{
        localStorage.removeItem("my_token");
    }

    return (
        <>
            <div id="wrapper">
                {/* Dashboard content*/}
                <div id="content-wrapper" className="d-flex flex-column userdata"  >
                    <div id="content">

                        <div className="d-sm-flex justify-content-between mb-3 sticky-top" style={{ background: "black", padding: "20px" }}>
                            <h1 className="h3 mb-0" style={{ color: "white" }}>Coding Events</h1>
                            <Link className="nav-link collapsed " to="/" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-sign-out"></i>
                                <span onClick={handleLogout}>Logout</span>
                            </Link>
                        </div> 


                        <div className="row">

                            <section id="gallery">
                                <div className="container mt-4 ">
                                    <div className="row">
                                        {
                                            eventList.map((event) => {
                                                return <div className="col-lg-4 col-md-6  mb-4">
                                                 
                                                    <div className="card  text-center" style={{ color: "black" }} id="cardhover" >
                                                        <img src={`${event.imgUrl}`} className="card-img-top imagee " alt="img" />
                                                        <div className="card-body fw-bold " >
                                                           
                                                            <h2 className="text-danger "> {event.eventname}</h2>
                                                            <h5 className='fs-6 fw-bold' >Eventdate : {event.date} : 12.00pm</h5>
                                                            <h5 className='text-primary fs-6 fw-bold'>Event type : online</h5>                                                   
                                                            <Link to={"/registerform"} >                           
                                                                <button className='btn btn-primary mt-3 w-50' >Register</button>
                                                            </Link>
                                                                                                                     
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        } 

                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
