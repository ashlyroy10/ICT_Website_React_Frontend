import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import HeaderMain from '../components/HeaderMain'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from "axios";

const Course = () => {
    
  let { id } = useParams();
  // const filepath = "http://localhost:5000/uploads/coursethumb/"
  
  const [singlecourse, setsinglecourse] = useState([]);

  let badgeClass = '';
  let badgeText = '';

  switch (singlecourse.cstatus) {
    case 'op':
      badgeClass = 'text-bg-success';
      badgeText = 'OPEN';
      break;
    case 'cl':
      badgeClass = 'text-bg-danger';
      badgeText = 'CLOSED';
      break;
    case 'ca':
      badgeClass = 'text-bg-secondary';
      badgeText = 'CANCELLED';
      break;
    default:
      badgeClass = 'text-bg-secondary';
      badgeText = 'UNKNOWN';
      break;
  }


  useEffect(() => {
    
    axios.get(`/getcourse/${id}`)
      .then((response) => {
        setsinglecourse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    
    <div className='singlepage'>
      <HeaderMain/>
      <div class="row">
          <h1>{singlecourse.coursetitle}</h1>
        <div class="firstbtn row">
          <h1><button class="rounded-pill btn btn-danger">Starts on {singlecourse.startdate}</button></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <img src={singlecourse.thumbImage} alt={singlecourse.coursetitle+"_thumbnail"} class="float-start" width="850px" height="450"/>
        </div>
        <div class="col-md-7">
          <div class="side-info mt-5">
            <button type = "button" class = "btn btn-outline-primary btn-lg fw-medium">{singlecourse.fee} INR+GST</button><br/><br/>
            <span className={`badge rounded-pill fs-5 fw-normal ${badgeClass}`}>{badgeText}</span><br/><br/>
            <h3 class="text-center">This course includes</h3>
            <ul>
              <li class="text-center"><strong>{singlecourse.duration} Hours</strong></li>
              <li class="text-center"><strong>{singlecourse.cmode} Classes &</strong></li>
              <li class="text-center"><strong>{singlecourse.internship} Hrs of Internship</strong></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-12">
          <div className="course-container container font-link">
            <div className="course-box bg-light">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <strong>Overview</strong></button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                          <p>{singlecourse.overview}</p>
                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <strong>Scope of the Program</strong></button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                          <ul>
                              <li class="text-start">Familiarise with basics of Python Programming</li>
                              <li class="text-start">Familiarise with Database Concepts</li>
                              <li class="text-start">Develop and deploy Web Applications using Python</li>
                          </ul>
                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <strong>Objectives</strong></button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                          <ul>
                            <li class="text-start">Python is ranked number one in the IEEE spectrum ranking of Programming Languages in 2020.</li>
                            <li class="text-start">Opportunities in the career of python are increasing tremendously in the world. </li>
                            <li class="text-start">Whether you work in artificial intelligence or finance or are pursuing a career in web development or data science, Python is one of the most important skills you can learn.</li>
                            <li class="text-start">Job roles advanced in python with high promising pay in large companies.</li> 
                          </ul> 
                      </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <strong>Highlights</strong></button>
                  </h2>
                  <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <ul>
                          <li class="text-start">Suitable for graduates and working professionals.</li>
                          <li class="text-start">75% scholarship for meritorious candidates (Keralites). </li>
                          <li class="text-start">Access to 14000+ LinkedIn courses.</li>
                          <li class="text-start">Employability skills training.</li>
                          <li class="text-start">Virtual Internship.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <strong>Eligibility</strong></button>
                  </h2>
                  <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p class="text-start">The following shall be eligible to join the course;</p>
                      <ul>
                        <li class="text-start">Engineering or science graduates / three-year diploma holders in any engineering branches, final year/pre-final year students of these courses, having a foundation level knowledge (plus two equivalent) in Mathematics and Computer fundamental skills.</li>
                        <li class="text-start">Students who have completed their graduation but are awaiting the final results can also apply. </li>
                      </ul>
                      <p class="text-start"><i>*Please note that the ICT Academy of Kerala will have the right to cancel the candidature at any point if found ineligible.</i></p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <strong>Course Agenda</strong></button>
                  </h2>
                  <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <ul>
                        <li class="text-start">Introduction to Python Programming</li>
                        <li class="text-start">Python Variables </li>
                        <li class="text-start">Data Structures</li>
                        <li class="text-start">Control Structures</li>
                        <li class="text-start">Functions in Python</li>
                        <li class="text-start">Introduction to Web development</li>
                        <li class="text-start">Basics of Database</li>
                        <li class="text-start">Web Application Development and Deployment</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <strong>Course Fee</strong></button>
                  </h2>
                  <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <p><strong>{singlecourse.fee} INR + 18% GST</strong></p>
                      <ul>
                        <li class="text-start">The candidates who score 61% and above on the admission test shall be eligible for the scholarship, provided they are unemployed. 
                          All eligible candidates will receive 75% of their total fee as a scholarship.</li>
                        <li class="text-start">Candidates who are taking admission on regular mode (without scholarship) receive 20% of cashback once they complete the course successfully.</li>
                      </ul> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/> 
    </div>
  )
}

export default Course
