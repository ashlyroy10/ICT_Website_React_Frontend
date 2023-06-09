import React, { useEffect, useState } from 'react'
import Adminheader from './Adminheader'
import { Link, useNavigate, } from 'react-router-dom'
import { ValidateStaff } from './Validate';
import axios from 'axios';

const AddStaff = () => {


    const [staffDetails, setStaffDetails] = useState({
        staffname: '',
        photo:'',
        designation:'',
        department:''
    })
    // const [photo, setPhoto] = useState(null);

    let [errors, setErrors] = useState({});
    let [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const navigate = useNavigate();

    //Validation
    function handleInput(event) {
        event.preventDefault();
        const staffObj = {...staffDetails, [event.target.name]:event.target.value}    
        setStaffDetails(staffObj)
        setErrors(ValidateStaff(staffObj))               
    }

    // function handleStaffPhoto(event) {
      // console.log(event.target.files[0]);

      // const selectedFile = event.target.files[0];
      // const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      // if (!allowedExtensions.exec(selectedFile.name)) {
      //   alert('Please upload file having extensions .jpeg/.jpg/.png only.');
      //   event.target.value = '';
      //   return false;
      // }
      // setStaffDetails({...staffDetails, photo:event.target.files[0]})
    // }

     //Checking Errros
     useEffect(() => {
        if (Object.keys(errors).length === 0) {
          setIsButtonDisabled(false);
        } else {
          setIsButtonDisabled(true);
        }
      }, [errors]);

    //insert function
    const inputstaff = async (e) => {
      // console.log("in input staff")
      // const formData = new FormData();
      // formData.append('photo', staffDetails.photo, staffDetails.photo.name)
      // formData.append('staffname', staffDetails.staffname)
      // formData.append('designation', staffDetails.designation)
      // formData.append('department', staffDetails.department)
      // console.log(formData)
      try {
        // console.log("in input staff try section")
        const response = await axios.post("/addstaff", staffDetails);        
        alert(`${response.data.staffname} Added to Database`);        
        navigate("/admindashboard/staff_details"); 
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.error) {
          // display the error message to the user
          alert(error.response.data.error);
        }
        // alert("Error adding staff member:"+error);
      }
      
    };
    
    
  return (
    <div>
        <Adminheader />
        <div className='row d-flex justify-content-center font-link'>
        <div className='row pt-4'>
                <div className='col-1'>                    
                    <span>
                        <Link to={'/admindashboard/staff_details'}>
                            <button type='button' className='btn btn-warning w-50' data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Back to Dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-backspace-fill pb-1" viewBox="0 0 16 16">
                                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
                                </svg>
                            </button>
                        </Link>                     
                    </span>
                </div>

                <div className='col-11'>
                    <h3>Staff Details</h3>
                </div>
                
            </div>
            <hr />
                <div className='form-box w-50'>
                <form encType="multipart/form-data">
                <div class="mb-3">
                    <input type="text" class="form-control" id="sname" name='staffname' onChange={handleInput} placeholder='Name' maxLength={30}/>
                    {<p style={{color:"red"}}>{errors.staffname}</p>}
                </div>

                <div class="mb-3">
                    <label for="sImage" class="form-label">Upload Photo</label>
                    <input class="form-control" type="text" id="sImage" name='photo' onChange={handleInput} placeholder='Enter Photo URL' />
                    
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" id="designation" name='designation' onChange={handleInput} placeholder='Designation' maxLength={50}/>
                    {<p style={{color:"red"}}>{errors.designation}</p>}
                </div>

                <div class="mb-3">
                  <label for="department" class="form-label">Select Operational Unit:</label>
                  <select className='form-control' name="department" onChange={handleInput} id="department">
                    <option value=""></option>
                    <option value="acd">Academic</option>
                    <option value="crp">Corporate</option>
                    <option value="gov">Government</option>
                    <option value="its">IT Solutions</option>
                    <option value="kgo">Knowledge Office</option>
                    <option value="rtl">Retail</option>
                    <option value="crf">Corporate Functions</option>
                  </select>
                  {<p style={{color:"red"}}>{errors.department}</p>}

                </div>
                
                <div class="mb-3">
                <button className='btn btn-success w-25' onClick={inputstaff} disabled={isButtonDisabled}>Save</button>
                </div>
                </form>
                </div>
            </div> 
            
    </div>
  )
}

export default AddStaff
