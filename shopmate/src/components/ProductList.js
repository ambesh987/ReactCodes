import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {useFetch}  from '../hooks/useFetch';
import img from'../assets/img.gif';

export const ProductList = () => {
    // const [products,setProducts]= useState([]);
    const [counter,setCounter]=useState(0);
    const [url,setUrl]=useState("http://localhost:8000/products");

    const {data: products, loading} = useFetch(url);
   
    // const fetchProducts= useCallback( async()=>{
    //     const response = await fetch(url);
    //     const data= await response.json();
    //     setProducts(data);
    // },[url])
    //memoization--optimization

    // useEffect(()=>{
    //     fetchProducts();
    // },[fetchProducts]);


    // useEffect(()=>{
    //     fetch(url)
    //     .then(response=>response.json())
    //     .then(data=>setProducts(data))
    // },[url]);

    useEffect(()=>{
        console.log(counter)
    },[counter]);
   

  return (
   
    <section>
        <div className='filter'>
            <button onClick={()=>setCounter(counter+1)}>{counter}</button>
            <button onClick={()=>setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}>In stock only</button>
        </div>
        {loading && <p><img src={img}></img></p>}
        {
             products && products.map((product)=>(
                <div className='card' key={product.id}>
                    <p className='id'>{product.id}</p>
                    <p className='name'>{product.name}</p>
                    <p className='info'>
                        <span>${product.price}</span>
                        <span className={product.in_stock? "instock":"unavailable"}>{product.in_stock?"In stock":"unavailable"}</span>
                    </p>
                </div>
            ))
        }
    </section>
  )
}

