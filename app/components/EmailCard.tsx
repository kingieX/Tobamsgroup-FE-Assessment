import Image from 'next/image'
import React from 'react'

const EmailCard = () => {
  return (
    <div>
      {/* Send email */}
      <section className='relative lg:py-8 py-4 lg:px-24 px-8 lg:mb-12 mb-6'>
          {/* Left Image */}
          <div className='absolute w-1/4 lg:left-[266px] lg:top-[260px] left-20 top-[300px]  lg:rounded-[45px] rounded-xl overflow-hidden transform -translate-y-1/2 -translate-x-1/2'>
            <Image src="/email-left.png" alt="Left Decorative Image" width={1000} height={1000} loading='lazy' />
          </div>

          {/* Right Image */}
          <div className='w-1/4 absolute lg:right-[266px] lg:top-[312px] right-20 top-80 lg:rounded-[45px] rounded-xl  overflow-hidden transform -translate-y-1/2 translate-x-1/2'>
            <Image src="/email-right.png" alt="Right Decorative Image" width={1000} height={1000} loading='lazy' />
          </div>

          <div className='flex flex-col justify-center items-center bg-[#E7F9FD] lg:rounded-[45px] rounded-xl lg:py-24 py-8 lg:px-24 px-8'>
            <div className='mb-4'>
              <h2 className="lg:text-4xl text-2xl font-medium text-center lg:mb-4 mb-2">Deliciousness to your inbox</h2>
              <p className="text-center lg:text-md text-sm text-gray-600 lg:max-w-xl lg:mb-8 mb-4">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim
              </p>
            </div>
            <div className='lg:w-1/2 w-full flex lg:flex-row flex-col lg:justify-between items-center gap-4 lg:px-2 lg:py-2 lg:bg-white lg:rounded-xl'>
              <input type="text" placeholder='Your email address...' className='w-full text-sm px-4 lg:py-3 py-2 outline-none rounded-xl' />
              <button className="flex items-center text-sm gap-2 px-8 lg:py-3 py-2 bg-black text-white rounded-xl hover:bg-gray-800">Subscribe</button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default EmailCard
