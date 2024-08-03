import Image from 'next/image';

export default function Home() {
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
            style="color: white;"
            className="mr-2"
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
      <main className="w-full h-full relative">
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
              />
            </div>
          </div>
        </section>
        <section className="p-10 w-full h-fit mb-10">
          <div className="flex w-full h-full items-center justify-center">
            <div class="w-[70%] h-fit">
              <div className="border border-2 border-sky-600 rounded-full w-[70px] h-[70px] text-center text-sky-600 bg-sky-800/50 flex items-center justify-center text-3xl m-auto mb-10">
                1
              </div>
              <p className="text-center text-2xl text-sky-600 font-semibold mb-5">Our Services</p>
              <p className="text-center text-white text-4xl font-semibold mb-5">Logistics with ease</p>
              <hr className="border-sky-600 w-[150px] m-auto mb-5" />
              <p className="text-center text-white text-lg mb-10">Vinafco provides industry-leading losgistics and management. Using international standards and protocols, we can provide our customers with a reliable experience.</p>
              <div className="w-full grid grid-cols-2 gap-10">
                <div className="relative w-full border border-1 border-fuchsia-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-fuchsia-900/50 h-[250px]">
                  <p className="text-fuchsia-600 text-xl mb-4">Storage Management</p>
                  <p className="text-sm text-slate-400">Vinafco, a leading warehousing provider in Vietnam with 35 years of experience, offers unmatched accuracy and reliability.</p>
                </div>
                <div className="relative w-full border border-1 border-fuchsia-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-fuchsia-900/50 h-[250px]">
                  <p className="text-fuchsia-600 text-xl mb-4">Transportation</p>
                  <p className="text-sm text-slate-400">Road transportation is a key strength of Vinafco, featuring a large, diverse fleet tailored to meet various client needs.</p>
                </div>
                <div className="relative w-full border border-1 border-fuchsia-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-fuchsia-900/50 h-[250px]">
                  <p className="text-fuchsia-600 text-xl mb-4">Freight Forwarding</p>
                  <p className="text-sm text-slate-400">Vinafco offers international sea and air freight services with a global network of agents, handling customs clearance at ports, airports, and checkpoints nationwide.</p>
                </div>
                <div className="relative w-full border border-1 border-fuchsia-900 p-8 rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] shadow-fuchsia-900/50 h-[250px]">
                  <p className="text-fuchsia-600 text-xl mb-4">Sea Transportation</p>
                  <p className="text-sm text-slate-400">Specializing in fast, safe, and cost-effective domestic sea freight, Vinafco is trusted by partners and recognized as one of the most reputable maritime transport companies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-screen">
          <div className="w-full h-full grid grid-cols-2 p-10">
            <div class="flex w-full h-full text-left items-center">
              <div className="w-full h-fit p-5">
                <div className="border border-2 border-green-600 rounded-full w-[70px] h-[70px] text-center text-green-600 bg-green-800/50 flex items-center justify-center text-3xl mb-10">
                  2
                </div>
                <p className="text-2xl text-green-600 font-semibold mb-5">Our Customers</p>
                <p className="text-white text-4xl font-semibold mb-5">These companies trust us, you should too</p>
              </div>
            </div>
            <div className="w-full h-full relative">
                <div className="rounded-full w-[300px] h-[300px] bg-fuchsia-800/80 -z-1 filter mix-blend-multiple blur-xl top-0 -left-4"></div>
                <div className="rounded-full w-[300px] h-[300px] bg-fuchsia-800/80 -z-1 filter mix-blend-multiple blur-xl top-0 -right-4"></div>
                <div className="rounded-full w-[300px] h-[300px] bg-fuchsia-800/80 -z-1 filter mix-blend-multiple blur-xl -bottom-8"></div>
              <div className="relative grid grid-cols-2 gap-10 grid-rows-2 grid-flow-col">
                <div className="w-full p-5 flex h-[300px] bg-slate-800 rounded-lg">
                  
                </div>
                <div className="w-full p-5 flex h-[300px] bg-slate-800 rounded-lg">
                  
                </div>
                <div className="w-full p-5 flex h-[300px] bg-slate-800 rounded-lg">
                  
                </div>
                <div className="w-full p-5 flex h-[300px] bg-slate-800 rounded-lg">
                  
                </div>
              </div>              
            </div>
          </div>
        </section>
      </main>
    </>
  )
}