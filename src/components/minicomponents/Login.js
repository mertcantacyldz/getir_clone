import React from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useState } from 'react';
import { PiWarningCircleBold } from 'react-icons/pi'

export default function Login({dispatch}) {

  const [show, setShow] = useState(true)
  const [inputValue, setİnputValue] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [hasFocused, setHasFocused] = useState(false);
  const [selected, setSelected] = useState("TR")

  const closeFunc = ()=>{
    dispatch({type:'close_modal'})
  }

  const countryPhones = {
    TR: '+90',
    UK: '+44',
    US: '+1',
    NL: '+31',
    DE: '49',
    FR: '+33'
  }


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

      } else if (!isNaN(newValue)) {

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
    } else if (!isNaN(inputValue)) {

      setShow(true)
    }


    setHasFocused(true)




  };

  return (
    <div className='flex h-auto justify-center items-center w-full md:w-[400px]  '>
      <div className='bg-zinc-50  rounded-lg p-6 flex flex-col items-center w-full  z-20'>
        <div className='flex justify-between w-full mb-10'>
          <div className='flex items-center  justify-center mb-3  w-full'>
            <h5 className='text-pri_brand_color  text-center text-lg font-medium mr- '> Giriş yap ve kayıt ol</h5>

          </div>
          <div className=' flex justify-end '>
            <button  onClick={closeFunc} className='bg-close_button h-7 w-7 rounded-md '>X</button>
          </div>
        </div>



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
              <input id='phoneNumber' className={`bg-white h-14 pl-4 w-full text-sm pt-[10px] rounded-md border-2 border-border_color  hover:border-pri_brand_color ${!show ? 'focus:border-error_color hover:border-error_color border-error_color' : 'focus:border-pri_brand_color'
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
  )
}
