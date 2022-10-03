import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function ParticipateList() {
  const [users, setUsers] = useState([])

  useEffect(() => { 
    fetchMovies()
  }, [])


  let fetchMovies = async () => {
    try {
      let userData = await axios.get("https://event-project2.herokuapp.com/userdata")
      setUsers(userData.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="bg-dark navbar-dark d-flex align-item-center justify-content-between">
        <Link to={"/admindashboard"} className='btn btn-primary' >Go Back</Link>
      </nav>

      <section id="gallery">
        <div className="container mt-4">
          <div className="row">
            <div className="table-responsive">
              <table className="table text-center ">
                <thead className="table-dark ">
                  <tr >
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Member</th>
                    <th>Gender</th>

                  </tr>
                </thead>
                <tbody className='fw-bold color'>
                  {
                    users.map((user, index) => {      // index is just uniqe value seperateed,only for map method this place use or not use no problem
                      return <tr key={index + 1} >
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.member}</td>
                        <td>{user.gender}</td>
                      </tr>

                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ParticipateList
