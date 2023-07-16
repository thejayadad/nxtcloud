'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


const Memory = ({memory: {title, imageUrl, _id}}) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
        const confirmModal = confirm("Are you sure you want to delete your memory?")
  
        if (confirmModal) {
            const res = await fetch(`http://localhost:3000/api/memory/${_id}`, {
               method: "DELETE"
            })
  
            if (res.ok) {
                router.reload('/')
            }
        }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className='bg-white relative brightness-90 hover:brightness-[1.1] cursor-pointer'>
        <div className='aspect-[3/4] object-cover rounded-md' key={_id}>
            <img className='aspect-[3/4] object-cover rounded-md' src={imageUrl} />
        </div>
        <div className='px-1 flex justify-between p-4'>
            <span>{title}</span>
            <button 
            onClick={handleDelete}
            className='btn btn-accent'>Delete</button>
        </div>
      </div>
  )
}

export default Memory