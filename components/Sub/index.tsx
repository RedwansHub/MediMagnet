import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { MdLocalPhone } from "react-icons/md";

type INFO = {
    id: number,
    icon: any,
    name: any,
    
}

export const Socials = () => {
    return (
        <div className='flex flex-col w-full gap-2'>
            <div className='flex flex-col gap-1'>
                <h2 className='font-semibold text-2xl'>Media Magnet</h2>
                <h3 className='font-light text-sm '>We don&apos;t just market—we magnetize.</h3>
            </div>
            <div className='w-full flex gap-1 py-4 col-span-1'>
                {SocialInfo.map(item => (
                    <div key={item.id} className=' hover:text-red-400 cursor-pointer'>
                        {item.icon}
                    </div>
                ))}
            </div>
            <ContactInfo />
        </div>
    )
}
export const ExploreList = () => {
    return (
        <div className='w-full lg:p-0 p-6 col-span-1 gap-4 h-full flex flex-col lg:items-end lg:justify-end   '>
           <div className='w-full lg:text-end'>
            <h2 className='text-lg tracking-wide font-semibold'>Explore</h2>
           </div>
            <div className='lg:grid gap-3  w-fit lg:grid-cols-2 flex flex-col  lg:place-items-end  '>
                <div className='lg:flex-col flex-row items-end flex-wrap flex text-sm gap-4 lg:gap-2 w-fit col-span-1'>
                    <p className='font-semibold text-sm cursor-pointer'>About Us</p>
                    <p className='font-semibold text-sm cursor-pointer'>Our Services</p>
                    <p className='font-semibold text-sm cursor-pointer'>Our Team</p>
                </div>
                <div className='lg:flex-col flex-row items-start  lg:items-end flex-wrap flex text-sm gap-4 lg:gap-2 w-fit col-span-1 '>
                    <p className='font-semibold text-sm cursor-pointer'>FAQ</p>
                    <p className='font-semibold text-sm cursor-pointer'>Support</p>
                    <p className='font-semibold text-sm cursor-pointer'>Privacy</p>
                </div>
            </div>
        </div>
    )
}

export const ContactInfo = () => {
    return (
      <div className='w-fit flex flex-col gap-2'>
          {SocialInfo2.map( item => (
              
              <div key={item.id} className='  cursor-pointer  duration-300 ease-in-out'>
                      <div className='flex p-3 px-3 border  border-[#CE2029]/70   shadow-sm rounded-lg hover:text-white   hover:bg-[#CE2029]  duration-500 ease-in-out'>
                          {item.icon}
                          <div className='text-sm font-semibold leading-tight tracking-wider px-4'>
                              {item.name}
                          </div>
                      </div>
              </div>
          ))}
      </div>
    )
}
  
export const SocialInfo: INFO [] = [
    { id: 1, icon: <RiInstagramFill  size={28 }/>, name: 'Instagram'},
    { id: 2, icon: <AiFillTikTok  size={28 }/>, name: 'Tiktok'},
    { id: 3, icon: <FaFacebookSquare  size={28 }/>, name: 'Facebook'},
{ id: 4, icon: <FaLinkedin  size={28 }/>, name: 'LinkedIn'},
]
export const SocialInfo2: INFO [] = [
    { id: 1, icon: <MdOutlineMailOutline size={20 }/>, name: 'info@mediamagnet.co'},
    { id: 2, icon: <MdLocalPhone size={20 }/>, name: '+000 000 0000'},
    // { id: 3, icon: <TfiLocationPin size={20 }/>, name: 'Istanbul, Turkey'},
]


export const EndRights = () => {
    return (
        <div className='text-center  flex-col gap-8 justify-center flex w-full  text-sm text-black/40  dark:text-white/40'>
            <p>
                All rights reserved by Media Magnet
            </p>
        </div>
    )
}