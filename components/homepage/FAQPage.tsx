import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Appear, AppearQuick } from '../animation/Appear'
import FAQ from '../Sub/FAQ'

type Props = {}

const FAQPage = (props: Props) => {
  return (
    
    <div className="w-full h-full py-12 ">
        <AppearQuick>
          <FAQ />
        </AppearQuick>
    </div>
  )
}

export default FAQPage