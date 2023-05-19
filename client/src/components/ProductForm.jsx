import React, {useState} from 'react'
// import axios from 'axios'

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} =props;

    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const [errors, setErrors] = useState({})

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("submit handler in product form", {title, price, description} )
        onSubmitProp({title, price, description});
        // createProduct({title, price, description})

    }

    // NOW IN MIAN.JS
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:8000/api/products", {
    //         title,
    //         price,
    //         description
    //     })
    //     .then(res => {console.log(res);
    //         console.log(res.data)
    //         setProduct([...product, res.data])
    //         })
    //         .catch(err =>{
    //             console.log(err);
    //             setErrors(err.response.data.errors)
    //         })
    //     setTitle("")
    //     setPrice("")
    //     setDescription("")
    // };

    return (
        <div className='container'>
            <form onSubmit={onSubmitHandler}>
                { errors.title ? 
                <h3>{errors.title.message}</h3>
                : "" }
                <div className="mb-3" >
                    <label className='form-label' htmlFor="title">Title</label>
                    <input className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
                </div>
                { errors.price ? 
                <h3>{errors.price.message}</h3>
                : "" }
                <div className="mb-3" >
                    <label className='form-label'  htmlFor="price">Price</label>
                    <input className='form-control'  type="text" onChange={(e)=>setPrice(e.target.value)} value={price} />
                </div>
                { errors.description ? 
                <h3>{errors.description.message}</h3>
                : "" }
                <div className="mb-3" >
                    <label className='form-label'  htmlFor="description" >Description</label>
                    <input className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <div className="mb-3" >
                    <input type="submit" className="btn btn-success" value="Submit"/> 
                </div>
            </form>
        </div>
    )
}

export default ProductForm