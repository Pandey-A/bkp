import Image from "next/image"

export default function Partners() {
  const partners = [
   
    { id: 1, image: "/partner1.svg", alt: "Partner 2" },

  ]

  return (
    <section id="collaborators" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl">
              <Image
                src="/Objects.svg"
                alt="Handshake Icon"
                width={80}
                height={80}
              />
            </span>
            <span className="text-orange-600"><Image
                            src="/part.svg"
                            alt="Handshake Icon"
                            width={450}
                            height={450}
                          /></span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className=" gap-8 justify-items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="text-center">
              <div className=" mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
