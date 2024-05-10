import React from 'react'
import { RiInstagramFill} from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri"
import { RiFacebookBoxFill } from "react-icons/ri"

import { Link } from 'react-router-dom';

function SocialIcons() {
  return (
    <div className='flex gap-16  mt-10 mr-12  '>
   <Link to={''} className='text-white hover:-translate-y-1 transition-all' style={{ fontSize: '24px' }}><RiInstagramFill/></Link>
<Link to={''} className='text-white hover:-translate-y-1 transition-all' style={{ fontSize: '24px' }}><RiYoutubeFill/></Link>
<Link to={''} className='text-white hover:-translate-y-1 transition-all' style={{ fontSize: '24px' }}><RiFacebookBoxFill/></Link>

   
    </div>
  )
}

export default SocialIcons