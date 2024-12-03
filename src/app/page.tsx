
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
      <section id='about-us-old' className="text-[#006039] py-16 px-5 max-w-7xl mx-auto hidden ">

        <h1 className="text-center font-myfont uppercase text-4xl mt-12 lg:text-5xl duration-150 ">
          about us
        </h1>

        <p className=" font-bold text-center my-8 uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl duration-150 ">
          While others are stuck in the talk, we focus on delivering real results, we are a dedicated team of marketers, sales experts, editors and graphic designers specializing in building high-converting funnels and driving conversions across your digital platforms. From concept to execution, we craft tailored strategies that don&apos;t just attract attention but transform visitors into loyal customers. If you&apos;re ready to stop settling for average and start maximazing your digital impact, we&apos;re here to take your business to the next level
        </p>

      </section>


      {/* why us */}
      <section id='why-us-old' className="bg-[#006039] w-full min-h-screen text-white p-12 hidden ">

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



      <section id='why-us' className=' text-white -z-10 relative '>

        <h2 className=' font-myfont text-3xl text-center uppercase py-10 text-[#006039] lg:hidden '>
          why us?
        </h2>

        {/* flexbox for 2 sections */}
        <div className='flex w-full flex-col lg:flex-row-reverse gap-6 max-w-7xll mx-auto lg:gap-0 '>


          <section id="off-white" className='off-white w-full flex flex-col gap-6 items-center justify-center p-5 pb-20 lg:pt-44 lg:relative xl:pr-36 duration-300 '>

            <h2 className='font-myfont text-3xl absolute top-16 left-2 text-[#006039] hidden lg:block'>
              US?
            </h2>

            <div className='uppercase text-[#006039] text-xl text-center font-bold lg:text-start '>
            THE FOCUS IS ON DELIVERING REAL RESULTS TO OUR CLIENTS, WE ARE A DEDICATED TEAM OF MARKETERS, SALES EXPERTS, COPYWRITERS, WEB-DEVELOPERS AND GRAPHI DESIGNERS SPECIALIZING IN BUILDING HIGH- CONVERTING FUNNELS AND DRIVING CONVERSIONS ACROSS YOUR DIGITAL PLATFORMS.
            </div>

            <Image
            src={'/GP-icon2.png'}
            alt='GrowthPartners icon'
            height={200}
            width={200}
            className='mx-auto'

            />

            <div className='uppercase text-[#006039] text-xl text-center font-bold lg:text-start '>
             FROM CONCEPT TO EXECUTION, WE CRAFT TAILORED STRATEGIES THAT DON'T JUST ATTRACT ATTENTION BUT TRANSFORM VISITORS INTO LOYAL CUSTOMERS. IF YOU'RE READY TO STOP SETTLING FOR AVERAGE AND START MAXIMAZING YOUR DIGITAL IMPACT, WE'RE HERE TO TAKE YOUR CONTENT CREATING BUSINESS TO THE NEXT LEVEL.
            </div>



          </section>



          <section id="green" className=' w-full bg-[#006039] flex flex-col gap-6 items-center justify-center p-5 pb-20 lg:pt-44 lg:relative xl:pl-36 duration-300 '>

            <h2 className='font-myfont text-3xl absolute top-16 right-2 text-white hidden lg:block'>
              WHY
            </h2>


            
            {/* item 1 */}
            <div className='flex items-start justify-center gap-4'>

              <Image
              src='/icon-1.png'
              alt='Fast Icon'
              height={200}
              width={200}
              className='h-28 w-28 sm:h-36 sm:w-36 duration-150'
              />

              <div className='text-start'>

                <h3 className='font-bold text-xl mb-2 '>
                  FAST EXECUTION
                </h3>

                <p className='text-lg'>
                Our streamlined process ensures fast and effective delivery, completing projects in as little as 20 days tailored to the size and complexity of your needs.
                </p>

              </div>

            </div>

            {/* item 2 */}
            <div className='flex items-start justify-center gap-4'>

              <Image
              src='/icon-2.png'
              alt='Fast Icon'
              height={200}
              width={200}
              className='h-28 w-28 sm:h-36 sm:w-36 duration-150'
              />

              <div className='text-start'>

                <h3 className='font-bold text-xl mb-2'>
                  SUSTAINABLE
                </h3>

                <p className='text-lg'>
                Our product is designed to deliver lasting impact. It continues to convert and provide value long after our involvement, requiring no ongoing dependency on us.
                </p>

              </div>

            </div>

            {/* item 3 */}
            <div className='flex items-start justify-center gap-4'>

              <Image
              src='/icon-3.png'
              alt='Fast Icon'
              height={200}
              width={200}
              className='h-28 w-28 sm:h-36 sm:w-36 duration-150'
              />

              <div className='text-start'>

                <h3 className='font-bold text-xl mb-2'>
                  FOSTERING COMMUNITY
                </h3>

                <p className='text-lg'>
                  At the heart of what we do is fostering community. We bring people together to create a sense of belonging, where collaboration, support, and shared goals drive collective growth. By cultivating meaningful connections, we empower individuals to thrive within a united and engaging environment, ensuring lasting relationships with your followers and shared success.
                </p>

              </div>

            </div>

          </section>







        </div>

      </section>





      {/* contact us */}
      <section id='contact-us' className='off-white pb-16 pt-8 px-5 max-w-7xl mx-auto  ' >

        <div className='flex items-center justify-center flex-col'>

          {/* Header */}
          <div className='felx flex-col gap-5 items-center justify-center '>
            <Image
            src='/GP-icon2.png'
            alt='GrowthPartners icon'
            height={280}
            width={280}
            className=' mx-auto '
            />

            <h2 className=' font-myfont text-2xl lg:text-3xl text-[#006039] uppercase text-center '>
              Contact us
            </h2>

          </div>


          {/* text +btn */}
          <div className=' flex justify-center items-center my-10 flex-col gap-6 md:flex-row '>

            <p className=' text-[#298e65] uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl duration-150 text-center md:text-start md:w-2/3 '>
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
