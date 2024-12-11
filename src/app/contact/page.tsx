"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useRef, useState } from "react" // Import useState and useEffect

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Loading from "../components/Loading"
import Sent from "../components/Sent"
import NotSent from "../components/NotSent"

const formSchema = z.object({
  name: z.string().min( 1, 'Required'),
  email: z.string().min( 1, 'Required').email(),
  handle: z.string().min( 1, 'Required').max(30),
  select: z.string().min( 1, 'Required'),
  message: z.string().min(20, 'Please give us more information'),
})

export default function Contact() {
  const [isClient, setIsClient] = useState(false) // Add state to track client-side rendering
  const formRef = useRef<HTMLDivElement>(null); // Define the ref
  const loadingRef = useRef<HTMLDivElement>(null);
  const sentRef = useRef<HTMLDivElement>(null)
  const notSentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true) // Set isClient to true after the component mounts
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      handle: '',
      select: '',
      message: '',
    },
  })

  
  const myForm = formRef.current;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (myForm) {
      myForm.classList.add('hidden')
      loadingRef.current?.classList.remove('hidden')
    }

    try {
      // Send the form data to the API to send an email
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Send form data
      });

      const result = await response.json();
      
      if (result.success) {
        
        // SUCCESS

        loadingRef.current?.classList.add('hidden')

        sentRef.current?.classList.remove('hidden')

      } else {
        console.error(result.error);
        alert(result.error);

        loadingRef.current?.classList.add('hidden')

        notSentRef.current?.classList.remove('hidden')
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error);

      loadingRef.current?.classList.add('hidden')

      notSentRef.current?.classList.remove('hidden')
    }
  }

  if (!isClient) {
    return null; // Avoid rendering anything before the component mounts
  }

  return (
    <div className="max-w-6xl w-full mx-auto p-5 ">
      <section className="mb-10 mt-5" ref={formRef} >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    {/* Enter your name */}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    {/* Enter your email */}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Instagram Handle Field */}
            <FormField
              control={form.control}
              name="handle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Handle</FormLabel>
                  <FormControl>
                    <Input placeholder="@username" {...field} />
                  </FormControl>
                  <FormDescription>
                    {/* Enter your instagram handle */}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Followers Select */}
            <FormField
              control={form.control}
              name="select"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Followers</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20,000-50,000">20,000-50,000</SelectItem>
                        <SelectItem value="50,000-250,000">50,000-250,000</SelectItem>
                        <SelectItem value="250,000-500,000">250,000-500,000</SelectItem>
                        <SelectItem value="500,000+">500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    {/* Enter your followers */}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us what you want to improve" {...field} />
                  </FormControl>
                  <FormDescription>
                    {/* Enter your message */}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              className="uppercase font-bold px-5 py-3 rounded-lg bg-[#006039] text-white hover:opacity-85 hover:bg-yellow-500 hover:text-black hover:border-black border-4 border-[#006039] duration-300 w-full text-lg"
              type="submit"
            >
              Send
            </button>
          </form>
        </Form>
      </section>



       <Loading ref={loadingRef} />

       <Sent ref={sentRef} />

       <NotSent 
       ref={notSentRef}

       formData={{
        name: form.getValues().name,
        email: form.getValues().email,
        handle: form.getValues().handle,
        select: form.getValues().select,
        message: form.getValues().message,
      }}
      
       />

    </div>
  );
}
