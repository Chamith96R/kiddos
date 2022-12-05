import React from 'react'


export default function Section6({img:img, desc:desc, name:name, role:role}) {
  return (
    <div>
            <section class="p-6 md:p-12 text-center md:text-left font1">
            <div class="flex justify-center">
                <div class="max-w-3xl">
                <div class="block p-6 rounded-lg m-4">
                    <div class="md:flex md:flex-row">
                    <div
                        class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0"
                    >
                        <img
                        src={img}
                        width="120px"
                        align="top"
                        class="rounded-full shadow-md"
                        alt="woman avatar"
                        />
                    </div>
                    <div class="md:ml-6">
                        <p class="text-gray-500 text-lg mb-6">
                        {desc}
                        </p>
                        <p class="font-semibold text-xl text-gray-800">{name}</p>
                        <p class="font-xs text-sky-500 mb-0">{role}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}
