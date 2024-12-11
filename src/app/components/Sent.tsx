import React, { forwardRef } from 'react'
import  Image  from 'next/image';

const Sent = forwardRef<HTMLDivElement, object> ( (props, ref) => {
  return (
    <div ref={ref} className="h-screen-nav flex w-full items-center justify-center hidden">

        <div className="flex items-center justify-center flex-col gap-6">
            <Image
            src="/gp2.png"
            height={250}
            width={250}
            alt="Growth Partners icon"
            />

            <p className=' max-w-[65%] text-center font-myfont text-2xl text-[#006039] '>
                Your Message Was Sent Successfully
            </p>

        </div>
        
      
    </div>
  );
});

Sent.displayName = 'Sent'

export default Sent
