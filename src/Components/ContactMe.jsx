import React, {useEffect, useRef} from 'react'
import ContactMeCard from './ContactMeCard'

const ContactMe = () => {
  const container = useRef()

  const observer = new IntersectionObserver(entries=>{
    entries.forEach((entry, index)=>{
      entry.target.classList.toggle('scale-50', !entry.isIntersecting)
        entry.target.classList.toggle('text-transparent', !entry.isIntersecting)

    })
  })

  useEffect(() => {
    container.current.childNodes.forEach(node=>{
      observer.observe(node)
    })
  }, [])
  return (
    <section id="contact" ref ={container} className=" relative z-10 h-full w-full snap-start flex flex-col items-center">
        <span className=" duration-500 transition-all text-5xl font-bold mt-20 mb-10">
            Contact Me
        </span>
        <ContactMeCard/>
    </section>
  )
}

export default ContactMe