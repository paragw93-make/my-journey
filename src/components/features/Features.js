import React from 'react'
import Title from '../layout/Title';
import Card from './Card';

const Features = () => {
  return (
//     <section id ="features"className='w-full h-[800px] py-20 border-b-[1px] border-b-black'>
//    <Title title ="Trainings and certifications" des ="What I have done"/>
//    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mdl:grid-cols-3">
// <Card
//   title ="Google Certified Educator Level 2"
//   des = "Google"
// />
// <Card
//    title ="Gemini Certified Educator"
//   des = "Google"
  
// />
// <Card
//    title ="Google Certified Educator Level 1"
//   des = "Google"
  
// />
// <Card
//    title ="Building with Artificial Intelligence!"
//   des = "Saylor University"
  
// />
//    </div>
// </section>

<section
  id="features"
  className="w-full min-h-screen py-20 pb-32 border-b-[1px] border-b-black"
>
  <Title
    title="Trainings and certifications"
    des="What I have done"
  />

  {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
    <Card
      title="Google Certified Educator Level 2"
      des="Google"
    />

    <Card
      title="Gemini Certified Educator"
      des="Google"
    />

    <Card
      title="Google Certified Educator Level 1"
      des="Google"
    />

    <Card
      title="Building with Artificial Intelligence!"
      des="Saylor University"
    />
        <Card
      title="STEM.org Certified™ Master Trainer"
      des="STEM.org | Educational Research"
    />
        <Card
      title="IBDP Design technology (Cat.2)"
      des="International Baccalaureate (Year 2022)"
    />
  </div> */}
  
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">

  <Card
    title="Google Certified Educator Level 2"
    des="Google"
  />

  <Card
    title="Gemini Certified Educator"
    des="Google"
  />

  <Card
    title="Google Certified Educator Level 1"
    des="Google"
  />

  <Card
    title="Building with Artificial Intelligence!"
    des="Saylor University"
  />

  <Card
    title="STEM.org Certified™ Master Trainer"
    des="STEM.org | Educational Research"
  />

  <Card
    title="IBDP Design Technology (Cat. 2)"
    des="International Baccalaureate | 2022"
  />

  <Card
    title="Apple Teacher"
    des="Apple Education"
  />

  <Card
    title="MYP Design (Cat. 2)"
    des="International Baccalaureate | Issued Mar 2022"
  />

  <Card
    title="Making PYP Happen (Cat. 1)"
    des="International Baccalaureate | Issued Dec 2017"
  />

  <Card
    title="ChatGPT Foundations for K-12 Educators"
    des="OpenAI"
  />

  <Card
    title="UAE AI Camp 2024"
    des="Certificate of Attendance"
  />

  <Card
    title="Foundations of Human Communication"
    des="Saylor University | Issued Apr 2024"
  />

</div>

</section>

  )
}

export default Features