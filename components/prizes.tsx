import Image from "next/image"

export default function Prizes() {
  const prizes = [
    { id: 1, image: "/images/prize-1.png", alt: "First Prize" },
    { id: 2, image: "/images/prize-2.png", alt: "Second Prize" },
    { id: 3, image: "/images/prize-3.png", alt: "Third Prize" },
  ]

  return (
    <section id="prize" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl"><Image
                            src="/Objects.svg"
                            alt="Handshake Icon"
                            width={80}
                            height={80}
                          /></span>
            <span className="text-orange-600"><Image
                            src="/Prizes.svg"
                            alt="Handshake Icon"
                            width={240}
                            height={240}
                          /></span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {prizes.map((prize) => (
            <div key={prize.id} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={prize.image || "/placeholder.svg"}
                  alt={prize.alt}
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
