// import React from 'react'
// import Title from '../layout/Title'
// import {ai,techy, one,tech,todo,survey } from "../../assets/index";
// import ProjectCard from './ProjectCard'

// const Projects = () => {
//   return (
//     <section id = "projects" className="w-full py-20 border-b-[1px] border-b-black">
//        <div className="flex justify-center items-center text-center sm:mt-96 xl:mt-20 lgl:mt-20 mdl:mt-5 xs:mt-96"> 
//        <Title
//             title ="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
//             des = "My Projects"
//         />
//         </div>
   

//         {/* <div className ="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 sm:grid-cols-1 gap-10">
//             <ProjectCard
//                 title ="Fusion 360 Tutorials"
//                 des = "3D modelling Tutorials Playlist"
//                 src = {one}
//             />
//             <ProjectCard
//                 title ="Teacher's Resource Videos"
//                 des = "Videos for Teachers to "
//                 src = {ai}
//             />
//             <ProjectCard
//                 title ="TECHYSTAR WEBSITE"
//                 des = "A website using HTML5,CSS3 and ReactJs"
//                 src = {techy}
//             />
//             <ProjectCard
//                 title ="TECH FOREST,INDORE CLONE WEBSITE"
//                 des = "IT Training and consulting website using HTML5,CSS3 and Bootstrap "
//                 src ={tech}
//             />
//             <ProjectCard
//                 title ="TO DO LIST"
//                 des = "To do list using HTML5,CSS3, ReactJs, Bootstrap"
//                 src ={todo}
//             />
//             <ProjectCard
//                  title ="Survey Form"
//                 des = "Survey form using HTML5,CSS3,Bootstrap and JavaScript"
//                 src ={survey} 
//             />
//         </div> */}


//     </section>
//   )
// }

// export default Projects



import React from "react";
import Title from "../layout/Title";
import { fusion, teaching, printables } from "../../assets";

const myPlatforms = [
  {
    title: "FUSION 360 – LEARN, DESIGN & CREATE",
    category: "3D Design & CAD Tutorials",
    description:
      "Explore my Fusion 360 tutorial playlist featuring step-by-step modelling guides, practical design projects and CAD techniques.",
    image: fusion,
    link: "https://www.youtube.com/watch?v=MZrgpDBlD8c&list=PLeqoW7Je5rAldY757vW5y4qpoz63cI8LO",
    button: "EXPLORE TUTORIALS",
  },
  {
    title: "TEACHING BEYOND THE CLASSROOM",
    category: "Education & Professional Learning",
    description:
      "Discover videos on teaching practices, educational technology, AI in education, classroom innovation and professional learning.",
    image: teaching,
    link: "https://www.youtube.com/watch?v=tDJfxI4luf8&list=PLeqoW7Je5rAnf1Pd6bwQTK4-SLNee3RAi",
    button: "WATCH VIDEOS",
  },
  {
    title: "THE 3D DESIGN COLLECTION",
    category: "3D Printing & Creative Design",
    description:
      "Browse my collection of 3D models, printable designs and creative experiments. Explore my designs and get inspired.",
    image: printables,
    link: "https://www.printables.com/@paragwadhwan_1425563",
    button: "EXPLORE 3D MODELS",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="FROM DIGITAL IDEAS TO REAL-WORLD CREATIONS"
          des="Explore My Creative Work"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {myPlatforms.map((item, index) => (
          <div
            key={index}
            className="bg-[#202327] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
          >
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="mt-6 flex flex-col flex-grow">
              <p className="text-xs text-designColor mb-2">
                {item.category}
              </p>

              <h2 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h2>

              <p className="text-sm text-gray-300 leading-6 flex-grow">
                {item.description}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-designColor font-semibold text-sm hover:underline"
              >
                {item.button} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
