import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import Navigation from './Navigation'

const ProductDetails = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams();
    // const {removeProduct} = props;
    const navigate = useNavigate()

    // const deleteItem = () => {
    //     axios.delete(`http://localhost:8000/api/products/${id}`)
    //     .then(res => {
    //         navigate('/home')
    //     })
    //     .catch(err => console.log(err))
    // }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setItem(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    // const removeFromDom = itemId => {
    //     setItem(item.filter(item => item._id !== itemId))
    // }

    return (
        <div className='container'>
            <Navigation/>
            <div className='m-3 bg-secondary rounded p-2'>
                <h2><strong>Title</strong>: {item.title}</h2>
                <h2><strong>Price</strong>: $ {item.price}</h2>
                <h2><strong>Description</strong>: {item.description}</h2>
                <h4>
                    <Link className='link-light' to={"/home"}>Home</Link> | <Link className='link-light' to={"/products/edit/" + item._id}>Edit </Link>
                </h4>
                <DeleteButton productId={item._id} successCallback={()=> navigate('/home')}/>
            </div>
        </div>
    )
}

export default ProductDetails;