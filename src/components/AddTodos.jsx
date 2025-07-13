import React from 'react'
import Nav from './Nav'

const AddTodos = () => {
  return (
    <div>
      

        <div className="container">
            <Nav/>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">USER ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TITLE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">completed</label>
                 
                             <select name="" id="" className="form-control">
                                <option value="">Select</option>
                                <option value="">True</option>
                                <option value="">False</option>
                             </select>
                        </div>
                        
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br>
                           <button className="btn btn-primary">Submit</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodos