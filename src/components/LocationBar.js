import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

export default function () {
    return (
        <div className=' w-full  bg-white flex justify-between'>
            <div className='flex justify-center items-center my-3'>
               <FaLocationDot className='text-brand_color mx-3'></FaLocationDot>
                <p className='text-gray1 font-medium'> Teslimat Adresi belirle</p>
            </div>
            <img className='-rotate-90 mr-4' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05IDFMNSA1TDEgMSIgc3Ryb2tlPSIjNUQzRUJDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'></img>
        </div>
    )
}
