import React from 'react'
import { Collapse } from 'react-collapse';
import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size'

export default function Footer() {

  const [isOpen, setIsOpen] = useState([true, true, true]);
  const windowWith = useWindowWidth();
  const [isRotated, setIsRotated] = useState(false);

  const toggleCollapse = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);

    setIsRotated(!isRotated);
  };


  useEffect(() => {
    if (windowWith <= 768) {

      if (isOpen.some(item => item === true)) {
        setIsOpen([false, false, false]);
      }
    } else {
     
      if (isOpen.every(item => item === false)) {
        setIsOpen([true, true, true]);
      }
    }
    
  }, [windowWith]);

  return (
    <div className='w-full bg-white pt-10'>
      <div className='container mx-auto flex max-w-screen-xl pb-5 flex-col md:flex-row'>
        <div className='flex flex-col mr-6 flex-1 '>

          
            <span className='text-lg text-pri_brand_color inline-block mb-4 '> Getir'i indirin!</span>

          


          <ol className='flex flex-col '>
            <li className='  pb-4'>
              <div className='w-40'>
                <a href='#' >
                  <img className='w-full h-full object-cover' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
                </a>
              </div>
            </li>
            <li className='  pb-4'>
              <div className='w-40'>
                <a href='#'>
                  <img className='w-full h-full object-contain' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
                </a>
              </div>
            </li>
            <li className=' ' >
              <div className='w-40'>
                <a href='#'>
                  <img className='w-full h-full object-contain' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
                </a>
              </div>
            </li>
          </ol>

        </div>
        <div className='flex flex-col mr-6 flex-1 mt-7 md:mt-0' >
        <div className='flex justify-between'>
            <span className='text-lg text-pri_brand_color inline-block mb-4'>Getir'i Keşfedin</span>
            {windowWith <= 768 &&
              <button onClick={() => toggleCollapse(0)} className='bg-footer_button w-6 h-6 flex items-center justify-center rounded-md group'>
              <img  className={`${
          isRotated ? 'group-focus:rotate-180 transition-all ease-linear' : 'group-focus:rotate-0 transition-all ease-linear'
        }`}  src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05IDFMNSA1TDEgMSIgc3Ryb2tlPSIjNUQzRUJDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'></img>
            </button>
            }
          
          </div>
         
          <Collapse isOpened={isOpen[0]}>
            <ol className='flex flex-col '>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Hakkımızda
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Kariyer
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Teknoloji Kariyerleri
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    İletişim
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Sosyal Sorumluluk Projeleri
                  </span>
                </a>
              </li>
            </ol>
          </Collapse>
        </div>
        <div className='flex flex-col mr-6 flex-1'>
        <div className='flex justify-between'>
            <span className='text-lg text-pri_brand_color inline-block mb-4'>Yardıma mı ihtiyacınız var?</span>
            {windowWith <= 768 &&
              <button onClick={() => toggleCollapse(1)} className='bg-footer_button w-6 h-6 flex items-center justify-center rounded-md group'>
              <img  className={`${
          isRotated ? 'group-focus:rotate-180 transition-all ease-linear' : 'group-focus:rotate-0 transition-all ease-linear'
        }`}  src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05IDFMNSA1TDEgMSIgc3Ryb2tlPSIjNUQzRUJDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'></img>
            </button>
            }
          
          </div>
          
          <Collapse isOpened={isOpen[1]}>
            <ol className='flex flex-col '>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Sıkça Sorulan Sorular
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Kişisel Verilerin Korunması
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Gizlilik Politikası
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Kullanım Koşulları
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Çerez Politikası
                  </span>
                </a>
              </li>
            </ol>
          </Collapse>
        </div>
        <div className='flex flex-col mr-6 flex-1'>
        
        <div className='flex justify-between'>
            <span className='text-lg text-pri_brand_color inline-block mb-4'>İş Ortağımız Olun</span>
            {windowWith <= 768 &&
              <button onClick={() => toggleCollapse(2)} className='bg-footer_button w-6 h-6 flex items-center justify-center rounded-md group'>
              <img  className={`${
          isRotated ? 'group-focus:rotate-180 transition-all ease-linear' : 'group-focus:rotate-0 transition-all ease-linear'
        }`}  src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05IDFMNSA1TDEgMSIgc3Ryb2tlPSIjNUQzRUJDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K'></img>
            </button>
            }
          
          </div>
          <Collapse isOpened={isOpen[2]}>
            <ol className='flex flex-col '>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Bayimiz Olun
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Deponuzu Kiralayın
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    GetirYemek Restoranı Olun
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    GetirÇarşı İşletmesi Olun
                  </span>
                </a>
              </li>
              <li className='  pb-3'>
                <a href='#'>
                  <span className='text-sm'>
                    Zincir Restoranlar
                  </span>
                </a>
              </li>
            </ol>
          </Collapse>
        </div>

        <div>

          <a href='#' className='p-4 shadow-md md:inline-block rounded-md hidden xl:inline-block' >
            <figure className='w-17 h-21 '>
              <img className='w-full object-cover' src='https://cdn.getir.com/getirweb-images/common/etbis.png'></img>
            </figure>

          </a>




        </div>

      </div>
    </div>
  )
}
