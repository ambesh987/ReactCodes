import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom';
export const Productlist = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  
  const location = useLocation();
  console.log(location);
  return (
    <div>Productlist</div>
  )
}

