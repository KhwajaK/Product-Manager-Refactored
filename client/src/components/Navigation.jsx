import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {

    return (
        <div>
            <div className="d-flex">
                <div className='col-9'>
                    <h1>Product Manager</h1>
                </div>
                <div className="col-3 link-secondary">
                    <strong><Link to={'/home'}>Home</Link></strong>
                </div>
            </div>
        </div>
    )
}

export default Navigation