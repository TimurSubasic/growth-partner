
import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  
  return (
    <div className="w-full" id='home-page'>
      

      {/* hero */}
      <section id="hero" className="h-screen-nav w-full ">

        <div className="w-full h-full flex items-center justify-center bg-black/25">

            <p className=" uppercase text-white text-3xl text-center max-w-6xl sm:text-4xl md:text-5xl lg:text-6xl p-5 rounded-lg font-myfont space tracking-wide duration-150 ">
              <strong>&quot;</strong>  Digital creators should focus on one thing, creating content, we just do the boring stuff! <strong>&quot;</strong>
            </p>
            
        </div>

        

      </section>


      {/* about us */}
      <section id='about-us' className="text-[#006039] py-16 px-5 max-w-7xl mx-auto ">

        <h1 className="text-center font-myfont uppercase text-4xl mt-12 lg:text-5xl duration-150 ">
          about us
        </h1>

        <p className=" font-bold text-center my-8 uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl duration-150 ">
          While others are stuck in the talk, we focus on delivering real results, we are a dedicated team of marketers, sales experts, editors and graphic designers specializing in building high-converting funnels and driving conversions across your digital platforms. From concept to execution, we craft tailored strategies that don&apos;t just attract attention but transform visitors into loyal customers. If you&apos;re ready to stop settling for average and start maximazing your digital impact, we&apos;re here to take your business to the next level
        </p>

      </section>


      {/* why us */}
      <section id='why-us' className="bg-[#006039] w-full min-h-screen text-white p-12 ">

        <div className=" max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">

          <h2 className="uppercase text-5xl font-myfont text-lime-500 text-center ">
            Why choose us
          </h2>

          {/* items */}
          <div className="flex flex-col gap-4">

            {/* item 1 */}
            <div className="flex items-center justify-center border-t-2 border-slate-300 ">

              <Image
              src='/GP-icon2.png'
              alt='Icon'
              height={200}
              width={200}
              className='h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-52 lg:w-52 duration-150'
              />

              <div className='flex flex-col justify-center items-start mt-5 w-4/6'>

                <h3 className='font-semibold text-3xl '>
                  20+%
                </h3>

                <p className=' text-lg'>
                  opt in conversion rate depending what we give to audience as free value
                </p>

              </div>

            </div>


            {/* item 2 */}
            <div className="flex items-center justify-center border-t-2 border-slate-300 ">

              <Image
              src='/GP-icon2.png'
              alt='Icon'
              height={200}
              width={200}
              className='h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-52 lg:w-52 duration-150'
              />

              <div className='flex flex-col justify-center items-start mt-5 w-4/6'>

                <h3 className='font-semibold text-3xl '>
                  1%-10%
                </h3>

                <p className=' text-lg '>
                  sales conversion rate of creators audience, depending on the trust the creator has established around their brand
                </p>

              </div>

            </div>




            {/* item 3 */}
            <div className="flex items-center justify-center border-t-2 border-slate-300 ">

              <Image
              src='/GP-icon2.png'
              alt='Icon'
              height={200}
              width={200}
              className='h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-52 lg:w-52 duration-150'
              />

              <div className='flex flex-col justify-center items-start mt-5 w-4/6'>

                <h3 className='font-semibold text-3xl '>
                  Fast execution
                </h3>

                <p className=' text-lg '>
                  We deliver fast and effective as soon as 20 days depending on the size of the project
                </p>

              </div>

            </div>




          </div>

        </div>

      </section>


      {/* contact us */}
      <section id='contact-us' className=' py-16 px-5 max-w-7xl mx-auto  ' >

        <div className='flex items-center justify-center flex-col'>

          {/* Header */}
          <div className='felx flex-col gap-5 items-center justify-center '>
            <Image
            src='/GP-icon2.png'
            alt='GrowthPartners icon'
            height={250}
            width={250}
            className=' mx-auto '
            />

            <h2 className=' font-myfont text-3xl text-[#006039] uppercase '>
              Contact us
            </h2>

          </div>


          {/* text +btn */}
          <div className=' flex justify-center items-center my-10 flex-col gap-6 md:flex-row '>

            <p className=' text-green-500 uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl duration-150 text-center md:text-start md:w-2/3 '>
              Our services are mainly in building you an eco-system that we can manage and improve constantly, the best part is that we do not charge for that, we just take a % of sales depending on our engagemant for building you a system that we do not manage we charge <span className='text-yellow-500'>1000-2000</span> depending on the size of the project
            </p>

            <Link href='/contact' className='uppercase font-bold px-5 py-3 rounded-lg bg-[#006039] text-white hover:opacity-85 hover:bg-yellow-500 hover:text-black hover:border-black border-4 border-[#006039] duration-300 text-lg  '>
              Contact Us 
            </Link>

          </div>



        </div>

      </section>




      
    </div>
  );
}
