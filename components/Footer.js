import React from 'react'

export default function Footer() {
  return (
    <div>
      <div data-aos="fade-up" class=" mx-auto sm:px-4 bg-gray-900 text-white font1">
        <div class="flex flex-wrap p-16">
            <div class="md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                <div class="mb-5">
                    <h2 class="mt-10 text-2xl font-semibold">Have a Questions?</h2>
                    <div class="mt-5">
                        <ul className="text-sm ">
                            <li><span className="text-gray-300">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                            <li><a href="#">+2 392 3929 210</a></li>
                            <li><a href="#">[email&#160;protected]</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                <div class="mt-10">
                    <h2 class="text-2xl font-semibold">Recent Blog</h2>
                    <div class="mt-5 mb-4 flex">
                        <a class="mr-4"></a>
                        <div class="text">
                            <h3 class="hover:text-blue-500"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                            <div class="text-xs">
                                <div><a href="#"> Dec 25, 2018</a></div>
                                <div><a href="#"> Admin</a></div>
                                <div><a href="#"> 19</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 flex">
                        <a class="mr-4"></a>
                        <div class="text">
                            <h3 class="hover:text-blue-500"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                            <div class="">
                                <div><a href="#"> Dec 25, 2018</a></div>
                                <div><a href="#"> Admin</a></div>
                                <div><a href="#"> 19</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                <div class="mt-10 md:ml-10">
                    <h2 class="text-2xl font-semibold">Links</h2>
                    <ul class="mt-5">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Deparments</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                <div class="mb-5">
                    <h2 class="mt-10 text-2xl font-semibold">Subscribe Us!</h2>
                    <form action="#" class="subscribe-form mt-5">
                        <div class="mb-4">
                            <input type="text" class="block w-full py-3 px-3 mb-3 text-base  bg-gray-700 text-gray-800 rounded mb-2 text-center" placeholder="Enter email address"/>
                            <input type="submit" value="Subscribe" class="block appearance-none w-full py-3 px-3 mb-2 hover:bg-sky-700 bg-purple-800 text-white rounded submit px-3"/>
                        </div>
                    </form>
                </div>
                <div class="mt-5">
                    <h2 class="mb-0 text-2xl font-semibold">Connect With Us</h2>
                    
                </div>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="md:w-full pr-4 pl-4 text-center mt-10 mb-10">
                <p>
                    Copyright &copy All rights reserved | This template is made with by Abacus
                </p>
            </div>
        </div>
    </div>
      
  </div>
  )
}
