import React from 'react'
import Nav from './Nav'

const SearchTodos = () => {
  return (
    <div>
         
            <div className="container">
                <Nav/>
                <div className="row g-4 px-3 py-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
            </div>



    </div>
  )
}

export default SearchTodos