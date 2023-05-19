import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    // const [ product, setProduct] = useState([]);
    const {productList, removeProduct} = props
    // const {id} = useParams();

    // useEffect(() =>{
    //     axios.get("http://localhost:8000/api/products")
    //         .then((res)=>{
    //             console.log(res.data);
    //             setProduct(res.data)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }, [])

    // const removeProduct = productId => {
    //     setProduct(productList.filter(product => product._id !== productId))
    // }

    // NOW IN MAIN.JS
    // const deleteItem = (id) => {
    //     axios.delete("http://localhost:8000/api/products/" + id)
    //     .then(res => {
    //         removeProduct(id);
    //     })
    //     .catch(err => console.log(err))
    // }
    
    
    return (
    <div className='container' >

        <h2>All Products</h2>
        {
            productList.map((item, i)=> (
                    <div className='m-3 p-2 bg-success rounded' key={i}>
                        <h5>{item.title}</h5>
                        <h5>$ {item.price}</h5>
                        <h5>{item.description}</h5>
                        <h6>
                        <Link className='link-light' to={`/products/${item._id}`}>View {item.title}</Link> |<span> </span> 
                        <Link className='link-light' to={`/products/edit/${item._id}`}>Edit</Link>
                        </h6>
                        <DeleteButton productId={item._id} successCallback={()=> removeProduct(item._id)} />
                    </div>
                )
            )
        }
    </div>
    )
}

export default ProductList