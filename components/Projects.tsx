"use client";

import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Countdown Timer",
        desc:"Tracks time remaining until an event, enhancing anticipation.",
        img:"/project1.jpg",
        tags:["Next.JS", "Node", "CSS", "Typescript"]
    },
    {
      id: 1,
      title: "Weather Widget",
      desc:" Displays real-time weather updates and forecasts.",
      img:"/project2.jpg",
      tags:["Next.JS", "Node", "CSS", "Typescript"]
  },
  {
    id: 2,
    title: "Birthday Wishes",
    desc:"Generates personalized birthday messages for users.",
    img:"/project3.jpg",
    tags:["Next.JS", "Node", "CSS", "Typescript"]
},
{
  id: 3,
  title: "Number Guessing Game",
  desc:" Engages users in guessing a randomly generated number.",
  img:"/project4.jpg",
  tags:["Next.JS", "Node", "CSS", "Typescript"]
},
{
  id: 4,
  title: "Simple Calculator Project",
  desc:"Performs basic arithmetic operations for quick calculations.",
  img:"/project5.jpg",
  tags:["Next.JS", "Node", "CSS", "Typescript"]
},
{
  id: 5,
  title: "Digital Clock Assignment",
  desc:"Displays the current time in a clear, user-friendly format.",
  img:"/project6.jpg",
  tags:["Next.JS", "Node", "CSS", "Typescript"]
},
]

const Projects = () => {
  return (
    <div id='Projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}

      </div>
      
    </div>
  )
}

export default Projects
