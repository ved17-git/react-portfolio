import React from "react";
import { useState } from "react";
import { Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/input";
import {Avatar,} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { Globe } from "./ui/Globe";
import logo from './assets/myLogo.png'
 
import { Dock, DockIcon } from "./ui/Dock";
export type IconProps = React.HTMLAttributes<SVGElement>;

function Contact() {

  const [send, setSend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSend() {
    setSend(!send); // Toggle send state
    setIsLoading(true); // Turn on loading state
    console.log({
    name,
    email,
    message
    });
   
    // Simulate an asynchronous operation (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false); // Turn off loading after the operation
  }

  const [name,setName]=useState<string>('')
  const [email,setEmail]=useState<string>('')
  const [message,setMessage]=useState<string>('')



  return (
    <>
      <h1 className="text-center mt-[20vh] sm:mt-[15hvh] font-title text-6xl sm:text-3xl mb-10 sm:text-7 " id="contact">
      Contact
      </h1>


    <div className="flex px-[8vh] lg:px-[4vh] gap-10 lg:gap-4 mb-10 w-full md:px-[1vh] sm:flex-col  sm:pt-4 sm:mt-[-4vh]">

      <div className="w-[70%] sm:w-[100%] gap-4 space-y-10 shadow-xl border-[1px] border-zinc-300 p-10 rounded-xl dark:shadow-zinc-800 dark:border-none dark:shadow-md sm:p-3 lg:p-5">

      <div className="flex justify-center items-center ">
      <Avatar src={logo} className="w-40 h-40 text-large" />
    </div>

    <div className="w-full flex gap-10 sm:gap-4 lg:gap-6">
    <Input type="text" label="Name" placeholder="Name"  className="font-title" onChange={(e)=>setName(e.target.value)}/>
    <Input type="email" label="Email" placeholder="Email" className="font-title" onChange={(e)=>setEmail(e.target.value)} />
    </div>

    <div className="w-full">
    <Textarea  
      label="Message"
      placeholder="Message"
      className="max-w-full font-title"
      onChange={(e)=>setMessage(e.target.value)}
    />
    </div>

    <Button 
      color="primary" 
      onClick={handleSend} 
      isLoading={isLoading} // Uses the loading state
      disabled={isLoading}  // Optionally disable the button while loading
    >
      {isLoading ? "Loading..." : "Send"}
    </Button>


      </div>



<div className="sm:w-full w-[30%] grid ">

<div className="relative grid place-items-center place-content-center justify-center size-full max-w-lg overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:shadow-xl sm:h-96 dark:shadow-zinc-800 dark:border-none dark:shadow-md ">
  {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    Globe
  </span> */}
  <Globe className="" />
  <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
</div>

</div>

   </div>

<div className="relative">
      <Dock direction="middle" magnification={50} className=" dark:shadow-md dark:border-none dark:shadow-zinc-800" >
        
        
        <DockIcon className="mx-6 sm:mx-2" >        
         <svg xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://github.com/ved17-git', '_blank')} width="128" className="dark:block hidden" height="128" viewBox="0 0 64 64"><path fill="#ffffff" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/></svg>

          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://github.com/ved17-git', '_blank')}  className="dark:hidden" width="50" height="128" viewBox="0 0 64 64"><path fill="#000000" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15q0-6 3-9s-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9q3 3 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/></svg>   

        </DockIcon>

        <DockIcon className="mx-6 sm:mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new', '_blank')} width="169.79" height="128" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/></svg>
        </DockIcon>


        <DockIcon className="mx-6 sm:mx-2" >
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://leetcode.com/u/vedp1117/', '_blank')} className="dark:block hidden" width="128" height="128" viewBox="0 0 24 24"><path fill="#ffffff" d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg>

        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://leetcode.com/u/vedp1117/', '_blank')} className="dark:hidden" width="128" height="128" viewBox="0 0 32 32"><path fill="#000000" d="m21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485c0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052c.708-.713.735-1.848.047-2.536l-3.473-3.511a6.8 6.8 0 0 0-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052L4.553 13.968c-1.307 1.312-1.989 3.113-1.989 5.113c0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937c1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558H14.218c-.932 0-1.692.801-1.692 1.791c0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797s-.76-1.791-1.693-1.791"/></svg>
      </DockIcon>
        
        <DockIcon className="mx-6 sm:mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://www.linkedin.com/in/ved-pandhare-358b45282/', '_blank')} width="128" height="128" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"/><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/></svg>
        </DockIcon>
      </Dock>
    </div>

    </>
  );
}

export default Contact;
