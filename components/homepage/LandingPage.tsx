import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = {}

const LandingPage = (props: Props) => {
  
    const heading = 'Transforming Your Digital Presence with Innovative Marketing Solutions.'
    const subHeading = 'Experience the transformative power of innovative marketing solutions that captivate, engage, and elevate. Discover how strategic brilliance and creative flair can redefine your brand, making a lasting impression in a competitive landscape.'
    
  return (
    
    <div className="w-full h-screen ">
     <div className="w-full items-end flex justify-end">
            <div className="w-full z-10  items-start flex justify-start">
                <Image src={'/BG-items/ball02.svg'} alt="image" width={700}  height={700} />
            </div> 
        </div>
        <div className='w-full absolute top-0 z-30 bg-red h-full flex flex-col  pb-12 justify-end items-center lg:grid grid-cols-2 place-items-center gap-4'>
            <div className='w-fit flex col-span-1 p-4 justify-center gap-4 lg:px-20   items-center  relative lg:h-full h-fit  flex-col'>
                <h2 className="text-3xl font-semibold">{heading}</h2>
                <h2 className="text-sm font-light">{subHeading}</h2>
                <div className='w-full flex  justify-start items-start '>
                  <div className='flex'>
                          <div className='w-full  hover:scale-105 hover:text-white  duration-100 ease-in-out'>
                          <Button variant={'default'} className='w-full  hover:bg-[#CE2029]  dark:hover:bg-[#CE2029]  dark:text-[#1D3557] px-12 hover:scale-105 bg-[#1D3557] dark:bg-[#FFEFD5] duration-500 ease-in-out ' >
                                  <h2 className='text-sm font-semibold '>Let&apos;s Magnetize</h2>
                              </Button>
                          </div>
                  </div>
                </div>
                
            </div>

            <div className='col-span-1  w-full px-4  h-fit lg:h-full flex justify-center items-center'>
              <div className='lg:p-3  w-full lg:w-[60%] rel h-80 shadow-lg flex justify-center items-center backdrop-blur-sm bg-gradient-to-tl relative from-red-400/10 to-transparent dark:from-white/10 rounded-xl'>
            {/* <LottieAnimate selected={5} /> */}
            <div className='w-[250px] h-[200px] bg-yellow-500/10 shadow-lg rounded-lg'>

            </div>
                <div className='absolute bottom-0 text-end w-full px-6 p-3 '>
                    <h2 className='font-semibold text-xl'>We Magnetize your brand.</h2>
                </div>
              </div>
          </div>
        </div>

        <div className='absolute top-[-440px] right-0'>
          <div className="w-full    items-start flex justify-start">
              <Image src={'/BG-items/semi-01.svg'} alt="image" width={400}  className='rotate-180' height={400} />
          </div>
        </div>
    </div>
  )
}

export default LandingPage