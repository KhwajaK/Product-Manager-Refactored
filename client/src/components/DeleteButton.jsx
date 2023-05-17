import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const { productId, successCallback} = props;
    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                successCallback();
            })
        }
    return (
        <div>
            <button className='btn btn-primary' onClick={deleteProduct}></button>
        </div>
    )
}

export default DeleteButton