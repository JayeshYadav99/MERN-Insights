import React from 'react'
import Insights from './Insights'

export default function Homepage() {
  return (
    <div >
    <h1 class="mb-4 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 text-center">
  Insights
</h1>

     <div  className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 ml-4'>
         <Insights/>
    </div>
    </div>
   
  )
}
