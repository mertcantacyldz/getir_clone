import React from 'react'
import Slider from "react-slick";
import { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import { PiWarningCircleBold } from 'react-icons/pi'
import { useWindowWidth} from '@react-hook/window-size'


export default function HeroSection() {

  const [show, setShow] = useState(true)
  const [inputValue, setİnputValue] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [hasFocused, setHasFocused] = useState(false);
  const [selected, setSelected] = useState("TR")
  const onlyWidth = useWindowWidth()

console.log('hero')


  const handleChange = (e) => {
    const newValue = e.target.value;
    setİnputValue(newValue);


    if (hasFocused) { // inputtan bir kere çıkış yapınca devreye gir

      if (isNaN(newValue)) {
        setErrorMessage("Lütfen geçerli bir telefon numarası giriniz.");
        console.log("numara");
        setShow(false)

      } else if (newValue === "") {
        setErrorMessage("Lütfen telefon numarası giriniz.");
        console.log("boşluk");
        setShow(false)

      } else if(!isNaN(newValue)){

        setShow(true)
      }
        
       
       

    }

  

    console.log('x')
  }


  const handleBlur = () => {

    if (inputValue === "") {
      setErrorMessage("Lütfen telefon numarası giriniz.");
      setShow(false)
      
    } else if (isNaN(inputValue)) {
      setErrorMessage("Lütfen geçerli bir telefon numarası giriniz.");
      setShow(false)
    } else if(!isNaN(inputValue)){

      setShow(true)
    }


    setHasFocused(true)




  };



  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,

  };



  const countryPhones = {
    TR: '+90',
    UK: '+44',
    US: '+1',
    NL: '+31',
    DE: '49',
    FR: '+33'
  }

  return (
   /* h-[500px] olmadna 6px taşma var neden öğren */ <div className='  relative  h-auto   md:h-[500px]     md:before:bg-gradient-to-r before:from-pri_brand_color before:to-transparent before:inset-0  before:h-full before:w-full   before:absolute before:z-10'>
 {onlyWidth > 766 && <Slider {...settings}>
 <div className=''>
   <img className='w-full h-[500px] object-cover ' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"></img>
 </div>
 <div>
   <img className='w-full h-[500px] object-cover ' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"></img>
 </div>
 <div>
   <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"></img>
 </div>

</Slider>
 }
     
      <div className='  container max-w-screen-xl   relative md:absolute  top-1/2 -translate-y-1 md:-translate-y-1/2 left-1/2 -translate-x-1/2  z-20  flex justify-between px-0 md:px-5 '>
        <div className='hidden md:block'>
          <img className='h-[180px] w-[180px]' src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
          <h1 className='text-4xl text-white font-sans mt-10 font-semibold'> Dakikalar içinde <br></br>kapınızda</h1>
        </div>

        <div className='flex h-auto justify-center items-center w-full md:w-[400px]  '>
          <div className='bg-zinc-50  rounded-lg p-3 md:p-6 flex flex-col items-center w-full  z-20'>
            <h5 className='text-pri_brand_color mb-3 text-center text-lg font-medium'> Giriş yap ve kayıt ol</h5>


            <div className='w-full flex justify-end mb-2'>
              <ReactFlagsSelect
                countries={Object.keys(countryPhones)}
                customLabels={countryPhones}
                placeholder="Select Language"
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className='menu-flag'
                classNamePrefix="ReactFlagsSelect-module_selectBtn__19wW7"

              />
              <div className='flex  flex-col w-full ml-2 relative '>
                <div className=' w-full flex items-center'>
                  <input id='phoneNumber' className={`bg-white h-14 pl-4 w-full text-sm pt-[10px] rounded-sm border-2 border-border_color  hover:border-pri_brand_color ${!show ? 'focus:border-error_color hover:border-error_color border-error_color' : 'focus:border-pri_brand_color'
                    } outline-none peer`}
                    onChange={handleChange}

                    onBlur={handleBlur} ></input>

                  <label htmlFor='phoneNumber' className={`absolute text-sm pl-4 text-gray-500 peer-focus:-translate-y-4 transition-all duration-200 peer-focus:text-pri_brand_color peer-focus:font-light  peer-focus:text-xs ${(inputValue && inputValue.length > 0) ? '-translate-y-4 text-pri_brand_color text-xs' : null
                    }`}> Telefon Numarası</label>

                  {!show ? (<PiWarningCircleBold className='h-6 w-6 absolute right-2 text-error_color' ></PiWarningCircleBold>) : null}

                </div>
                {!show ? (<span className="text-error_color font-sans text-[0.74rem] my-2 flex justify-start ">{errorMessage}</span>) : null}
              </div>

            </div>




            <button className='bg-brand_yellow text-pri_brand_color h-12 text-sm text-bold duration-100 rounded-lg px-4 py-3.5 w-full drop-shadow-lg hover:bg-pri_brand_color hover:text-brand_yellow'> Telefon numarası ile devam et</button>





          </div>


        </div>
      </div>


    </div>
  )
}
