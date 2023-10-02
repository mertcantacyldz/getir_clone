import React from 'react'

export default function CategoryBox({ category }) {
  return (

    <a href='#' className='flex items-center flex-col hover:bg-pri_brand_color_light py-2 hover:rounded-md group'>
      <figure className=' w-12 h-12  mb-3  '>

        <img className=' border-2 rounded-md object-cover' src={category.image}></img>
      </figure>
      <span className='text-center  text-[15px] transition-all group-hover:text-pri_brand_color'>{category.title} </span>
    </a>





  )
}
