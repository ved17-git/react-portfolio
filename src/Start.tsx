import { BackgroundLines } from "./ui/background-lines";
import {Button} from "@nextui-org/react";


function Start() {

return (
<>
<BackgroundLines className="flex items-center justify-center w-full flex-col px-4 dark:bg-black text-center mt-[-10vh]" >
<h2 className=" bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-800 dark:to-white  md:text-4xl text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight font-title">
Ved Pandhare <br /> Full-Stack Developer.
</h2>
<p className=" font-title max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
  I am passionate about crafting innovative fullstack web application, merging creativity and functionality to deliver exceptional user experiences
</p>

<Button radius="lg" className="bg-gradient-to-b from-gray-900 to-gray-600 
 text-white shadow-lg mt-8 font-title text-xl px-8 py-6" onClick={()=>window.open('https://drive.google.com/file/d/1h-7wAP0PRoFl38GHjE3C_L-3mCguIheI/view','_blank')}>
      Resume
</Button>


</BackgroundLines>


   
     </>
  );
}

export default Start;
