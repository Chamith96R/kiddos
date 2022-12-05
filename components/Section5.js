import React from 'react'

export default function Section5({img:img, title:title, }) {
  return (
    <div>
        <div className="flex flex-col md:flex-row md:max-w-xl bg-gray-100 shadow-lg">
            <img className=" w-full h-96 md:h-60 object-cover md:w-48" src={img} alt="" />
                <div className="p-6 flex flex-col justify-start">
                <h5 className="text-sky-500 text-xl font-medium mb-2">{title}</h5>
                <p className="text-black pb-6"><span className="text-orange-400">class time:</span> 9:00am - 10am</p>
                <p className="text-gray-500 text-base mr-4">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                </p>
                </div>
        </div>
    </div>
  )
}
