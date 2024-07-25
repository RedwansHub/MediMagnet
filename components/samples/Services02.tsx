'use client'

import { ServiceItem, ServicesList } from '@/lib/data'


import { Appear } from '../animation/Appear'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Expand } from '../animation/Expand'
import Image from 'next/image'
import { useState } from 'react'

type Props = {}

const Services02 = (props: Props) => {
    const [selected, setSelected] = useState<ServiceItem>(ServicesList[0])
    const data = ServicesList

    const handleSelect = (id: number) => {
        setSelected(data[id])
    }
  return (
    <div  className='w-full flex justify-center items-center h-full'>
        <div className='w-full flex flex-col px-4 lg:px-24'>
        <h2 className='text-3xl font-semibold'>Our Services</h2>
        <div className='lg:flex-row flex-col h-full flex w-full gap-2  py-4 items-end justify-end'>
            {ServicesList.map((item, index) => (
                <div key={item.id} onClick={() => handleSelect(index)} 
                    className={`
                    p-4 cursor-pointer duration-500 ease-in-out  border border-[#FFD166] rounded-md 
                    ${selected && selected.id === item.id ? 'bg-[#FFD166] text-black' : 'hover:bg-[#DB2B34] hover:border-[#DB2B34] '}
                `}>
                    {/* <div className='h-full w-full'>

                    </div> */}
                    <div className='grid grid-cols-1 gap-3 h-fit w-full'>
                        <div className='w-full h-fit flex-col flex gap-1'>
                            <h2 className='font-semibold text-xl'>{item.name}</h2>
                        </div>
                        <div className=' w-full h-fit'>
                            {/* <LottieAnimate selected={item.id} />  */}
                        </div>
                        <div className=''>
                            <p className='text-sm'>{item.desc}</p>
                        </div>

                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Services02