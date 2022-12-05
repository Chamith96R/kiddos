import React from 'react'

export default function Section7({title:title, price:price, img:img, bgprimary}) {

    
  return (
    <div>
        
            <div className=" bg-gray-100 pb-4 text-center">
                <div className="p-5">
                    <h3 className="mb-3 text-2xl">{title}</h3>
                    <p><span className="price text-2xl font-extrabold text-sky-500">{price}</span> <span className="text-xs">/ 5mos</span></p>
                </div>
                <div className="pb-4">
                    <img className="lg:h-44 w-full" src={img} alt=""/>
                </div>
                <div className="px-4 pb-6">
                    <p className="font1 text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <p className="button text-center"><a href="#" className={`${bgprimary} inline-block align-middle text-center font-normal whitespace-no-wrap rounded-full py-3 px-3 leading-normal text-white hover:bg-gray-700`} >Take A Course</a></p>
            </div>
        
    </div>
  )
}
