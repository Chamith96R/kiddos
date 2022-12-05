
import React from 'react'

export default function Section2({icon:Icon, title:title, desc:desc}) {
  return (
            <div>
                <div className="flex items-start block-6  text-center">                
                    <div className="flex-1 p-10 mt-5 text-white">
                        <div className="flex justify-center items-center  left-0">
                        <div className="flex justify-center items-center bg-white h-28 w-28 rounded-full">
                            <Icon className="h-12 w-12 text-blue-500"/>

                        </div>
                        </div>
                    
                        <h3 className="mb-4 font-semibold text-xl">{title}</h3>                       
                        <p className="text-gray-200">{desc}</p>
                    </div>
                </div>
            </div>
  )
}

            