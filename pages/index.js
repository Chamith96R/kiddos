
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import CountUp from 'react-countup';

import { BeakerIcon } from '@heroicons/react/24/solid';
import { CalculatorIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HomeIcon } from '@heroicons/react/24/solid';
import { KeyIcon } from '@heroicons/react/24/solid';




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade,} from 'swiper';
// Import Aos anim
import Aos from "aos";
import 'aos/dist/aos.css';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import { useEffect } from 'react';
import Section1 from '../components/Section1';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';


export default function Home() {
    useEffect(() =>{
        Aos.init({ duration:500});
    }, [])
  return (
    <div>

	  <div className="py-3 bg-sky-500 sm:px-3 scroll-m-0">
        <div className="container flex-wrap items-center justify-between mx-auto">           
            <div className="lg:flex md:flex justify-around text-slate-200">                        
                <div className="flex"><svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="w-6 h-6 bg-fixed">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg><span className="text font1 text-sm">198 West 21th Street, Suite 721 New York NY 10016</span>
                </div> 

                <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  <span className="text font1 text-sm">youremail@email.com</span>
                </div>

                <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />  
                </svg><span className="text font1 text-sm">+ 1235 2355 98</span>
                </div>
            </div>
        </div>
    </div>

    <Nav/>
    <Section1/>


  
  <div data-aos="fade-up" className="relative scroll-mb-10">
        <div className="flex flex-wrap no-gutters">
            <div className="md:w-1/4 pr-4 pl-0 flex self-stretch pb-4 px-4 bg-sky-500 overflow-show ">
                <Section2 icon={BeakerIcon} title="Certified Teachers" desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." />
            </div>
            <div className="md:w-1/4 pr-4 pl-0 flex services self-stretch pb-4 px-4 bg-lime-600">
                <Section2 icon={CalculatorIcon} title="Special Education" desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." />
            </div>
            <div className="md:w-1/4 pr-4 pl-0 flex services self-stretch pb-4 px-4 bg-indigo-800">
                <Section2 icon={AcademicCapIcon} title="Book &amp; Library" desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." />
            </div>
            <div className="md:w-1/4 pr-4 pl-0 flex services self-stretch pb-4 px-4 bg-red-700">
                <Section2 icon={HeartIcon} title="Certification" desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic." />
            </div>
        </div>
    </div>

    
    <div className="mx-auto sm:px-4">
        <div data-aos="fade-up" className="flex flex-wrap">
            <div className="md:w-3/5 py-3 pr-2 mt-10 mb-20 font1">
                <h2 className="mb-4  text-3xl">What We Offer</h2>
                <p className="text-gray-500">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <div className="flex flex-wrap mt-10">        
                        <Section3 icon={BeakerIcon} title="Safety First" desc="Far far away, behind the word mountains, far from the countries Vokalia."/>
                                            
                        <Section3 icon={HeartIcon} title="Regular class" desc="Far far away, behind the word mountains, far from the countries Vokalia." />
                                           
                        <Section3 icon={AcademicCapIcon} title="Certified Teachers" desc="Far away, behind the word mountains, far from the countries Vokalia." />
                                            
                        <Section3 icon={CalculatorIcon} title="Sufficient class" desc="Far away, behind the word mountains, far from the countries Vokalia. "/>
                        
                        <Section3 icon={KeyIcon} title="Creative Lessons" desc="Far away, behind the word mountains, far from the countries Vokalia." />
                                        
                        <Section3 icon={HomeIcon} title="Sports Facilities" desc="Far away, behind the word mountains, far from the countries Vokalia." />                    
                </div>
            </div>
            <div data-aos="fade-up" className="md:w-2/5 pr-4 pl-4 order-md-last wrap-about py-5 wrap-about bg-gray-100">
                <div className="text px-4 font1">
                    <h2 className="mb-8 text-5xl mt-5">Welcome to Kiddos Learning School</h2>
                    <p className="text-gray-500 pb-6">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                    <p className="text-gray-500">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten,
                        then they are still using her.</p>
                    <p><a href="#" className="mt-5 inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-full py-3 px-5 leading-normal no-underline bg-orange-400 text-white hover:bg-orange-700 px-4 py-3">
                        Read More</a></p>
                </div>
            </div>
        </div>
    </div>

    <div className=" relative" >
    <div className=" h-screen lg:h-96 items-center justify-center bg-no-repeat bg-cover bg-fixed image3">


    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bgclr" >
      <div className="flex justify-center items-center h-full">
        <div className="container mx-auto sm:px-2">
            <div className="flex font1">
                <div className="md:w-3/4">
                    <h2 className="text-4xl text-white font-bold mb-4">Teaching Your Child Some Good Manners</h2>
                    <p className="mb-0 text-gray-200">A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className="md:w-1/4 pr-4 pl-4 flex items-center">
                    <button type='button' className=" text-center font-normal rounded-full leading-normal bg-orange-400 text-white px-5 py-3">Take a Course</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
    </div>

    <div data-aos="fade-up" className="sm:px-2 mt-20 mb-10 font1">
        <div className="flex flex-wrap justify-center mb-5 pb-5">
            <div className="md:w-2/3 pr-4 pl-4 text-center">
                <h2 className="mb-10 font-bold text-5xl text-orange-400"><span className="text-violet-700">Certified</span> Teachers</h2>
                <p className="font-sans mb-10 font1 text-gray-500">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>
        </div>
        <div className="flex flex-wrap font1">
            <div data-aos="fade-up" className="md:w-1/2 lg:w-1/4 pr-4 pl-4">
                <Section4 img="images/teacher-1.jpg" title="Bianca Wilson" subtitle="TEACHER" desc="I am an ambitious workaholic, but apart from that, pretty simple person." />
            </div>


            <div data-aos="fade-up" className="md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
                <Section4 img="images/teacher-2.jpg" title="Mitch Parker" subtitle="ENGLISH TEACHER" desc="I am an ambitious workaholic, but apart from that, pretty simple person." />
            </div>


            <div data-aos="fade-up" className="md:w-1/2 pr-4 pl-4 lg:w-1/4">
                <Section4 img="images/teacher-3.jpg" title="Stella Smith" subtitle="ART TEACHER" desc="I am an ambitious workaholic, but apart from that, pretty simple person." />
            </div>


            <div data-aos="fade-up" className="md:w-1/2 pr-4 pl-4 lg:w-1/4">
                <Section4 img="images/teacher-4.jpg" title="Monshe Henderson" subtitle="SCIENCE TEACHER" desc="I am an ambitious workaholic, but apart from that, pretty simple person." />
            </div>
        </div>
    </div>

    <div className="mx-auto sm:px-4 mt-20 mb-10 font1">
        <div className="flex flex-wrap  justify-center mb-5 pb-2">
            <div data-aos="fade-up" className="md:w-2/3 pr-4 pl-4 text-center pb-10">
                <h2 className="mb-10 font-bold text-5xl text-orange-400"><span className="text-violet-700">Our</span> Courses</h2>
                <p className="text-gray-500">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap ">
            <div className="flex justify-center md:w-1/2 pr-4 pl-4 mb-4">
                <Section5 img="images/course-1.jpg" title="Arts Lesson"/>               
            </div>
            <div className="flex justify-center md:w-1/2 pr-4 pl-4 mb-4">
                <Section5 img="images/course-2.jpg" title="Language Lesson"/>
            </div>
            <div className="flex justify-center lg:flex md:w-1/2 pr-4 pl-4 mb-4">
                <Section5 img="images/course-3.jpg" title="Music Lesson"/>
            </div>
            <div className="flex justify-center lg:flex md:w-1/2 pr-4 pl-4 mb-4">
                <Section5 img="images/course-4.jpg" title="Sports Lesson"/>
            </div>
        </div>
    </div>

  
    <div className=" relative">
    <div className="overflow-hidden bg-fixed image4">
        <div className="mx-auto sm:px-4 mt-20 mb-10">
            <div className="flex flex-wrap  justify-center mb-5 pb-2">
                <div data-aos="fade-up" className="md:w-2/3 pr-4 pl-4 text-center font1">
                    <h2 className="mb-10 font-bold text-5xl text-black"><span className="text-violet-700">20 Years of</span> Experience</h2>
                    <p className="font1 text-gray-500 font-sans">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
            </div>
            <div data-aos="fade-up" class=" flex flex-wrap pt-10 md:flex items-center justify-center">
                <div class="lg:w-4/5 pr-4 pl-4">
                    <div class="flex flex-wrap  md:flex items-center">
                        <div class="relative md:flex-grow md:flex-1 flex justify-center">
                            <div class="text"> 
                                <CountUp  className="flex text-5xl font-bold pb-5 justify-center text-sky-500" end={18} duration={5} />
                                                                                                                                                                                             
                                <span>Certified Teachers</span>
                            </div>                           
                        </div>
                        <div class="relative md:flex-grow md:flex-1 flex justify-center counter-wrap">
                            <div class="block-18">
                    
                                <div class="text">
                                    <CountUp className="flex text-5xl font-bold pb-5 justify-center text-sky-500" end={351} duration={5} />
                                    <span>Successful Kids</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative md:flex-grow md:flex-1 flex justify-center">
                            <div class="block-18">
                                
                                <div class="text">
                                    <CountUp className="flex text-5xl font-bold pb-5 justify-center text-sky-500" end={564} duration={5} />
                                    <span>Happy Parents</span>
                                </div>
                            </div>
                        </div>
                        <div class="relative md:flex-grow md:flex-1 flex justify-center">
                            <div class="block-18">
                               
                                <div class="text">
                                    <CountUp className="flex text-5xl font-bold pb-5 justify-center text-sky-500" end={300} duration={5} />
                                    <span>Awards Won</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  

    <div className="bg-slate-100 sm:px-4 font1">
        <div className="flex flex-wrap  justify-center mb-5 pb-2">
            <div data-aos="fade-up" className="md:w-2/3 pr-4 pl-4 text-center font1">
                <h2 className="mt-20 mb-10 font-bold text-5xl text-orange-400"><span className="text-violet-700">What Parents</span> Says About Us</h2>
                <p className="font1 text-gray-500">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>
        </div>

        <Swiper
             modules={[Pagination, Autoplay]}
             spaceBetween={100}
             slidesPerView={1}
             centeredSlides= {true}
             autoplay= {{
               delay: 3000,
               disableOnInteraction: false
             }}
             pagination={{ clickable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <Section6 img="/images/teacher-1.jpg" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                 name="Racky Henderson" role="Father"/>
            </SwiperSlide>
                
            <SwiperSlide>
                <Section6 img="/images/teacher-2.jpg" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                 name="Henry Dee" role="Mother"/>
            </SwiperSlide>

            <SwiperSlide>
                <Section6 img="/images/teacher-3.jpg" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                 name="Mark Huff" role="Mother"/>
            
            </SwiperSlide>

            <SwiperSlide>
                <Section6 img="/images/teacher-4.jpg" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                 name="Rodel Golez" role="Mother"/>
            </SwiperSlide>

            <SwiperSlide>
                <Section6 img="/images/teacher-1.jpg" desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                 name="Ken Bosh" role="Mother"/>
            </SwiperSlide>
           
        </Swiper>
        
    </div>

    <div data-aos="fade-up" className="relative bg-fixed image5">
        <div className="">
            <div class="container mx-auto sm:px-4">
                <div class="flex flex-wrap justify-end">
                  <div className="w-full h-full lg:w-1/2 md:w-2/3 pr-4 pl-1 py-20 md:px-10 bg-blue-400">
                      <div className="mb-5 text-white font1">
                          <h2 className="mb-6 text-5xl font-bold text-white">Request A Quote</h2>
                          <p className="text-gray-100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                      <form data-aos="fade-up" action="#" className="font1">
                          <div className="md:flex">
                              <div className="mb-4">
                                  <input type="text" className="py-1 px-3 mb-1 bg-white text-gray-800 border border-gray-200 rounded" placeholder="First Name"/>
                              </div>
                              <div className="mb-4 md:ml-6">
                                  <input type="text" className="py-1 px-3 mb-1 bg-white text-gray-800 border border-gray-200 rounded" placeholder="Last Name"/>
                              </div>
                          </div>
                          <div className="md:flex">
                              <div className="mb-3">
                                  <div className="form">
                                      <div className="mb-1">
                                          <div className="icon"><span className=""></span></div>
                                          <select name="" className="py-2 px-3 pr-5 mb-1 bg-white text-gray-800 border border-gray-200 rounded">
                                          <option value="">Select Your Course</option>
                                          <option value="">Art Lesson</option>
                                          <option value="">Language Lesson</option>
                                          <option value="">Music Lesson</option>
                                          <option value="">Sports</option>
                                          <option value="">Other Services</option>
                                          </select>
                                      </div>
                                  </div>
                              </div>
                              <div className="md:ml-6">
                                  <input type="text" className="py-1 px-3 mb-1 bg-white text-gray-800 border border-gray-200 rounded" placeholder="Phone"/>
                              </div>
                          </div>
                          <div className="md:flex">
                              <div className="mb-4">
                                  <textarea className="appearance-none py-1 px-3 mb-1 bg-white text-gray-800 border border-gray-200 rounded" placeholder="Message"></textarea>
                              </div>
                              <div className="md:ml-3">
                                  <input type="submit" value="Request A Quote" className="text-center rounded-full py-3 px-3 leading-normal bg-orange-400 text-white hover:bg-gray-700"/>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div data-aos="fade-up" className="sm:px-2 mt-20 mb-10">
        <div className="flex flex-wrap justify-center mb-5 pb-5">
            <div className="md:w-2/3 pr-4 pl-4 text-center font1">
                <h2 className="mb-10 font-bold text-5xl text-orange-400"><span className="text-violet-700">Our</span> Pricing</h2>
                <p className="mb-10 text-gray-500">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap font1 justify-center">

            <div className="md:w-1/2 pr-4 pl-4 lg:w-1/5">
                <Section7 title="Basic" price="$24.50" img="images/bg_1.jpg" bgprimary="bg-blue-600" />
                
            </div>
            
            <div className="md:w-1/2 pr-4 pl-4 lg:w-1/5">
                <Section7 title="Standard" price="$34.50" img="images/bg_2.jpg" bgprimary="bg-orange-400" />
                
            </div>
            <div className="md:w-1/2 pr-4 pl-4 lg:w-1/5">
                <Section7 title="Premium" price="$54.50" img="images/bg_3.jpg" bgprimary="bg-green-500" />
                
            </div>
            <div className="md:w-1/2 pr-4 pl-4 lg:w-1/5">
                <Section7 title="Platinum" price="$89.50" img="images/bg_4.jpg" bgprimary="bg-red-500" />
                
            </div>          
        </div>
    </div>

    <div className="bg-slate-100 sm:px-2 mt-20 font1">
        <div className="flex flex-wrap justify-center mb-5 pb-5">
            <div data-aos="fade-up" className="md:w-2/3 pr-4 pl-4 text-center">
                <h2 className="mb-10 mt-20 font-bold text-5xl text-orange-400"><span className="text-violet-700">Recent</span> Blog</h2>
                <p className="font-sans mb-10 text-gray-500">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap font1 pr-6 pl-6 pb-20">
               <div class="md:w-1/2 pr-4 pl-4 lg:w-1/3 ">
                    <div class="blog-entry">
                        <a href="" class="block-20 fimage5">
                            <div class="content-end meta-date text-center p-2">
                                <span class="day">27</span>
                                <span class="mos">January</span>
                                <span class="yr">2019</span>
                            </div>
                        </a>
                        <div class="text bg-white p-5">
                            <h2 class="hover:text-sky-500 text-2xl mb-5">Skills To Develop Your Child Memory</h2>
                            <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="flex items-center mt-4">
                                <p class="mb-0 mt-4"><a href="#" class="inline-block align-middle text-center select-none font-normal rounded-full py-1 px-3 leading-normal no-underline bg-orange-400 text-white hover:bg-gray-700">Read More </a></p>
                                <p class="ml-auto mb-0">
                                    <a href="#" class="mr-2 text-sky-500">Admin</a>
                                    <a href="#" class=""> 3</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        

               <div class="md:w-1/2 pr-4 pl-4 lg:w-1/3">
                    <div class="blog-entry">
                        <a href="" class="block-20 fimage6">
                            <div class="meta-date text-center p-2">
                                <span class="day">27</span>
                                <span class="mos">January</span>
                                <span class="yr">2019</span>
                            </div>
                        </a>
                        <div class="text bg-white p-5">
                            <h2 class="hover:text-sky-500 text-2xl mb-5">Skills To Develop Your Child Memory</h2>
                            <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="flex items-center mt-4">
                                <p class="mb-0 mt-4"><a href="#" class="inline-block align-middle text-center select-none font-normal rounded-full py-1 px-3 leading-normal no-underline bg-orange-400 text-white hover:bg-gray-700">Read More </a></p>
                                <p class="ml-auto mb-0">
                                    <a href="#" class="mr-2 text-sky-500">Admin</a>
                                    <a href="#" class=""> 3</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="md:w-1/2 pr-4 pl-4 lg:w-1/3">
                    <div class="blog-entry">
                        <a href="" class="block-20 fimage7">
                            <div class="meta-date text-center p-2">
                                <span class="day">27</span>
                                <span class="mos">January</span>
                                <span class="yr">2019</span>
                            </div>
                        </a>
                        <div class="text bg-white p-5">
                            <h2 class="hover:text-sky-500 text-2xl mb-5">Skills To Develop Your Child Memory</h2>
                            <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div class="flex items-center mt-4">
                                <p class="mb-0 mt-4"><a href="#" class="inline-block align-middle text-center select-none font-normal rounded-full py-1 px-3 leading-normal no-underline bg-orange-400 text-white hover:bg-gray-700">Read More</a></p>
                                <p class="ml-auto mb-0">
                                    <a href="#" class="mr-2 text-sky-500">Admin</a>
                                    <a href="#" class=""> 3</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
        </div>        
    </div>

    <div data-aos="fade-up" class="">
            <div class="flex p-0">
                <div class="md:w-1/4">
                    <a href="images/image_1.jpg" class="flex items-center course1">
                        <div class="flex items-center justify-center">
                            <span class="icon-instagram"></span>
                        </div>
                    </a>
                </div>
                <div class="md:w-1/4">
                    <a href="images/image_2.jpg" class=" flex items-center course2">
                       
                    </a>
                </div>
                <div class="md:w-1/4 ">
                    <a href="images/image_3.jpg" class=" flex items-center course3">
                        
                    </a>
                </div>
                <div class="md:w-1/4">
                    <a href="images/image_4.jpg" class=" flex items-center course4">
                       
                    </a>
                </div>
            </div>
        </div>
    <Footer/>
    </div>
  )
}
