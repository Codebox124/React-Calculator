import React from 'react'
import { useState } from 'react'


export const Header = () => {

  const [number, setNumber] = useState('')

  const handleClick =(e)=>{
    setNumber(number.concat(e.target.value))
  }
  const handleClear =()=>{
    setNumber('')
  }
  const handleslice =()=>{
    setNumber(number.slice(0, -1))
  }
  const handleAnswer =()=>{
    try{
      setNumber(eval(number).toString())
    }catch(error){
      setNumber('invalid')
    }
  }
  return (
    <section>
      <div className='bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden '>
      <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
      <p>Calculator App</p>

      </div>

      <div className='w-full h-20 text-white'>
        <input type="text" placeholder='0' class="w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5" value={number} id="" />
      </div>

      <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
        <button  onClick={handleClear} className='text-gray w-20 h-20 bg-white rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
        <button  onClick={handleslice} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
        <button value='/' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
        <button value='+' onClick={handleClick} className='text-white w-20 h-40 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button>
        
        <button value='9' onClick={handleClick} className='text-white w-20  bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow  h-20'>9</button>
        <button value='8' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
        <button value='7' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button>
        
        
        <button value='4' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
        <button value='5' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
        <button value='6' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
        <button value='-' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>

        <button value='1' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
        <button value='2' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
        <button value='3' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
        <button value='*' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

        <button value='.' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
        <button value='0' onClick={handleClick} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button>
        <button  onClick={handleAnswer} className='text-white w-40 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>=</button>
        
      </div>

      </div>
    </section>
  )
}
