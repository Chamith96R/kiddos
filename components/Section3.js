import React from 'react'

export default function Section3({icon:Icon, title:title, desc:desc}) {
  return (
  
    <div className="flex lg:w-1/2 pr-4 pl-4">
        <div className="flex items-center m-4"> 
            <div className=" justify-center items-center bg-blue-500 p-6 mr-2 rounded-full">
                <Icon className="h-10 w-10 text-white"/>
            </div>
            <div className="text">
            <h3 className="text-xl font-lg">{title}</h3>
                <p className="text-gray-500">{desc}</p>
            </div>
        </div>
    </div> 
      
    
  )
}
