import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { successCallback, productId} = props;
    // console.log("delete error", DeleteButton)

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                successCallback();
            })
        }

    return (
        <div>
            <button className='btn btn-primary' onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default DeleteButton