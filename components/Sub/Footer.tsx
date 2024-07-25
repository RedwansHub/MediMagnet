import React from 'react'
import { Socials } from '.'
import { Appear, AppearQuick } from '../animation/Appear'
import Appointment from './appointment'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div id='root' className='w-full h-screen p-6 lg:p-24'>
        <div className='w-full h-full grid    '>
            <div className='w-full h-full flex lg:flex-row flex-col justify-center items-center  '>
               <Appear>
                <div className='w-full text-center gap-3 items-center justify-center flex-col flex'>
                        <h2 className='text-2xl '>Need a Digital Boost? 
                        </h2>
                        <h2 className='font-semibold px-2 text-3xl '>
                            Let's Magnetize
                        </h2>
                        <Appointment />

                </div>
                    {/* <h2 className='text-xl'>Book An Appointment</h2> */}
               </Appear>
            </div>
            <div className='w-full h-full flex lg:flex-row flex-col justify-between items-center  '>
                <div className=''>
                    <AppearQuick>
                        <Socials />
                    </AppearQuick>
                </div>
                <div className=''>
                    <AppearQuick>
                    <h2 className='text-lg font-semibold'>Explore</h2>
                    <div className=' grid grid-cols-3 *:text-sm   gap-4'>
                        <a className='hover:font-semibold ' href="/about">About Us</a>
                        <a className='hover:font-semibold ' href="/services">Our Services</a>
                        <a className='hover:font-semibold ' href="/team">Our Team</a>
                        <a className='hover:font-semibold ' href="/contact">Contact Us</a>
                        <a className='hover:font-semibold ' href="/policy">Our Policy</a>
                        <a className='hover:font-semibold ' href="/FAQ">FAQ</a>
                    </div>
                    </AppearQuick>
                </div>
            </div>

        </div>
                <h2 className='text-sm w-full text-center'>All rights reserved by <span className='font-semibold'>Media Magnet.</span></h2>
    </div>
  )
}

export default Footer