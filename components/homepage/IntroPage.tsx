'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

type Props = {}

const IntroPage = (props: Props) => {

  const router = useRouter()
  const handleClick = () => {
    router.push('/about')
  }
  return (
    
    <div className="w-full h-screen ">
      <div className="w-full lg:grid md:grid flex flex-col py-8  grid-cols-10 h-full gap-6">
        <div className="w-full h-full col-span-1">
        </div>
        <div className="w-full flex-col col-span-2 px-6 bg-red-500 h-full flex justify-center text-white font-semibold text-xl items-center">
          <h2> Who Are We</h2>
        </div>
        <div className="w-full h-full flex-col gap-4 px-6 col-span-6 justify-center flex ">
          <h2>Our Story</h2>
          <p className="w-full text-4xl">
            We are a dynamic digital marketing agency with a passion for innovation and a commitment to excellence.
          </p>
          <Button onClick={handleClick} variant={'default'} className="w-fit px-12 font-semibold text-lg hover:bg-blue-950 duration-500">
            Know More
          </Button>
        </div>
        <div className="w-full col-span-1">
        </div>
      </div>
    </div>
  )
}

export default IntroPage