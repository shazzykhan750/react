import React from 'react';
import help_logo from "./../images/Help.png";
import search_logo from "./../images/search.png"
import msg_logo from "./../images/Menu.png"
import drop_logo from "./../images/drop.png"
import  drop_down from "./../images/arrow.png"
import "./../App.css"
import sort_logo from './../images/Vector.png'
import download_logo from "./../images/download.png"
import table_heade_logo from "./../images/table head logo.png"
import transaction_logo from "./../images/transaction logo.png"
import previous_logo from "./../images/previous logo.png"
import next_logo from "./../images/next logo.png"

const Header = () => {
  const arr=[1,2,3,4,5,6,7,8,9,10]
  return (
   <div className=' w-full  bg-[#FAFAFA]'>
   

      <div className=' flex items-center h-16 border-b-[1px] w-full justify-between'>
        <div className='flex items-center  ml-5'>
          <div className='font-inter font-normal text-base leading-6 text-black'>Payments</div>
          <div className='flex items-center ml-4'>
            <img src={help_logo} alt="help logo" className=' w-[14px] h-[14px] mr-1' />
            <span  className=' text-[#4D4D4D] font-inter font-normal text-xs leading-5'>How it Works</span>
          </div>
        </div>
        <div className=' flex items-center relative'>
            <img src={search_logo} alt="" className=' w-[15.37px] h-[15.07px] absolute left-4 top-[14px]'/>
          <input
            type="text"
            placeholder='Search features, tutorials, etc.'
            className='w-400 rounded-[6px] focus:outline-none  bg-[#F2F2F2] h-10  w-[400px]  pt-[9px] pl-11 pb-[9px] pr-4'
          />
        </div>
        <div className='flex items-center  mr-5'>
          <img src={msg_logo } alt="" className=' w-10 h-10 mr-[9px]' />
          <img src={drop_logo} alt="" className=' w-10 h-10' />
        </div>
      </div>
      <div className=' p-4   '>
        <div className=' flex justify-between'>
        <h1 className=' font-inter font-medium text-lg leading-7 text-[
#1A181E]'>Overview</h1>
        <div className=' flex items-center font-inter font-normal text-base leading-6 bg-white rounded py-1 px-4 border-solid border-[1px] border-gray-300'>Last Month <img className=' w-4 h-4 ml-[3px]' src={drop_down} alt="" /></div>
      </div>
      </div>
      <div className=' flex justify-between p-4'>
       <div className=' bg-white w-[556px] h-[118px] p-5  rounded shadow-card '>
       <div className=' font-inter font-normal text-base leading-6  text-[#4D4D4D]
'>Online orders</div>
<div className=' text-[
#1A181E] font-inter font-medium text-2xl leading-10'>231</div>
       </div>
       <div className=' bg-white w-[556px] h-[118px] p-5  rounded shadow-card '>
       <div className=' font-inter font-normal text-base leading-6  text-[#4D4D4D]
'>Amount received</div>
<div className=' text-[
#1A181E] font-inter font-medium text-2xl leading-10'>₹23,92,312.19
</div>
       </div>
       
       
      </div>
      <div className=' p-4 text-[#1A181E] font-inter font-medium text-base leading-7'>Transactions | This Month</div>

      <div className=' p-4 bg-white'>
        <div className=' flex justify-between'>
        <div className=' flex items-center relative'>
            <img src={search_logo} alt="" className=' w-[15.37px] h-[15.07px] absolute  left-[9px] top-[14px]'/>
          <input
            type="text"
            placeholder='Search by order ID...'
            className=' w-[248px] h-10 rounded border py-[10px]  pl-8 p-4 '
          />
        </div>
          <div className=' flex  items-center '>
           <div className=' w-[79px]    bg-white rounded border pt-[6px]  py-[6px]  px-[12px] flex items-center justify-between'>
           <span className=' font-inter font-normal text-base leading-6'>Sort</span>
            <img className=' w-[13] h-[11]' src={sort_logo} alt="" />
           </div>
           <div className=' border rounded pt-[6px]  py-[9px]  px-[12px]  bg-white ml-1' >
           <img src={download_logo} className=' w-5 text-[#4D4D4D] ' alt="" />
           </div>
          </div>
        </div>
     <div>

     </div>
     <div className=' mt-2 relative overflow-x-auto'>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className=' text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr className=' text-justify'>
        <th className='font-medium text-base w-1/4'>Order ID</th>
        <th className='font-medium text-base w-1/4 flex  items-center '>
          
         <span className='  whitespace-nowrap'>
         Order Date 
         </span>
          <img src={table_heade_logo} className=' w-[7px] h-[5px] ml-1' alt="" /></th>
        <th className='font-medium  w-1/4 text-base '>Order Amount</th>
        <th className='font-medium  text-base flex items-center'>Transaction fees <span><img src={transaction_logo} className=' w-[13px] h-[13px] ml-1 text-[]' alt="" /></span></th>
        </tr>
    </thead>
    <tbody>
          {arr.map((row, index) => (
            <tr key={index} className='py-[10px] px-[12px] border-b border-solid border-gray-300  bg-[#4D4D4D]">'>
              <td className=" px-6 py-3  text-[#2277B8]">#281209</td>
              <td className="  px-6 py-3 ">7 July, 2023</td>
              <td className=" px-6 py-3">₹1,278.23</td>
              <td className=" px-6 py-3">₹22</td>
            </tr>
          
          ))}
        </tbody>
  </table>
</div>
<div  className=' flex  justify-center ju mt-[17px]'>
  <button className=' border rounded text-[#4D4D4D] bg-white font-inter font-medium text-500 text-14 leading-20 text-center px-3 flex items-center'> <span><img className=' w-[6px] h-[10.5]  mr-1' src={previous_logo} alt="" /></span>Previous</button>
  {arr.map((num) => (
        <p key={num} className=' p-2'>{num}</p>
      ))} 
  <button className=' border rounded text-[#4D4D4D] bg-white font-inter font-medium text-500 text-14 leading-20 text-center px-2 flex items-center '>Next <span><img className=' w-[6px] h-[10.5]  ml-1' src={next_logo} alt="" /></span></button>
</div>
      </div>
     
      </div>
  );
};

export default Header;
