import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function EmpCreate() {

const [id, setId]=useState('');
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [phone, setPhone]=useState('');
const [active, setActive]=useState(false);
const [validation, setValidation]=useState(false)

const navigate=useNavigate();



const handleSubmit=(e)=>{
  e.preventDefault();
  const empData={name, email, phone, active};

  fetch('http://localhost:8000/employee',{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empData)
  })
  .then(res=>{
    alert("Saved successfully");
    navigate('/')
    console.log(empData)
  })
  .catch(err=>console.log(err));
}




  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={handleSubmit} className="container">
            <div className="card shadow">
              <div className="card-header">
                <h3>Add New Employee</h3>
              </div>
              <div className="card-body">
                <div className="row d-flex flex-column g-3">

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input 
                      onChange={(e)=>setId(e.target.value)}
                      value={id}
                      type="text" 
                      className="form-control" 
                      id='id'
                      placeholder='ID'/>
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input 
                      onChange={(e)=>setName(e.target.value)}
                      value={name}
                      type="text" 
                      className="form-control" 
                      id='name'
                      required
                      onMouseUp={e=>setValidation(true)}
                      placeholder='Name'/>
                      {
                        name=='' && validation &&(
                          <span className='text-danger d-block text-start'>Please enter name</span>
                        )
                      }
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input 
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                      type="text" 
                      className="form-control" 
                      id='email'
                      placeholder='E-Mail'/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <input 
                      onChange={(e)=>setPhone(e.target.value)}
                      value={phone}
                      type="text" 
                      className="form-control" 
                      id='phone'
                      placeholder='Phone'/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check text-start">
                      <input 
                      onChange={e=>setActive(e.target.checked)}
                      checked={active}
                      // disabled='disabled'
                      type="checkbox" 
                      className="form-check-input" 
                      id='check'
                      />
                      <label className='form-check-label' htmlFor="check">
                        Is Active
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group d-flex align-items-start">
                      <button 
                      type='submit'
                      className="btn btn-dark w-50">Save</button>
                      <Link 
                      to='/'
                      className='btn btn-secondary w-50 mx-2'>Cancel</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
