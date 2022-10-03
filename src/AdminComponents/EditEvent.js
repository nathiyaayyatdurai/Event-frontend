import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';

function EditEvent() {
    let params = useParams()
    const navigate = useNavigate()
    useEffect(async () => {
        try {
            let userData = await axios.get(`https://event-project2.herokuapp.com/event/${params.id}`)
            formik.setValues(userData.data)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const formik = useFormik({
        initialValues: {
            imgUrl: '',
            eventname: '',
            date: '',

        },
        onSubmit: async (values) => {
            delete values._id;
            try {
                await axios.put(`https://event-project2.herokuapp.com/event/${params.id}`, values)
                navigate("/admindashboard")
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <>
            <div className='container mt-5 color'>
                <h4 className='mb-5'>Edit Event</h4>
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="imgUrl">Image URL</label>
                        <input type="text" name='imgUrl'  className="form-control" onChange={formik.handleChange} value={formik.values.imgUrl} placeholder="img-url" required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Eventname</label>
                        <input type="text" className="form-control" name='eventname' onChange={formik.handleChange} value={formik.values.eventname} placeholder="Event Name" required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Event Date</label>
                        <input type="date" name="date" className="form-control" onChange={formik.handleChange} value={formik.values.date} required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Update</button>

                </form>
            </div>
        </>
    )
}

export default EditEvent
