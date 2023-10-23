import React, { useEffect } from 'react'
import { useState } from 'react'
//import axios from 'axios'
import categoriesData from '../api/categories.json'
import CategoryBox from './minicomponents/CategoryBox'

export default function Categories() {

const [categories, setCategories]= useState ([]) 

// const fetchData= async () =>{

// try{
//  const response= await axios.get('')
//  setCategories(response.data)
//
// }
// catch (error){
//  console.error (error)
//
// }

// }

useEffect (()=>{
 //fetchData()
 setCategories(categoriesData)
},[])
  return (
    <div className=' bg-neutral-100 md:bg-white w-full shadow-sm py-6'  >

      <div className='container mx-auto max-w-screen-xl'>
        <h6 className='mb-2 text-base font-semibold'>Kategoriler</h6>
        <div className=' grid grid-cols-4 md:grid-cols-5 xl:grid-cols-10 gap-4 '>
        {categories && categories.map(category => <CategoryBox key={category.id} category={category} />)}
          
        </div>
      </div>

    </div>

  )
}
