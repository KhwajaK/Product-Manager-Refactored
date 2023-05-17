import React, {useState} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
// import ProductDetails from '../components/ProductDetails'

const Main = () => {
    const [productList, setProductList] = useState([]);
    
    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProductList(res.data)
        })
        .catch((err)=> console.log(err))
    })

    const createProduct = (productParam) => {
        axios.post("http://localhost:8000/api/products", { productParam
            // title,
            // price,
            // description
        })
        .then(res => {
            console.log(res);
            console.log(res.data)
            setProductList([...productList, res.data])
            })
            .catch(err =>{
                console.log(err);
                setErrors(err.response.data.errors)
            })
        // setTitle("")
        // setPrice("")
        // setDescription("")
    };

    const removeProduct = itemId => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log(res);
            console.log(res.data); 
        setProductList(productList.filter(item => item._id !== itemId));
        })
        .catch(err => console.log(err))
        }

    return (
    <div>
        <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
        <hr />
        <ProductList productList={productList} removeProduct={removeProduct}/>
    </div>
    )
}

export default Main
