import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
import Navigation from './Navigation';

const UpdateProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)
    const {removeProduct} = props;
    // const [title, setTitle] = useState([])
    // const [price, setPrice] = useState()
    // const [description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
            // setTitle(res.data.title);
            // setPrice(res.data.price);
            // setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = product => {
        axios.patch('http://localhost:8000/api/products/' + id, product)
        .then(res => {
            console.log(res);
            navigate('/home')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <Navigation />
            <h1 className='mb-3'>Update {product.title}</h1>
            { loaded && (
            <>
                <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
                <DeleteButton productId={product._id} successCallback={()=> navigate('/home')}/>
            </>
            )}
        </div>
    )
}

export default UpdateProduct


/* <form onSubmit={updateProduct}>
    <div className="mb-3" >
        <label className='form-label' htmlFor="title">Title</label>
        <input className='form-control' type="text" defaultValue={title} onChange={(e)=>setTitle(e.target.value)} />
    </div>
    <div className="mb-3" >
        <label className='form-label'  htmlFor="price">Price</label>
        <input className='form-control'  type="text" defaultValue={price} onChange={(e)=>setPrice(e.target.value)} />
    </div>
    <div className="mb-3" >
        <label className='form-label'  htmlFor="description" >Description</label>
        <input className='form-control' type="text" defaultValue={description} onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div className="mb-3" >
        <input type="submit" className="btn btn-success" value="Submit Updates"/> 
    </div>
</form> */