import React from 'react'
import Adminheader from './Adminheader'
import { Link } from 'react-router-dom'

const AddStaff = () => {
  return (
    <div>
        <Adminheader />
        <div className='row d-flex justify-content-center font-link'>
        <div className='row pt-4'>
                <div className='col-1'>                    
                    <span>
                        <Link to={'/admindashboard'}>
                            <button type='button' className='btn btn-warning w-50' data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Back to Dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backspace-fill pb-1" viewBox="0 0 16 16">
                                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                                </svg>
                            </button>
                        </Link>                     
                    </span>
                </div>

                <div className='col-11'>
                    <h3>Add Staff Details</h3>
                </div>
                
            </div>
            <hr />
                <div className='form-box w-50'>
                <form>
                <div class="mb-3">
                    <input type="text" class="form-control" id="sname" placeholder='Name' />
                </div>

                <div class="mb-3">
                    <label for="sImage" class="form-label">Upload Photo</label>
                    <input class="form-control" type="file" id="sImage" placeholder='Upload Photo' />
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="designation" placeholder='Designation' />
                </div>

                <div class="mb-3">
                  <label for="department" class="form-label">Select Operational Unit:</label>
                  <select className='form-control' name="department" id="department">
                    <option value="acd">Academic</option>
                    <option value="crp">Corporate</option>
                    <option value="gov">Government</option>
                    <option value="its">IT Solutions</option>
                    <option value="kgo">Knowledge Office</option>
                    <option value="rtl">Retail</option>
                    <option value="crf">Corporate Functions</option>
                  </select>                    
                </div>
                
                <div class="mb-3">
                    <button className='btn btn-success w-25'>Save</button>
                </div>
                </form>
                </div>
            </div> 
            
    </div>
  )
}

export default AddStaff
