import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function EmpDetails() {

const {empid}=useParams();

const [empData, setEmpData]=useState({});


useEffect(()=>{
  fetch("http://localhost:8000/employee/"+empid)
  .then(res=>res.json())
  .then(data=>{
      setEmpData(data);
  })
  .catch(err=>console.error(err))
  
},[])

  return (
    <div>
      <br />
      <h3>Employee Details</h3>
      <hr style={{margin:'0 10rem'}}/>
      <br />
      {
        empData &&
        <div style={{margin:'0 auto'}} className='card w-25 p-4 text-start'>
          <p>Name: <strong>{empData.name} ({empData.id})</strong></p>
          <p>Email: <strong>{empData.email}</strong></p>
          <p>Phone: <strong>{empData.phone}</strong></p>
          <div className="card-footer text-center">
            <Link to='/' className="btn btn-dark ">Home</Link>

          </div>
        </div>
        
      }
      <br />
    </div>
  )
}
