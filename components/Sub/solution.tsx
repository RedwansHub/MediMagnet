'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { AppearQuick } from '../animation/Appear'

type Props = {}

type ConItems = {
  name: any,
  value: any,
}

type PropsCon = {
  title: any,
  desc: any,
  outline: boolean
  data: ConItems[],
}


const Container = ({
  title,
  desc,
  data,
  outline,
}: PropsCon) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  }

  const displayedData = expanded ? data : data.slice(0, 4);

  return (
    <div className={`
      rounded-xl p-6 flex flex-col shadow-md gap-6 h-fit border-2 border-[#CE2029]
    `}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='flex flex-col gap-2 pt-4'>
        {displayedData.map(item => (
          <div key={item.name} className={`
            w-full grid grid-cols-2 gap-2 border-t py-1 border-t-black/20 dark:border-t-white/10
            `}>
            <p className='text-sm font-semibold '>{item.name}</p>
            <h4 className={`text-xs font-semibold text-end dark:text-[#FFD166] text-[#CE2029]
              `}>{item.value}</h4>
          </div>
        ))}
      </div>
      <div className=''>
        <Button className={`font-semibold w-full ease-in-out duration-500 hover:text-[#2D2828] bg-[#CE2029] hover:bg-[#FFD166]`}
          onClick={handleExpand}>
          {expanded ? 'Show Less' : 'Know More'}
        </Button>
      </div>
    </div>
  )
}


const Pricing = (props: Props) => {

  const Plan01:ConItems[] = [
    {name: 'Basic SEO', value: 'Keyword research and optimization for up to 5 pages'},
    {name: 'Social Media Management', value: 'Three platforms'},
    {name: 'Paid Ad Campaigns', value: 'One campaign per platform'},
    {name: 'Monthly Analytics Report', value: 'Included'},
  ]
  const Plan02:ConItems[] = [
    {name: 'Basic SEO', value: 'Comprehensive on-page, off-page, and technical SEO'},
    {name: 'Social Media Management', value: 'Multiple campaigns on Google, Meta, and TikTok'},
    {name: 'Paid Ad Campaigns', value: 'Included'},
    {name: 'Monthly Analytics Report', value: 'Three platforms'},
    {name: 'Email Marketing Campaigns', value: 'Included'},
    {name: 'Google Ads, Meta, and TikTok Ads Management', value: 'Included'},
    {name: 'Comprehensive Monthly Analytics and Strategy Session', value: 'Included'},
  ]

  return (
    <div className='h-screen w-full'>
        <div className=" w-full h-full lg:px-24 p-6 flex flex-col gap-8 justify-center items-center ">
          <div className='flex flex-col gap-1 py-6 text-center'>
            <h2 className='font-semibold text-2xl'>
              Our Pricing Solutions
            </h2>
          </div>
          <div className=' h-fit gap-6 w-full flex flex-col lg:grid grid-cols-2'>
            <AppearQuick delay={0.5}>
                <Container data={Plan01} title={'Essential Growth'} desc={'Essential Expansion'} outline />
            </AppearQuick>
            <AppearQuick>
                <Container data={Plan02} title={'Unlimitate Expansion'} desc={'Unlimitate Expansion'} outline={false} />
            </AppearQuick>
          </div>
        </div>
    </div>
  )
}

export default Pricing