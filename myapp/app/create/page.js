'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'


const CreateMemory = () => {
  const CLOUD_NAME = 'socialsite'
  const UPLOAD_PRESET = 'donut_shop'
  const [title, setTitle] = useState('')
  const [photo, setPhoto] = useState('')
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!photo || !title){
        toast.error("All fields are required")
        return
    }

    try {
      const imageUrl = await uploadImage()
      
      const res = await fetch(`http://localhost:3000/api/memory`, {
        
        method: 'POST',
        body: JSON.stringify({title,imageUrl})
      })

      if(!res.ok){
        throw new Error("Error occured")
      }

      const memory = await res.json()

      router.push('/')
    } catch (error) {
        console.log(error)
    }
}



  const uploadImage = async () => {
    if (!photo) return

    const formData = new FormData()

    formData.append("file", photo)
    formData.append("upload_preset", UPLOAD_PRESET)

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
      })

      const data = await res.json()

      const imageUrl = data['secure_url']

      return imageUrl
    } catch (error) {
        console.log(error)
    }
}
const handlePhotoChange = (e) => {
  const selectedFile = e.target.files[0];
  setPhoto(selectedFile);
  setPreviewPhoto(URL.createObjectURL(selectedFile));
};
const handleRemovePhoto = () => {
  setPhoto(null);
  setPreviewPhoto(null);
};

  return (
    <section>
      <h2 className="text-center mt-10 text-5xl">Add Memory</h2>
      <div className="w-full mt-[40px] mb-[40px] bg-gray-200 shadow-lg rounded-md py-6 md:px-10 px-4 max-w-screen-sm m-auto">
        <form onSubmit={handleSubmit}>
          <div className="mt-8 md:flex gap-6">
            {!previewPhoto ? (
              <label
              className="md:mx-0
            mx-auto
            mt-4
            mb-6
            flex 
            flex-col 
            items-center 
            justify-center 
            w-full 
            max-w-[260px] 
            h-[470px] 
            text-center 
            p-3 
            border-2 
            border-dashed 
            border-gray-300 
            rounded-lg 
            hover:bg-gray-100 
            cursor-pointer"
            htmlFor="image"
              >
                <p>Upload Image</p>
                <h3 className="px-2 py-1.5 mt-8 text-[15px] w-[80%] bg-primary rounded-sm">
              Select A File
            </h3>
              </label>
            ) : (
              <div 
              className="md:mx-0
              mx-auto
              mt-4
              mb-6
              flex 
              flex-col 
              items-center 
              justify-center 
              w-full 
              max-w-[260px] 
              h-[470px] 
              text-center 
              p-3 
              border-2 
              border-dashed 
              border-gray-300 
              rounded-lg 
              hover:bg-gray-100 
              cursor-pointer"
              >
                <img
                src={previewPhoto}
                alt="selected memory"                
                className="object-cover
                max-w-[260px] 
                h-[470px] 
                "
              />
                    <button
                  className="mt-4 btn bg-warning"
                  onClick={handleRemovePhoto}
                >
                  Wrong Photo
                </button>
              </div>
            )}
            <input
              id="image"
              type="file"
              style={{ display: 'none' }}
              onChange={handlePhotoChange}
            />
                  <div className="mt-5">
            <div className="flex items-center justify-between w-[300px]">
              <input
                className="input w-full max-w-full text-3xl p-4"
                placeholder="Title Goes Here"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-3 justify-center">
              <Link className="mt-8 btn bg-secondary pl-8 pr-8" href={'/'}>
                Home
              </Link>
              <button className="mt-8 btn bg-success">Post Donut</button>
            </div>
          </div>
          </div>

        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default CreateMemory