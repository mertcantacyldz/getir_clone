import React from 'react'

export default function Cards() {


  return (
    <section className='  container mx-auto max-w-screen-xl flex mt-8 md:p-2 md:mt-1'>
      <div className='flex mb-16 flex-col md:flex-row  w-full md:w-auto justify-center   '>
        <div className='mr-4 flex  bg-white rounded-md flex-1  shadow-box_shadow shadow-md w-full md:w-auto justify-center'>
          <div className='flex items-center justify-center flex-col pt-[60px] px-4 pb-10 '>
            <figure className='h-37 w-37'>
              <img className=' h-full w-full object-cover' src='https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg'></img>
            </figure>
            <span className='text-lg text-pri_brand_color text-center font-semibold max-w-[292px] mt-6 '>Her siparişinize bir kampanya</span>
            <span className='mt-2 text-center'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</span>
          </div>
        </div>
        <div className='mr-4 flex  flex-1 bg-white rounded-md shadow-box_shadow shadow-md w-full md:w-auto justify-center'>
          <div className='flex items-center justify-center flex-col pt-[60px] px-4 pb-10'>
            <figure className='h-37 w-37'>
              <img className=' h-full w-full object-cover' src='https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg'></img>
            </figure>
            <span className='text-lg text-pri_brand_color text-center font-semibold max-w-[292px] mt-6 '>Dakikalar içinde kapınızda</span>
            <span className='mt-2 text-center'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</span>
          </div>
        </div>
        <div className=' flex items-center justify-center flex-col flex-1 bg-white rounded-md shadow-box_shadow shadow-md w-full md:w-auto'>
          <div className='flex items-center justify-center flex-col pt-[60px] px-4 pb-10'>
            <figure className='h-37 w-37'>
              <img className=' h-full w-full object-cover' src='https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg'></img>
            </figure>
            <span className='text-lg text-pri_brand_color text-center font-semibold max-w-[292px] mt-6 '>Binlerce çeşit mutluluk</span>
            <span className='mt-2 text-center'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</span>
          </div>
        </div>


      </div>

    </section>
  )
}
