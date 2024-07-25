import React from 'react'
import { Button } from '../ui/button'

type Props = {}

const ServicesPage = (props: Props) => {
  return (
    
    <div className="w-full h-screen ">
      <div className="w-full grid grid-cols-10 h-full gap-6 bg-red-500 ">
        <div className="w-full h-full col-span-1">
        </div>
        <div className="w-full h-full flex-col gap-4 col-span-5 justify-center flex text-white ">
          <h2>Our Services</h2>
          <div>
            <h3 className="w-full font-semibold text-3xl">
            At Media Magnet, we don't just market,  
            </h3>
            <h3 className="w-full font-semibold text-3xl ">
            we create lasting digital impressions.  
            </h3>

          </div>
          <p className="w-full text-xl">
          From top-tier application and website services (WAAS) to masterful social media strategies, our dedicated team is committed to delivering quality and efficiency.
          </p>
          <Button variant={'default'} className="w-fit px-12 font-semibold text-lg  hover:bg-blue-950 duration-500">
            Get Started
          </Button>
        </div>
        <div className="w-full flex-col col-span-3  h-full flex justify-center bg-white font-semibold text-xl items-center">
          <h2>Our Services</h2> 
        </div>
      </div>
    </div>
  )
}

export default ServicesPage