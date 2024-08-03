"use client"

import Image from 'next/image';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react'

export default function Home() {
  const fadeInUpAnimation = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 100,
      y: 0,
      transition: {
        delay: 0.3
      }
    }
  }

  const fadeInAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        delay: 0.3
      }
    }
  }

  return (
    <>
      <header className="grid grid-cols-2 z-10 absolute w-full backdrop-blur-sm">
        <div className="flex items-center space-x-1 text-xl text-white font-semibold">
          <div className="py-5 px-10 bg-slate-100">
            <Image
              src="/vinafco.png"
              width={1280}
              height={720}
              className="mr-2 text-white h-10 w-auto"
              alt="x"
            />
          </div>
        </div>
        <div className="md:flex hidden items-center space-x-8 ml-auto ox-10 py-5 px-10">
          <a href="/" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">News</a>
          <a href="/faq" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">FAQ</a>
          <a href="/documents" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">Documents</a>
          <a href="/terms" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">ToS</a>
          <a href="/contact" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">Contact</a>
        </div>
      </header>
      <main className="w-full h-full">
        <section className="p-10 w-screen h-screen">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-500 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-sky-800">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>
          <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 fadeInUp">
            <div className="flex w-full items-center h-full">
              <div className="w-full h-fit">
                <p className="text-5xl font-bold text-white mb-3">
                  Your Goods, Our Precision, Delivered Fast.
                </p>
                <p className="text-lg font-semibold text-slate-500 mb-6">
                  Reliable and effortless storage logistics solutions at a reasonable price.<br/>You have shipments? We can store them.
                </p>
                <a href="/contact" className="bg-sky-600 text-white font-semibold px-5 py-3 rounded-lg transition duration-150 ease-in-out hover:bg-sky-700">Partner with Us</a>
              </div>
            </div>
            <div className="md:flex hidden w-full items-center h-full relative">
              <Image 
                src="/mainview.jpg"
                width={1200}
                height={800} 
                className="absolute w-full h-auto rounded-lg -z-1 left-[20%]"
                alt="mainview"
              />
            </div>
          </div>
        </section>
        <section className="relative p-20 w-full h-fit mb-10">
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="flex w-full h-full items-center justify-center">
            <div className="md:w-[70%] w-full h-fit">
              <div className="border border-2 border-sky-600 rounded-full w-[70px] h-[70px] text-center text-sky-600 bg-sky-800/50 flex items-center justify-center text-3xl m-auto mb-10">
                1
              </div>
              <p className="text-center text-2xl text-sky-600 font-semibold mb-5">Our Services</p>
              <p className="text-center text-white text-4xl font-semibold mb-5">Logistics with ease</p>
              <hr className="border-sky-600 w-[150px] m-auto mb-5" />
              <p className="text-center text-white text-lg mb-10">Vinafco provides industry-leading losgistics and management. Using international standards and protocols, we can provide our customers with a reliable experience.</p>
              <motion.div className="lg:w-[70%] w-full grid md:grid-cols-2 grid-cols-1 gap-10 flex justify-center m-auto mb-20" variants={fadeInUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]">
                  <p className="text-sky-600 text-xl mb-4">Storage Management</p>
                  <p className="text-sm text-slate-400">Vinafco, a leading warehousing provider in Vietnam with 35 years of experience, offers unmatched accuracy and reliability.</p>
                </div>
                <div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]">
                  <p className="text-sky-600 text-xl mb-4">Transportation</p>
                  <p className="text-sm text-slate-400">Road transportation is a key strength of Vinafco, featuring a large, diverse fleet tailored to meet various client needs.</p>
                </div>
                <div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]">
                  <p className="text-sky-600 text-xl mb-4">Freight Forwarding</p>
                  <p className="text-sm text-slate-400">Vinafco offers international sea and air freight services with a global network of agents, handling customs clearance at ports, airports, and checkpoints nationwide.</p>
                </div>
                <div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]">
                  <p className="text-sky-600 text-xl mb-4">Sea Transportation</p>
                  <p className="text-sm text-slate-400">Specializing in fast, safe, and cost-effective domestic sea freight, Vinafco is trusted by partners and recognized as one of the most reputable maritime transport companies.</p>
                </div>
              </motion.div>
              <div className="w-full mb-5">
                <p className="text-center text-sky-600 font-semibold text-2xl mb-5">Look at these numbers</p>
                <div className="w-full grid md:grid-cols-3 grid-cols-1">
                  <div className="p-5 w-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl text-white font-bold mb-3">Top 500</p>
                      <p className="text-xl text-slate-500"><a href="https://vnr500.com.vn/Thong-tin-doanh-nghiep/CONG-TY-CP-VINAFCO-Chart--508-2020.html" className="hover:underline decoration-offset-5 hover:underline-1 underline-slate-500">Largest Vietnamese enterprise</a></p>
                    </div>
                  </div>
                  <div className="p-5 w-full">
                    <div className="text-center">
                      <p className="text-4xl text-white font-bold mb-3">50+ million $</p>
                      <p className="text-xl text-slate-500"><a href="" className="hover:underline decoration-offset-5 hover:underline-1 underline-slate-500">in revenue last year</a></p>
                    </div>
                  </div>
                  <div className="p-5 w-full">
                    <div className="text-center">
                      <p className="text-4xl text-white font-bold mb-3">{'>'}175,000 ㎡</p>
                      <p className="text-xl text-slate-500"><a href="" className="hover:underline decoration-offset-5 hover:underline-1 underline-slate-500">of warehouse space around Vietnam</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full h-fit bg-slate-800">
          <div className="w-full h-full grid md:grid-cols-2 grid-cols-1">
            <div className="flex w-full h-full text-left items-center px-10">
              <div className="w-full h-fit p-5 mb-5 md:mb-0">
                <div className="border border-2 border-green-600 rounded-full w-[70px] h-[70px] text-center text-green-600 bg-green-800/50 flex items-center justify-center text-3xl mb-10">
                  2
                </div>
                <p className="text-2xl text-green-600 font-semibold mb-5">Our Awesome Customers</p>
                <p className="text-white text-4xl font-semibold mb-5">These guys trust us, you should too!</p>
                <div className="bg-slate-700 rounded-lg shadow-sm p-5">
                  <div className="w-full">
                    <div className="w-full flex items-center mb-3">
                      <Image src="/david-s.png" height={50} width={50} alt="david" className="rounded-full mr-3"/>
                      <div>
                        <p className="text-lg text-white font-semibold mb-0">David S.</p>
                        <p className="text-slate-400 text-sm">Extinguished businessman</p>
                      </div>
                    </div>
                    <div className="w-full text-white">
                      <p>⭐️⭐️⭐️⭐️⭐️</p>
                      <p className="text-white mb-3">Vinafco has been exceptional in both warehousing and transportation. Their efficiency, reliability, and top-notch customer service have significantly streamlined our operations. Highly recommended!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div className="w-full h-full bg-white" variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="grid md:grid-cols-3 md:grid-rows-3 grid-cols-2 grid-rows-2 w-full gap-0">
                <div className="w-full p-5 flex h-[300px] bg-white items-center justify-center">
                  <div className="w-fit h-fit">
                    <Image
                      src="/samsung.jpg"
                      width="1280"
                      height="700"
                      alt="samsung"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <div className="w-full p-5 flex h-[300px] bg-white items-center justify-center">
                  <Image
                    src="/onemount.png"
                    width="1280"
                    height="700"
                    alt="onemount"
                    className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 flex h-[300px] bg-white items-center justify-center">
                  <Image
                      src="/hayat.png"
                      width="1280"
                      height="700"
                      alt="hayat"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 flex h-[300px] bg-[#EBB730] items-center justify-center">
                  <Image
                      src="/jotun.png"
                      width="1280"
                      height="700"
                      alt="jotun"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 md:flex hidden h-[300px] bg-[#153767] items-center justify-center">
                  <Image
                      src="/masan.jpg"
                      width="1280"
                      height="700"
                      alt="masan"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 md:flex hidden h-[300px] bg-[#0265FF] items-center justify-center">
                  <Image
                      src="/panasonic.jpg"
                      width="1280"
                      height="700"
                      alt="panasonic"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 md:flex hidden h-[300px] bg-white items-center justify-center">
                  <Image
                      src="/habeco.png"
                      width="1280"
                      height="700"
                      alt="habeco"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 md:flex hidden h-[300px] bg-white items-center justify-center">
                  <Image
                      src="/kimberlyclark.svg"
                      width="1280"
                      height="700"
                      alt="kimberlyclark"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 md:flex hidden h-[300px] bg-white items-center justify-center">
                  <Image
                      src="/ajinomoto.png"
                      width="1280"
                      height="700"
                      alt="ajinomoto"
                      className="h-auto w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="relative isolate w-full h-fit">
          <Image src="/background.png" height={1920} width={1080} className="absolute inset-0 -z-10 h-full w-full object-cover object-right" alt="background"/>
          <div className="flex w-full h-full items-center justify-center bg-slate-900/80 pt-20 pb-20">
            <motion.div className="md:w-[40%] w-[80%] h-fit p-10 bg-slate-100 rounded-xl" variants={fadeInUpAnimation} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="border border-2 border-indigo-600 rounded-full w-[70px] h-[70px] text-center text-indigo-600 bg-indigo-600/50 flex items-center justify-center text-3xl m-auto mb-10">
                3
              </div>
              <p className="text-center text-2xl text-indigo-600 font-semibold mb-5">Contact Us</p>
              <p className="text-center text-4xl font-semibold mb-5">We would love to help you</p>
              <hr className="border-indigo-600 w-[150px] m-auto mb-5" />
              <p className="text-center text-lg mb-10">Fill in the form below and let{`'`}s get in touch</p>
              <form className="w-full m-auto w-full space-y-6">
                <div className="w-full grid grid-cols-2 gap-3 mb-5">
                  <input name="firstname" type="text" required placeholder="First Name" className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"/>
                  <input name="lastname" type="text" required placeholder="Last Name" className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"/>
                </div>
                <input name="email" type="email" required placeholder="Email" className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"/>
                <textarea name="description" className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" rows={10} placeholder="How can we assist you?"></textarea>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
              </form>
            </motion.div>
          </div>
        </section>
        <section className="w-full h-fit p-20">
          <p className="text-2xl text-indigo-600 font-semibold text-center">Latest News</p>
          <p className="text-4xl text-white text-center font-semibold mb-10">Read the latest news about Vinafco here.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-3 flex justify-center">
            <div className="w-full p-5 rounded-xl shadow-sm bg-slate-800">
              <p className="text-indigo-500 font-semibold mb-2">Company News</p>
              <p className="text-white font-semibold text-2xl mb-5">Vinafco welcomes new CEO</p>
              <p className="text-slate-400">From July 1st, Vinafco Joint Stock Company appointed Mr. Bui Minh Hung as the new CEO, marking a new chapter in the company’s development journey.</p>
            </div>
            <div className="w-full p-5 rounded-xl shadow-sm bg-slate-800">
              <p className="text-indigo-500 font-semibold mb-2">Company News</p>
              <p className="text-white font-semibold text-2xl mb-5">2024 Shareholders meeting</p>
              <p className="text-slate-400">Vinafco successfully held the 2024 shareholders meeting and ended successfully.</p>
            </div>
            <div className="w-full p-5 rounded-xl shadow-sm bg-slate-800">
              <p className="text-fuchsia-500 font-semibold mb-2">General</p>
              <p className="text-white font-semibold text-2xl mb-5">Vietnamese logistics potentials</p>
              <p className="text-slate-400">The Freight Forwarders Assosiacions (FIATA) gave their reasons to believe that Vietnam has underlying logistics potentials.</p>
            </div>
          </div>
        </section>
        <footer className="w-full bg-slate-800 h-fit p-10 grid md:grid-cols-4 grid-cols-1 gap-3">
          <div className="w-full p-5">
            <div className="flex items-center space-x-1 text-3xl text-white font-semibold mb-5 bg-white p-5">
              <Image
                src="/vinafco.png"
                width={1280}
                height={720}
                className="w-full h-auto"
                alt="x"
              />
            </div>
            <div className="w-full text-slate-400 font-semibold">
              <p>Thinking about Supply Chains since 1985</p>
            </div>
          </div>
          <div className="w-full p-5">
            <ul className="list-style-none space-y-3">
              <li className="text-sm text-slate-500">Company</li>
              <li><a href="/about" className="text-md text-slate-500 font-semibold hover:text-white">About</a></li>
              <li><a href="/careers" className="text-md text-slate-500 font-semibold hover:text-white">Careers</a></li>
              <li><a href="/tos" className="text-md text-slate-500 font-semibold hover:text-white">Terms of Service</a></li>
              <li><a href="/documents" className="text-md text-slate-500 font-semibold hover:text-white">Documents</a></li>
            </ul>
          </div>
          <div className="w-full p-5">
            <ul className="list-style-none space-y-3">
              <li className="text-sm text-slate-500">Branches</li>
              <li><a href="" className="text-md text-slate-500 font-semibold hover:text-white">Vinafco JSC</a></li>
              <li><a href="" className="text-md text-slate-500 font-semibold hover:text-white">Vinafco Receiving LLC</a></li>
              <li><a href="" className="text-md text-slate-500 font-semibold hover:text-white">Vinafco Sea Transportation JSC</a></li>
              <li><a href="" className="text-md text-slate-500 font-semibold hover:text-white">Vinafco Transporation and Services LLC (Southern branch)</a></li>
              <li><a href="" className="text-md text-slate-500 font-semibold hover:text-white">Vinafco Transporation and Services LLC (Northern branch)</a></li>
            </ul>
          </div>
          <div className="w-full p-5">
            <ul className="list-style-none space-y-3">
              <li className="text-sm text-slate-500">Contact Us</li>
              <li>
                <p className="text-md text-slate-500 font-semibold">Cong Ty Co Phan Vinafco</p>
                <p className="text-slate-500 text-md">- Address: Tu Khoat, Ngu Hiep, Thanh Tri, Ha Noi</p>
                <p className="text-slate-500 text-md">- Phone Number: +84 24 37684464</p>
                <p className="text-slate-500 text-md">- Email: info@vinafco.com.vn</p>
              </li>
              <li>
                <p className="text-md text-slate-500 font-semibold">Cong Ty Co Phan Vinafco (Mien Nam)</p>
                <p className="text-slate-500 text-md">- Address: 53-55, road 41, Province 6, District 4, HCMC</p>
                <p className="text-slate-500 text-md">- Phone Number: +84 28 38268770</p>
                <p className="text-slate-500 text-md">- Email: info@vinafco.com.vn</p>
              </li>
            </ul>
          </div>
        </footer> 
      </main>
    </>
  )
}