import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
           <ResumeCard
            title="National Professional Qualification of Senior Leadership (NPQSL)"
            subTitle="UCL"
            des="UCL"
          />
          <ResumeCard
            title="Post Graduate Program for Experienced Professional"
            subTitle="MIT Institute of Design"
            des="MIT Institute of Design"
          />
          <ResumeCard
            title="Master of Business Administration - MBA (Information Technology)"
            subTitle="Arihant Institute of Management and Technology, Khandwa Road, Indore"
            des = ""
          
          />
          <ResumeCard
            title="B.Ed"
            subTitle="M.B. KHALSA INSTITUTE OF EDUCATION, INDORE"
            des=""
          />
               <ResumeCard
            title="Bachelors of Computer Application"
            subTitle="Ilva commerce and science college"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Design and Technology Teacher | AI Teacher (August 2025 - Present)"
            subTitle="Ajman Academy"
            result= " Ajman Emirate (UAE)"
          />
          <ResumeCard
            title="Heads of Arts and Design | Design Coordinator (September 2024 - August 2025 )"
            subTitle="American Gulf School"
            result="Sharjah Emirate (UAE)"
          />
              <ResumeCard
            title="Heads of Department (June 2023 - May 2024 )"
            subTitle="Alphabet International School"
            result="Chennai, Tamil Nadu, India"
          />
          <ResumeCard
            title="IBPYP ICT / IBMYP DESIGN / IBMYP CS / IBDP ITGS (July 2015 - July 2023 )"
            subTitle="Choithram International School"
            result="Indore, Madhya Pradesh, India"
          />
          
            <ResumeCard
            title="Teacher (May 2011-May 2012)"
            subTitle="Bharat coaching classes"
            result="Indore, Madhya Pradesh, India "
          />
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education