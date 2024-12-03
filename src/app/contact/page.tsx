"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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


const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  handle: z.string().max(30),
  select: z.string(),
  message: z.string().min(20, 'Please give us more information'),

})




export default function Contact() {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


    return (
      <div className=" max-w-6xl w-full mx-auto p-5 ">
        
        <section className="mb-10 mt-5">

        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


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


        <FormField
          control={form.control}
          name="handle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instagram Handle</FormLabel>
              <FormControl>
                <Input placeholder="Your instagram username" {...field} />
              </FormControl>
              <FormDescription>
                {/* Enter your instagram handle */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="select"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Followers</FormLabel>
              <FormControl>
              <Select 
              onValueChange={field.onChange}
              value={field.value}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select your range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20000-50000">20,000-50,000</SelectItem>
                  <SelectItem value="50000-250000">50,000-250,000</SelectItem>
                  <SelectItem value="250000-50000">250,000-500,000</SelectItem>
                  <SelectItem value="500000+">500,000+</SelectItem>
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

        <button className='uppercase font-bold px-5 py-3 rounded-lg bg-[#006039] text-white hover:opacity-85 hover:bg-yellow-500 hover:text-black hover:border-black border-4 border-[#006039] duration-300 w-full text-lg  ' type="submit">send</button>
      </form>
    </Form>

        </section>
        
      </div>
    );
  }
  