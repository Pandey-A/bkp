"use client"
import Image from "next/image"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
  <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50" style={{ fontFamily: 'Product Sans, sans-serif' }}>
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-center mb-12">
            <Image
              src="/about.svg"
              alt="Handshake Icon"
              width={250}
              height={250}
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
            />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mx-4 sm:mx-8 md:mx-12 lg:mx-20 ">
          <div className="text-center md:text-left bg-white rounded-xl p-6 ">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-4 md:mb-6" style={{ fontFamily: 'Product Sans, sans-serif' }}>
              What is Bappa Ka Prashad?
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed mb-4  " style={{ fontFamily: 'Product Sans, sans-serif' }}>
              Bappa ka Prashad is an annual coding contest organised by GDG RBU aimed at spreading the greatest Prashad knowledge. It features 6 to 7 Ganesh Chaturthi-themed problems that challenge coders of all levels. The contest blends algorithmic challenges with a festive twist rooted in Indian culture. It celebrates the spirit of learning and the joy of coding during Ganesh Chaturthi.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/finalbappa.svg"
                alt="Lord Ganesh Illustration"
                width={350}
                height={350}
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}