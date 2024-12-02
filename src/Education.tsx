import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";


function Education() {
  const dummyContent = [
    {
      name: "Full-Stack Developer",
      degree:"YCS",
      location:"Nagpur, Maharashtra",
      description: (
        <>
          <p> 
            Designed and implemented RESTful APIs to enhance communication between front-end and back-end
            systems
            Developed secure and scalable backend services using Node.js and Express, ensuring efficient and reliable server-side logic
            Collaborated with front-end developers and product teams to design API architecture
            Optimized SQL database queries using Prisma ORM, for quick query response times. 
        
            </p>
        </>
      ),
      Timeline: "Auguest 2024 - November 2024",
    },
    {
        name: "Computer Science and Engineering",
        degree:" Ramdeobaba College of Engineering and Management",
        location:"Nagpur, Maharashtra",
        description: (
          <>
            <p>Pursuing a degree in Computer Science and Engineering, focusing on software development, algorithms, and full-stack projects.</p>
          </>
        ),
        Timeline: "May 2022 - May 2026",
      },
      {
        name: "Front-End Developer",
        degree:"Freelance",
        location:"Remote",
        description: (
          <>
            <p>As a freelance front-end developer, I specialize in creating dynamic and visually appealing landing pages. My work involves using modern technologies to deliver responsive and user-friendly designs.</p>
          </>
        ),
        Timeline: "Ongoing",
      },
  ];

  return (
    <>
     <h1 className="text-center mt-[10vh]   font-title text-6xl mb-10 md:text-4xl sm:text-3xl" id="education">Education</h1>
      <TracingBeam className="px-6 ">
        <div className="max-w-4xl lg:max-w-2xl sm:max-w-xl mx-auto antialiased pt-4 sm:mt-[-4vh] relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
                
                <div className="border-[1px] border-zinc-600 dark:border-gray-900 shadow-xl p-6 px-10 rounded-xl font-title">
              <h2 className="text-3xl font-title font-semibold sm:text-2xl">
                {item.degree}
              </h2>
              <h1 className="text-xl font-title sm:text-xl">{item.name}</h1>
              <h1 className="font-title">{item.location}</h1>

              <p className={twMerge("text-xl mb-4")}></p>

              <div className="text-sm prose prose-sm dark:prose-invert font-title text-gray-400">
                {item.description}
              </div>
              <h1 className="mt-6 font-title">{item.Timeline}</h1>
              </div>


            </div>
          ))}
        </div>
      </TracingBeam>
        

    </>
  );
}

export default Education;
