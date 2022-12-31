import React from 'react'


export const Header = () => {
  return (
    <section>
      <div className='bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden '>
      <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
      <p>Calculator App</p>

      </div>

      <div className='w-full h-20 text-white'>
        <input type="text" placeholder='0' class="w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5" id="" />
      </div>

      <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
        <button className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
        <button className='text-white w-20 h-40 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button>
        
        <button className='text-white w-20  bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow  h-20'>9</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>
        
        
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>

        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
        <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
        <button className='text-white w-40 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>=</button>
        <button className='text-white w-40 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>
      </div>

      </div>
    </section>
  )
}
