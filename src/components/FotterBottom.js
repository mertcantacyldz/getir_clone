import React from 'react'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiGlobe } from 'react-icons/bi'

export default function FotterBottom({ dispatch }) {
    return (
        <div className='w-full bg-white'>
            <div className='container mx-auto max-w-screen-xl flex py-6 justify-center md:justify-between   border-t-2 border-solid border-pri_brand_color_light'>
                <div className=' flex  '>
                    <div className=' mr-3  '>
                        <span className='text-sm '>© 2023 Getir</span>
                    </div>
                    <div className=' relative  before:rounded-full before:w-1 before:h-1 before:bg-pri_brand_color before:absolute before:top-1/2 before:-translate-y-1/2  '>

                        <a href='#'>
                            <span className='text-sm text-pri_brand_color ml-3'>Bilgi Toplumu Hizmetleri  </span>

                        </a>

                    </div>
                </div>
                <div className=' flex '>
                    <div className='  flex  items-center justify-center gap-3'>

                        <div className='flex items-center justify-center p-1 hover:rounded-md hover:bg-pri_brand_color_light group'>
                            <a href='#' className='flex items-center ' ><BiLogoFacebookCircle className='h-6 w-6 text-[#697488] group-hover:text-pri_brand_color'></BiLogoFacebookCircle></a></div>
                        <div className='flex items-center justify-center p-1 hover:rounded-md hover:bg-pri_brand_color_light group'>
                            <a href='#'><FaTwitter className='h-6 w-6 text-[#697488] group-hover:text-pri_brand_color'></FaTwitter ></a></div>
                        <div className='flex items-center justify-center p-1 hover:rounded-md hover:bg-pri_brand_color_light group'>
                            <a href='#'><AiOutlineInstagram className='h-6 w-6 text-[#697488] group-hover:text-pri_brand_color'></AiOutlineInstagram></a></div>

                    </div>
                    <div className='flex items-center justify-center ml-3 hover:bg-pri_brand_color_light group '>
                        <button onClick={()=>{dispatch({type:'open_language'})}} className='font-sans text-[#dbdbff] flex items-center justify-between border rounded-md py-1 px-1'>
                            <BiGlobe className='text-[#697488] text-[20px] group-hover:text-pri_brand_color'></BiGlobe  > <span className='ml-1 text-[#697488] text-xs group-hover:text-pri_brand_color'> Türkçe(TR)</span> </button></div>
                </div>





            </div>
        </div>
    )
}
