import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Details = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams();
    // const navigate = useNavigate()

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

    const removeFromDom = productId => {
        setItem(item.filter(product => product._id !== productId))
    }
    return (
        <div className='container'>
            <div className='m-3 bg-secondary rounded p-2'>
                <h2><strong>Title</strong>: {item.title}</h2>
                <h2><strong>Price</strong>: $ {item.price}</h2>
                <h2><strong>Description</strong>: {item.description}</h2>
                <h4>
                    <Link to={"/home"}>Home</Link> | <Link to={"/products/edit/" + item._id}>Edit </Link>
                </h4>
                <DeleteButton productId={product._id} successfulCallback={()=> removeFromDom(product._id)}/>
            </div>
        </div>
    )
}

export default Details;