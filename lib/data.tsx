// import { RiInstagramFill } from "react-icons/ri";
// import { AiFillTikTok } from "react-icons/ai";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { TfiLocationPin } from "react-icons/tfi";
// import { MdLocalPhone } from "react-icons/md";

type INFO = {
    id: number,
    icon: any,
    name: any,
    
}
export type ServiceItem = {
    id: number,
    title: any,
    name: any,
    desc: any,
    src: any,
}

// export const SocialInfo: INFO [] = [
//     { id: 1, icon: <RiInstagramFill  size={28 }/>, name: 'Instagram'},
//     { id: 2, icon: <AiFillTikTok  size={28 }/>, name: 'Tiktok'},
//     { id: 3, icon: <FaFacebookSquare  size={28 }/>, name: 'Facebook'},
//     { id: 4, icon: <FaLinkedin  size={28 }/>, name: 'LinkedIn'},
// ]
// export const SocialInfo2: INFO [] = [
//     { id: 1, icon: <MdOutlineMailOutline size={20 }/>, name: 'info@mediamagnet.co'},
//     { id: 2, icon: <MdLocalPhone size={20 }/>, name: '+000 000 0000'},
//     // { id: 3, icon: <TfiLocationPin size={20 }/>, name: 'Istanbul, Turkey'},
// ]
export const ServicesList: ServiceItem [] = [
    { id: 1, 
        title: 'Transform Your Digital Presence' ,
        desc: 'We Design and develop custom applications and websites that not only look stunning but also deliver seamless user experiences.',
        name: 'Applications and Websites (WAAS)',
        src: 'info@mediamagnet.co',
    },
    { id: 2, 
        title: 'Amplify Your Social Reach' ,
        desc: 'We craft engaging content and strategic campaigns for platforms like Instagram, Facebook, TikTok, and more, ensuring your brand connects with its audience and builds a loyal following.',
        name: 'Social Media Management',
        src: 'info@mediamagnet.co',
    },
    { id: 3, 
        title: 'Dominate Search Engines' ,
        desc: 'We conduct thorough keyword research, on-page optimization, and link-building strategies to drive organic traffic and enhance your online presence.',
        name: 'SEO Optimization',
        src: 'info@mediamagnet.co',
    },
    { id: 4, 
        title: 'Maximize Your Advertising Impact' ,
        desc: 'We create and manage ads across various platforms, including Google Ads, Facebook Ads, and more, to maximize your return on investment and drive conversions.',
        name: 'Digital Advertising',
        src: 'info@mediamagnet.co',
    },
]


