import React from 'react'

export default function Paragraphs({ title1, content1, title2, content2 }) {
  return (
    <div className='flex lg:flex-row flex-col justify-between gap-2 p-5 bg-gray-100 items-start'>
      <div>
      <p className='text-gray-600 text-sm '>{title1}</p>
      <p   className='text-sm font-bold'>{content1}</p>
      </div>

      <div>
      <h3 className='text-gray-600 text-sm '>{title2}</h3>
      <p className='text-sm font-bold'>{content2}</p>
      </div>

    </div>
  )
}
