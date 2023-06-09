import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const AdminTestimonial = () => {
  let [testimonialList, setTestimonialList] = useState([]);
  // const filepath = "http://localhost:5000/uploads/testimonialphoto/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/alltestimonial");
        setTestimonialList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  
  //To delete one entry
  const deletetestimonial = async (id, e) => {
    
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        // const response = 
        await axios.delete(`/deletetestimonial/${id}`);
        alert("Entry Deleted");
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Error deleting testimonial");
      }
    }
  };

  return (
    <div className='container-fluid'>
      <div className='container d-flex flex-column mt-4 mb-4 text-center'>
        <div className='row'>
        <div className='col-2'>
            <span className=' d-flex justify-content-end'>
              <Link to={'/admindashboard/addtestimonials'}>
                <button className='btn btn-success w-100'>Add Testimonial</button>
              </Link>
            </span>
          </div>

          <div className='col-6'>
            <h5>Testimonials</h5>
          </div>          
        </div>
        
      </div>

      <table className="table table-striped table-hover mt-3">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Testimonial</th>
          <th scope="col">Student</th>
          <th scope="col">Photo</th>
          <th scope="col">Course</th>
          <th scope="col">Batch</th>
          <th scope="col">Operations</th>
        </tr>
        </thead>

        <tbody>
          {testimonialList.map((testimonials, index) => (
            <tr key={index}>
              <td className='align-middle'>{index+1}</td>
              <td className='align-middle' width={500}>{testimonials.testimonial}</td>
              <td className='align-middle'>{testimonials.student_name}</td>
              <td className='align-middle'><img src={testimonials.student_photo} alt={testimonials.student_name} width="80px" /></td>              
              <td className='align-middle'>{testimonials.student_course}</td>
              <td className='align-middle'>{testimonials.batch}</td>
              <td className='align-middle'>
              <Link to={`/edittestimonial/${testimonials._id}`}><button className='btn btn-success mx-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
                </button></Link>

                <button className='btn btn-danger' id='delete_button' onClick={(e) => deletetestimonial(testimonials._id, e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminTestimonial
