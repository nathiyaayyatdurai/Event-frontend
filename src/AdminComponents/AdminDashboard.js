import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function AdminDashboard() {
    const [eventList, setEventList] = useState([])
    useEffect(() => {
        fetchTheaters()
    }, [])

    let fetchTheaters = async () => {
        try {
            let allEvents = await axios.get("https://event-project2.herokuapp.com/event")
            setEventList(allEvents.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure want to delete?")
            if (result) {
                await axios.delete(`https://event-project2.herokuapp.com/event/${id}`)
                fetchTheaters();
            }
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
                {/* SideBar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    <Link to="/admindashboard" className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-ticket"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3"> Admin Page</div>
                    </Link>

                    <hr className="sidebar-divider my-0" />

                    <li className="nav-item active">
                        <div className="nav-link" to="/userdashboard">
                            <i className="fas fa-film"></i>
                            <span>List of All Events</span></div>
                    </li>
                    <hr className="sidebar-divider" />
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to={"/ParticipateList"} data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-film"></i>
                            <span>Participate List</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-sign-out"></i>
                            <span onClick={handleLogout}>Logout</span>
                        </Link>
                    </li>
                </ul>

                {/* Dashboard content*/}
                <div id="content-wrapper" className="d-flex flex-column ">
                    <div id="content">

                        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3">
                            <h1 className="h3 mb-0 text-gray text-dark ml-3">All Event Data</h1>

                            <Link to={"/add-event"} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mr-4 px-3">Add Event</Link>
                        </div>

                        <div className="row">
                            <section id="gallery">
                                <div className="container mt-4">
                                    <div className="row">
                                        {
                                            eventList.map((event) => {
                                                return <div className="col-lg-4 col-md-6  mb-4">
                                                    <div className="card  text-center" style={{ color: "black" }} id="cardhover">
                                                        <img src={`${event.imgUrl}`} className="card-img-top imagee " alt="img" />
                                                        <div className="card-body fw-bold ">

                                                            <h2 className="text-danger "> {event.eventname}</h2>
                                                            
                                                            <h5 className='fs-6 fw-bold' >Eventdate : {event.date} : 12.00pm</h5>
                                                           
                                                            <Link to={`/edit-event/${event._id}`}><button className='btn btn-primary mr-3'>Edit</button></Link>
                                                            <button onClick={() => handleDelete(event._id)} className='btn btn-danger'>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                // eventList.map((event) => {
                                                //     return <div className="col-lg-4 col-md-6  mb-4">

                                                //         <div className="card  text-center" style={{ color: "black" }} id="cardhover" >
                                                //             <img src={`${event.imgUrl}`} className="card-img-top imagee " alt="img" />
                                                //             <div className="card-body fw-bold " >

                                                //                 <h2 className="text-danger "> {event.eventname}</h2>
                                                //                 <h5 className='fs-6 fw-bold' >Eventdate : {event.date} : 12.00pm</h5>
                                                //                 <h5 className='text-primary fs-6 fw-bold'>Event type : online</h5>
                                                //                 <Link to={"/registerform"} >
                                                //                     <button className='btn btn-primary mt-3 w-50' >Register</button>
                                                //                 </Link>

                                                //             </div>
                                                //         </div>
                                                //     </div>
                                                // })
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

export default AdminDashboard


