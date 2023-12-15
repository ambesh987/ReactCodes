import React, { useEffect,useState } from 'react'

export const useFetch = (url) => {
    const [data,setData]= useState(null);
    const [loading, setloading]= useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            setloading(true);
            const response = await fetch(url);
            const result = await response.json();
            setloading(false);
            setData(result);
        }
        fetchData();
    },[url]);
  return {data,loading}
}

