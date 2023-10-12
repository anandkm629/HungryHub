import React, { useEffect } from 'react'
import { FadeLoader } from 'react-spinners'
import { useState } from 'react';

function Success() {
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[]);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ?   <FadeLoader color="#36d7b7" />:<div>
        <h2 className='text-3xl font-semibold mb-4 '>Order Successful!</h2>
      
        <p>Your order has been successfully placed</p>
        </div>
      }
    </div>
  )
}

export default Success