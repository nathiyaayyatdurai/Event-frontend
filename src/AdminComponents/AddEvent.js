import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      imgUrl: '',
      eventname: '',
      date: '',

    },
    onSubmit: async (values) => {

      try {
        await axios.post("https://event-project2.herokuapp.com/add", values)
        navigate("/admindashboard")
      } catch (error) {
        console.log(error)
      }
    }

  })

  return (
    <>

      <div className='container mt-5'>
        <div className='row color'>
        <h4 className='mb-5'>Add New Event</h4>
          <form onSubmit={formik.handleSubmit}>

            <div className="form-outline mb-4">
              <label className="form-label" for="form6Example3">Image URL</label>
              <input type="text" name='imgUrl' id="form6Example3" className="form-control" onChange={formik.handleChange} value={formik.values.imgUrl} placeholder="img-url" required />
            </div>


            <div className="form-outline mb-4">
              <label className="form-label">Eventname</label>
              <input type="text" className="form-control" name='eventname' onChange={formik.handleChange} value={formik.values.eventname} placeholder="Event Name" required />
            </div>



            <div className="form-outline mb-4">
              <label className="form-label">Event Date</label>
              <input type="date" name="date" className="form-control" onChange={formik.handleChange} value={formik.values.date} required />
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Add new Event</button>
          </form>
        </div>
        {/* Add event title */}
       

      </div>
    </>
  )
}

export default AddEvent
