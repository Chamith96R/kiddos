import React, { useState } from 'react'

export default function Nav() {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/"},
        {name:"Teacher",link:"/"},
        {name:"Courses",link:"/"},
        {name:"Pricing",link:"/"},
        {name:"Blog",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open,setOpen]=useState(false);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-7 dark:bg-gray-900 scroll-mb-1">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="" className="flex items-center">
                <span className="self-center text-2xl font-extrabold font1 whitespace-nowrap dark:text-white">Kiddos</span>
            </a>
            <button onClick={()=>setOpen(!open)}  type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg name={open ? 'close':'menu'} className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
            </button>
            
                <ul className={`md:flex md:items-center md:pb-0 pb-12 md:static absolute bg-white dark:bg-gray-900 dark:text-white md:z-auto left-0 md:w-auto md:pl-0 pl-9  w-full z-10 transition-all duration-500 ease-in ${open ? 'top-48 ':'top-[-800px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className='md:ml-8 text-sm font1 md:my-0 my-7'>
                            <a href={link.link} className='text-black text-base dark:text-white hover:text-blue-500 duration-500'>{link.name}</a>
                          </li>
                        ))
                    }
                
                </ul>
                
            </div>
        </nav>
    </div>
  )
}
