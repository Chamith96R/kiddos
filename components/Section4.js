import React from 'react'

import { BeakerIcon } from '@heroicons/react/24/solid';
import { CalculatorIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import { KeyIcon } from '@heroicons/react/24/solid';

export default function Section4({img:img, title:title, subtitle: subtitle, desc:desc}) {
  return (
    <div>
       
                    <div>
                        <img src={img} />
                        <div className=" flex pl-16 pr-16 justify-around items-center bg-gray-300 p-6">
                            <BeakerIcon href="" className="h-4 w-4 text-orange-500"></BeakerIcon>
                            <HeartIcon href="" className="h-4 w-4 text-orange-500"></HeartIcon>
                            <KeyIcon href="" className="h-4 w-4 text-orange-500"></KeyIcon>
                            <AcademicCapIcon href="" className="h-4 w-4 text-orange-500"></AcademicCapIcon>
                        </div>
                    </div>
                    <div className="pt-3 text-center">
                        <h3 className="text-2xl pb-1 hover:text-blue-500 font-semibold">{title}</h3>
                        <span className="text-gray-400 ">{subtitle}</span>
                        
                            <p className="text-base text-gray-500 mt-3">{desc}</p>
                        
                    </div>
    </div>
       
  )
}
