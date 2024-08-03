"use client"

import Image from 'next/image';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react'

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.5", "1 1"]
  });

  const fadeInUpAnimation = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 100,
      y: 0,
      transition: {
        delay: 0.5
      }
    }
  }

  return (
    <>
      <header className="px-10 py-5 grid grid-cols-2 z-10 absolute w-full bg-slate-900">
        <div 
          className="flex items-center space-x-1 text-xl text-white font-semibold"
        >
          <Image
            src="/x.svg"
            width={25}
            height={25}
            className="mr-2 text-white"
            alt="x"
          />
          Vinafco
        </div>
        <div className="flex items-center space-x-8 ml-auto">
          <a href="/" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">News</a>
          <a href="/faq" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">FAQ</a>
          <a href="/documents" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">Documents</a>
          <a href="/terms" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">ToS</a>
          <a href="/contact" className="font-semibold text-slate-500 hover:text-white text-sm focus:outline-none">Contact</a>
        </div>
      </header>
      <main className="w-full h-full">
        <section className="px-10 py-5 w-screen h-screen ">
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
          <div className="w-full h-full grid grid-cols-2 fadeInUp">
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
            <div className="flex w-full items-center h-full relative">
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
        <section className="p-10 w-full h-fit mb-10" ref={ref}>
          <div className="flex w-full h-full items-center justify-center">
            <div className="w-[70%] h-fit">
              <div className="border border-2 border-sky-600 rounded-full w-[70px] h-[70px] text-center text-sky-600 bg-sky-800/50 flex items-center justify-center text-3xl m-auto mb-10">
                1
              </div>
              <p className="text-center text-2xl text-sky-600 font-semibold mb-5">Our Services</p>
              <p className="text-center text-white text-4xl font-semibold mb-5">Logistics with ease</p>
              <hr className="border-sky-600 w-[150px] m-auto mb-5" />
              <p className="text-center text-white text-lg mb-10">Vinafco provides industry-leading losgistics and management. Using international standards and protocols, we can provide our customers with a reliable experience.</p>
              <div className="w-[70%] grid grid-cols-2 gap-10 flex justify-center m-auto">
                <motion.div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]" style={{ opacity: scrollYProgress }}>
                  <p className="text-sky-600 text-xl mb-4">Storage Management</p>
                  <p className="text-sm text-slate-400">Vinafco, a leading warehousing provider in Vietnam with 35 years of experience, offers unmatched accuracy and reliability.</p>
                </motion.div>
                <motion.div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]" style={{ opacity: scrollYProgress }}>
                  <p className="text-sky-600 text-xl mb-4">Transportation</p>
                  <p className="text-sm text-slate-400">Road transportation is a key strength of Vinafco, featuring a large, diverse fleet tailored to meet various client needs.</p>
                </motion.div>
                <motion.div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]" style={{ opacity: scrollYProgress }}>
                  <p className="text-sky-600 text-xl mb-4">Freight Forwarding</p>
                  <p className="text-sm text-slate-400">Vinafco offers international sea and air freight services with a global network of agents, handling customs clearance at ports, airports, and checkpoints nationwide.</p>
                </motion.div>
                <motion.div className="relative w-full border border-1 border-sky-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-sky-900/50 h-[250px]" style={{ opacity: scrollYProgress }}>
                  <p className="text-sky-600 text-xl mb-4">Sea Transportation</p>
                  <p className="text-sm text-slate-400">Specializing in fast, safe, and cost-effective domestic sea freight, Vinafco is trusted by partners and recognized as one of the most reputable maritime transport companies.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-screen bg-slate-800" style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)" }}>
          <div className="w-full h-full grid grid-cols-2">
            <div className="flex w-full h-full text-left items-center px-10">
              <div className="w-full h-fit p-5">
                <div className="border border-2 border-green-600 rounded-full w-[70px] h-[70px] text-center text-green-600 bg-green-800/50 flex items-center justify-center text-3xl mb-10">
                  2
                </div>
                <p className="text-2xl text-green-600 font-semibold mb-5">Our Customers</p>
                <p className="text-white text-4xl font-semibold mb-5">These companies trust us, you should too</p>
              </div>
            </div>
            <motion.div className="w-full h-full bg-white" variants={fadeInUpAnimation} initial="initial" whileInView="animate">
              <div className="grid grid-cols-3 grid-rows-3 w-full gap-0">
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
                <div className="w-full p-5 flex h-[300px] bg-[#153767] items-center justify-center">
                  <Image
                      src="/masan.jpg"
                      width="1280"
                      height="700"
                      alt="masan"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 flex h-[300px] bg-[#0265FF] items-center justify-center">
                  <Image
                      src="/panasonic.jpg"
                      width="1280"
                      height="700"
                      alt="panasonic"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 flex h-[300px] bg-white items-center justify-center">
                  <Image
                      src="/habeco.png"
                      width="1280"
                      height="700"
                      alt="habeco"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 flex h-[300px] bg-white items-center justify-center">
                  <Image
                      src="/kimberlyclark.svg"
                      width="1280"
                      height="700"
                      alt="kimberlyclark"
                      className="h-auto w-full"
                  />
                </div>
                <div className="w-full p-5 flex h-[300px] bg-white items-center justify-center">
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
        <section className="w-full h-fit pt-10 pb-10">
          <div className="flex w-full h-full items-center justify-center">
            <div className="w-[40%] h-fit py-20 px-10 bg-slate-100 rounded-xl">
              <div className="border border-2 border-indigo-600 rounded-full w-[70px] h-[70px] text-center text-indigo-600 bg-indigo-600/50 flex items-center justify-center text-3xl m-auto mb-10">
                3
              </div>
              <p className="text-center text-2xl text-indigo-600 font-semibold mb-5">Contact Us</p>
              <p className="text-center text-4xl font-semibold mb-5">We would love to help you</p>
              <hr className="border-indigo-600 w-[150px] m-auto mb-5" />
              <p className="text-center text-lg mb-10">Fill in the form below and let's get in touch</p>
              <form className="w-full m-auto w-full space-y-6">
                <div className="w-full grid grid-cols-2 gap-3 mb-5">
                  <input name="firstname" type="text" required placeholder="First Name" className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"/>
                  <input name="lastname" type="text" required placeholder="Last Name" className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"/>
                </div>
                <input name="email" type="email" required placeholder="Email" className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"/>
                <textarea name="description" className="block w-full rounded-md border-0 py-2 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none" rows={10} placeholder="How can we assist you?"></textarea>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
              </form>
            </div>
          </div>
        </section>
        <footer className="w-full bg-slate-800 h-fit py-20 px-20 grid grid-cols-3" style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div className="w-full">
            <div className="flex items-center space-x-1 text-3xl text-white font-semibold mb-5">
              <Image
                src="/x.svg"
                width={40}
                height={40}
                className="mr-2 text-white"
                alt="x"
              />
              Vinafco
            </div>
            <div className="w-full text-slate-400 font-semibold">
              Thinking about Supply Chains since 1985
            </div>
          </div>
          <div className="w-full"></div>
          <div className="w-full"></div>
        </footer> 
      </main>
    </>
  )
}