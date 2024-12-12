
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  
  return (
    <div className="w-full" id='home-page'>
      

      {/* hero */}
      <section id="hero" className="h-screen-nav w-full  ">

        <div className="w-full h-full flex items-center justify-center bg-black/25">

            <p className=" uppercase text-white text-3xl text-center max-w-6xl sm:text-4xl md:text-5xl lg:text-6xl p-5 rounded-lg font-myfont space tracking-wide duration-150 ">
              <strong>&quot;</strong>  Digital creators should focus on one thing, creating content, we just do the boring stuff! <strong>&quot;</strong>
            </p>
            
        </div>

        

      </section>



      <section id='why-us' className=' text-white -z-10 relative '>

        <h2 className=' font-myfont text-3xl text-center uppercase py-10 text-[#006039] lg:hidden '>
          why us?
        </h2>

        {/* flexbox for 2 sections */}
        <div className='flex w-full flex-col lg:flex-row-reverse gap-6 max-w-7xll mx-auto lg:gap-0 '>


          <section id="" className=' w-full flex flex-col gap-0 items-center justify-center p-5 pb-20 lg:pt-44 lg:relative xl:pr-10 2xl:pr-24  duration-300 '>

            <h2 className='font-myfont text-3xl absolute top-16 left-2 text-[#006039] hidden lg:block'>
              US?
            </h2>

            <div className='uppercase text-[#006039] text-xl text-center font-bold lg:text-start '>
              THE FOCUS IS ON DELIVERING REAL RESULTS TO OUR CLIENTS, WE ARE A DEDICATED TEAM OF MARKETERS, SALES EXPERTS, COPYWRITERS, WEB-DEVELOPERS AND GRAPHI DESIGNERS SPECIALIZING IN BUILDING HIGH- CONVERTING FUNNELS AND DRIVING CONVERSIONS ACROSS YOUR DIGITAL PLATFORMS.
            </div>

            <Image
            src={'/GP-icon2.png'}
            alt='GrowthPartners icon'
            height={300}
            width={300}
            className='mx-auto'

            />

            <div className='uppercase text-[#006039] text-xl text-center font-bold lg:text-start '>
             FROM CONCEPT TO EXECUTION, WE CRAFT TAILORED STRATEGIES THAT DON'T JUST ATTRACT ATTENTION BUT TRANSFORM VISITORS INTO LOYAL CUSTOMERS. IF YOU'RE READY TO STOP SETTLING FOR AVERAGE AND START MAXIMAZING YOUR DIGITAL IMPACT, WE'RE HERE TO TAKE YOUR CONTENT CREATING BUSINESS TO THE NEXT LEVEL.
            </div>



          </section>



          <section id="green" className=' w-full bg-[#006039] flex flex-col gap-6 items-center justify-center p-5 pb-20 lg:pt-44 lg:relative xl:pl-10 2xl:pl-24  duration-300 '>

            <h2 className='font-myfont text-3xl absolute top-16 right-2 text-white hidden lg:block'>
              WHY
            </h2>


            
            {/* item 1 */}
            <div className='flex items-start justify-center gap-4'>

              <video 
                src="/speed.webm" 
                autoPlay 
                loop 
                muted 
                playsInline 
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

              <video 
                src="/infinity.webm" 
                autoPlay 
                loop 
                muted 
                playsInline 
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

              <video 
                src="/hands.webm" 
                autoPlay 
                loop 
                muted 
                playsInline 
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





      {/* FAQ */}
      <section id='FAQ' className=' pb-16 pt-8 px-5 max-w-5xl mx-auto  ' >

        <div className='flex items-center justify-center flex-col'>

          {/* Header */}
          <div className='felx flex-col gap-5 items-center justify-center '>
            

            <h2 className=' font-myfont text-2xl lg:text-3xl text-[#006039] uppercase text-center mt-8 '>
              frequently asked questions
            </h2>

          </div>


          {/* FAQs */}
          <div className='w-full'>
          <Accordion type="single" collapsible>

            <AccordionItem value="item-1">
              <AccordionTrigger>What sets you apart from other agencies?</AccordionTrigger>
              <AccordionContent>
              While others may focus on diverse fields, we specialize in helping content creators succeed. We prioritize execution and deliver real, measurable results. Our team's expertise in marketing, sales, design, and editing enables us to craft impactful, end- to-end solutions tailored specifically for your online business and services, with a strong emphasis on community creation and engagement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How much do your services cost?</AccordionTrigger>
              <AccordionContent>
              Pricing depends on the scope and complexity of the project We provide transparent quotes after assessing your specific needs during our consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer support after the project is completed?</AccordionTrigger>
              <AccordionContent>
              Yes, we provide ongoing support and maintenance services to ensure the long-term success of your digital platform Additionally, if you prefer a "key-to-the-house" type of deal, where everything is set up and ready for you to manage independently, we can accommodate that as well Can you help with rebranding or updating existing platforms Yes, we can revamp and optimize existing digital platforms to improve performance and drive higher conversions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
              <AccordionContent>
              Timelines vary based on the complexity of your project, but we typically begin delivering noticeable results within 20-30 days. We provide regular updates and reports to keep you informed every step of the way.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What does "fostering community" mean in your services?</AccordionTrigger>
              <AccordionContent>
              Fostering community means creating a space where individuals feel connected, supported, and engaged. We help build a meaningful connection between you and your followers-one they cherish and respect-turning casual interactions into loyal and lasting relationships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What is your ideal client?</AccordionTrigger>
              <AccordionContent>
              Our ideal client is an educational content creator looking to expand their online presence, build a thriving community, and maximize their digital impact. We work best with creators who are passionate about delivering value to their audience and are ready to elevate their content and engagement strategies.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          </div>


        


        </div>

      </section>




      
    </div>
  );
}
