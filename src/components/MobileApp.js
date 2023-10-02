import React from 'react'

export default function MobileApp() {
  return (

      <section className=" container mx-auto my-6 min-h-[312px] md:rounded-lg flex items-center  overflow-hidden relative  max-w-screen-xl  md:bg-[url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')]  bg-pri_brand_color " >
        <div className='ml-12 h-full'>
          <h2 className='text-white text-[26px] font-bold'> Getir'i İndirin!</h2>
          <span className=' text-white text-base font-semibold mt-3 max-w-[360px] inline-block'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</span>
          <div>
            <ol className='flex pt-8 flex-col md:flex-row'>
              <li className=' mr-2 py-4'>
                <div>
                   <a href='#'>
                    <img className=' object-contain' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'></img>
                   </a>
                </div>
              </li>
              <li className=' mr-2 py-4'>
                <div>
                <a href='#'>
                    <img className=' object-contain' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'></img>
                   </a>
                </div>
              </li>
              <li  className=' mr-2 py-4' >
                <div>
                <a href='#'>
                    <img className=' object-contain' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'></img>
                   </a>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <figure className=' absolute right-0 bottom-[-4px]  overflow-hidden w-[605px] h-[288px] hidden md:flex'>
          <img className='w-full h-full' src='https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png'></img>
        </figure>
      </section>

  )
}
