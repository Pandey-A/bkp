import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-center mb-12">
            <Image
              src="/about.svg"
              alt="Handshake Icon"
              width={250}
              height={250}
            />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mx-20">
          <div>
            <h3 className="text-4xl font-bold text-orange-600 mb-6">What is Bappa Ka Prashad?</h3>
            <p className="text-2xl text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>

          <div className="flex justify-end mx-20 ">
            <div className="relative">
              <Image
                src="/finalbappa.svg"
                alt="Lord Ganesh Illustration"
                width={350}
                height={350}

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
