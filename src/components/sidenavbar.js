import React from 'react'
import sidenavr_image from "./../images/Image.png"
import drop_down  from "./../images/Chevron Down.png"
import home_logo from "./../images/Navbar Icon.png"
const Sidenavbar = () => {
  return (
    <div className=' w-[208px]  h-auto bg-[#1E2640] pt-4 pr-[10px] pb-4 pl-[10px]'>
        <div className=' flex justify-between items-center'>
<div className=' flex items-center'>
    <img src={sidenavr_image}alt=" sidenavvar image" className=' w-[39px] h-[39px] rounded-md'/>
    <div   className=' pt-4 pr-[10px] pb-4 pl-[10px]'>
    <p className=' text-white font-inter font-medium text-base leading-6'>Nishyan
</p>
<div className=' text-[#D2D4D9] font-inter font-normal text-sm leading-5'>Visit Store</div>
</div>
</div>
<img src={drop_down } alt="" className=' w-5 h-5 mr-4'/>
</div>
<div className=' mt-4'>
<div className=" flex   h-10 ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5 '>Home</div>
  </div>
<div className=" flex  h-10  ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex   h-10 ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex   h-10 ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex  h-10  ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex  h-10  ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex  h-10  ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex  h-10  ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex  h-10  ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter   leading-5'>Home</div>
  </div>
<div className=" flex  h-10 ">
    <img src={home_logo} alt="home logo" className=' w-5 h-5 opacity-80' />
    <div className=' ml-3 mb-1 w-40 h-20 opacity-80 text-white font-inter    leading-5'>Home</div>
  </div>
    </div>
    </div>
  )
}

export default Sidenavbar