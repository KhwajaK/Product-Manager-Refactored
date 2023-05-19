import React, {useState, useEffect} from 'react'
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
    }, [])

    const createProduct = (productParam) => {
        console.log("before post in main", productParam)
        axios.post("http://localhost:8000/api/products", { ...productParam
            // title, price,description
        })
        .then(res => {
            console.log(res);
            console.log(res.data)
            setProductList([...productList, res.data])
            })
            .catch(err =>{
                console.log(err);
            })
        // setTitle("") setPrice("")setDescription("")
    };

    const removeProduct = itemId => {
        console.log(itemId)
        // axios.delete("http://localhost:8000/api/products/" + itemId)
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data); 
    // } ) 
        setProductList(productList.filter(item => item._id !== itemId));}
        // })
        // .catch(err => console.log(err))
        

    return (
    <div>
        <h1>Product Manager</h1>
        <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
        <hr />
        <ProductList productList={productList} removeProduct={removeProduct}/>
    </div>
    )
}

export default Main
