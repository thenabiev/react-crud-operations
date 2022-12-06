import React, { useState, useEffect} from 'react';
import { useParams,useNavigate, Link } from 'react-router-dom';


export default function EmpEdit() {

const {empid}=useParams();

const [empData, setEmpData]=useState({});




const [id, setId]=useState('');
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [phone, setPhone]=useState('');
const [active, setActive]=useState(false);
const [validation, setValidation]=useState(false)

const navigate=useNavigate();


useEffect(()=>{
  fetch("http://localhost:8000/employee/"+empid)
  .then(res=>res.json())
  .then(data=>{
      setId(data.id);
      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
      setActive(data.active);
  })
  .catch(err=>console.error(err))
  
},[]);



const handleSubmit=(e)=>{
  e.preventDefault();
  const empData={id, name, email, phone, active};

  fetch('http://localhost:8000/employee/'+empid,{
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(empData)
  })
  .then(res=>{
    alert("Edited successfully");
    navigate('/')
    console.log(empData)
  })
  .catch(err=>console.log(err));
}




  return (
    <div>
      <hr />
      <br />
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={handleSubmit} className="container">
            <div className="card shadow">
              <div className="card-header">
                <h3>Edit Employee</h3>
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
                        name==='' && validation &&(
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
                      className="btn btn-dark w-50">Edit</button>
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
