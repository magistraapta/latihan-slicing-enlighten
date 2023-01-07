import React from 'react'
import Image from 'next/image'
import Pict from '../public/pict.svg'
function Page() {
  return (
    <div className='flex'>
        <div className=' py-20  w-7/12'>
            <div className=' mx-36'>
                <p className=' font-semibold italic text-black text-xl'>Enlighten.</p>
                <div className=''>
                    <div className='pt-36'>
                        <div className='bg-blue bg-opacity-10 mr-96 rounded-lg  mb-3.5  '>
                        <p className=' text-center text-blue text-sm py-1 font-bold'>COMING SOON</p>
                        </div>
                        <p className='  text-5xl font-bold mr-32 text-black'>Get your dancing shoes ready </p>
                        <p className='mt-4  mr-24 text-base font-normal text-black opacity-60'>
                        We're putting the finishing touches on our website and getting ready to launch. Sign up for updates and be the first to know when we go live.
                        </p>
                    </div>
                </div>
                <div className=' mt-10'>
                    <div className=''>
                        <input type="text" placeholder='Email adress' className=' px-3 border border-gray-400 w-96 h-11 rounded-lg' />
                        <button className='ml-5 px-7 py-2.5 text-white rounded-lg bg-blue'>Invite me</button>
                        <div>
                        <p className=' text-xs mt-5 mr-3 text-black opacity-60'>
                        Sign up for updates to be the first to know when we launch. No spam, just important information and exclusive offers.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-5/12 h-screen'>
            <Image src={Pict} alt="this is my pict"/>
        </div>
    </div>
  )
}

export default Page