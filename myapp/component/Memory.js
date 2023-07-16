'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Memory = () => {
  return (
    <div className='bg-white relative brightness-90 hover:brightness-[1.1] cursor-pointer'>
        <div className='aspect-[3/4] object-cover rounded-md'>
            pic
        </div>
        <div className='px-1 flex justify-center'>
            <h2>Title</h2>
            <button >Delete</button>
        </div>
      </div>
  )
}

export default Memory