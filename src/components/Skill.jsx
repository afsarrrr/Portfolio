import React from 'react'
import { div } from 'motion/react-client'
import Cp from './Cp'
import Dev from './Dev'
const Skill = () => {
  return (
    <div>
    <h1 className="text-center py-6 text-4xl font-extrabold tracking-widest text-slate-800 bg-gradient-to-r from-[#8acfe6] to-[#b6e7f5] rounded-1xl shadow-md">
  SKILLS
</h1>

    <div className='h-screen w-screen flex items-center px-5 py-5 bg-gradient-to-r from-[#8acfe6] to-[#b6e7f5] '>
     <Cp/>
     <Dev/>
    </div>
    </div>
  )
}
 
export default Skill