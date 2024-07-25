import { Button } from '@/components/ui/button'
import React from 'react'
import { Questions } from './Questions'
import { AskQuestion } from './AskQ'

type Props = {}

const FAQ = (props: Props) => {
  return (
    <div className='w-full  h-full lg:px-24 px-6 py-8 lg:pt-12 flex justify-center lg:items-start  '>
        <div className='lg:grid md:grid flex flex-col grid-cols-2 w-full gap-4'>
            <div className='col-span-1 w-full h-full flex flex-col gap-6'>
                <h2 className='text-3xl font-semibold'>Frequently Asked Questions</h2>
                <h2 className='text-base lg:pr-24'>Can&apos;t find the answers you are looking for? Ask a Question and get a quick response.</h2>
                <AskQuestion>
                    <Button variant={'default'} className='w-fit px-12 font-semibold'>
                        Ask a Question
                    </Button>
                </AskQuestion>
            </div>
            <div className='col-span-1 w-full h-full'>
                <Questions />
            </div>
        </div>
    </div>
  )
}

export default FAQ