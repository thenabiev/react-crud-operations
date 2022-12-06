import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {

    const [empData, setEmpData]=useState(null);
    const navigate=useNavigate();

    const loadDetail=(id)=>{
        navigate('/detail/'+id);
    }

    const removeEmp=(id)=>{
        if(window.confirm("Are you sure ?")){
            
            fetch('http://localhost:8000/employee/'+id,{
                method:"DELETE"
                
            })
            .then(res=>{
                alert("Removed successfully");
                window.location.reload();
                navigate('/')
                console.log(empData)
            })

        }
    }

    const editEmp=(id)=>{
        navigate('/edit/'+id)
    }

    useEffect(()=>{
        fetch("http://localhost:8000/employee")
        .then(res=>res.json())
        .then(data=>{
            setEmpData(data);
        })
        .catch(err=>console.error(err))
        
    },[])
    return ( 
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">

                    <div className="d-flex justify-content-start">
                        <Link to='/create' className="btn btn-success my-1">
                            Add New (+) 
                        </Link>
                        <br/>

                    </div>

                    <table className="table table-striped ">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>E-Mail</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {
                              empData &&
                                empData.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button 
                                            onClick={()=>editEmp(item.id)}                                            
                                            className="btn btn-success">
                                                Edit
                                            </button>
                                            <button 
                                            onClick={()=>loadDetail(item.id)}
                                            className="btn btn-info mx-2">
                                                Details
                                            </button>
                                            <button 
                                            onClick={()=>removeEmp(item.id)}
                                            className="btn btn-secondary">
                                                Delete
                                            </button>
                                        </td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default EmpListing;