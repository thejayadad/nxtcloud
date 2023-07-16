import React from 'react'
import Link from 'next/link'

const New = () => {
  return (
    <div className='max-w-screen-md m-auto'>
        <Link className='btn btn-success mt-8' href={'/create'}>
            New Memory
        </Link>
    </div>
  )
}

export default New