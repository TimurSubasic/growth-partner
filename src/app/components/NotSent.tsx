import React, { forwardRef } from 'react';
import Image from 'next/image';
import { useToast } from "@/hooks/use-toast"


interface NotSentProps {
  // You can add any props here if needed
  formData: {
    name: string;
    email: string;
    handle: string;
    select: string;
    message: string;
  };
}

const NotSent = forwardRef<HTMLDivElement, NotSentProps>(({ formData }, ref) => {

  const { toast } = useToast()

  const handleCopyForm = () => {
    // Structure the content exactly like in route.ts for the email
    const textToCopy = `
      Form Submission

      Name: ${formData.name}
      Email: ${formData.email}
      Handle: ${formData.handle}
      Followers: ${formData.select}
      Message: ${formData.message}
    `;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {


      toast({
        title: "Form copied to clipboard! You can now paste it in your email.",
      })

    }).catch(err => {

      console.error('Error copying text: ', err);

      toast({
        variant: "destructive",
        title: "There was an error copying text!",
      })


    });
  };

  return (
    <div ref={ref} className="h-screen-nav flex w-full items-center justify-center hidden">
      <div className="flex items-center justify-center flex-col gap-3 sm:gap-6">
        <Image
          src="/gp2.png"
          height={250}
          width={250}
          alt="Growth Partners icon"
        />

        <p className="max-w-[65%] text-center font-myfont text-2xl text-[#006039] capitalize">
          There Was An Error Please Contact Us Directly
        </p>

        <div className="flex items-center justify-center flex-col gap-3 sm:flex-row">
          <button
            onClick={handleCopyForm}
            className="bg-white/40 w-32 h-12 flex items-center justify-center rounded-lg border-2 border-slate-400 font-semibold uppercase hover:bg-white hover:shadow-lg duration-200"
          >
            Copy Form
          </button>

          <a
            href="mailto:subasictimur@gmail.com"
            className="bg-[#006039] text-white w-32 h-12 flex items-center justify-center rounded-lg border-2 border-slate-400 font-semibold uppercase hover:bg-[#006039]/80 hover:shadow-lg duration-200"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
});

NotSent.displayName = 'NotSent';

export default NotSent;
