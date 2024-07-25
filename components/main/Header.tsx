import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='relative w-full '>
      <div className='w-full  h-fit  lg:p-8 z-50 headr'>
        <div className='w-full h-fit px-6 pt-8 lg:px-12 flex justify-between items-center'>
          <h2 className='font-semibold text-sm'> Media Magnet
          </h2>
          <div className='w-fit text-sm font-semibold  justify-between items-center gap-4 hidden lg:flex'> 
            <a className=' hover:text-red-500 hover:scale-105 ease-in-out duration-200 cursor-pointer'> About Us
            </a>
            <a className=' hover:text-red-500 hover:scale-105 ease-in-out duration-200 cursor-pointer'> Services
            </a>
            <a className=' hover:text-red-500 hover:scale-105 ease-in-out duration-200 cursor-pointer'> Contact
            </a>
          </div>
          <div className=''>
            <div className='hidden lg:flex '>
              <h2> Header
              </h2>
            </div>
            <div className='lg:hidden flex '>
              sadasd
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header