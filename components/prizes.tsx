import Image from "next/image"

export default function Prizes() {
  const prizes = [
    { id: 1, image: "/Prize2.png", alt: "Second Prize" },
    { id: 2, image: "/Prize.png", alt: "First Prize" },
    { id: 3, image: "/Prize3.png", alt: "Third Prize" },
  ]
  const prizes2 = [
    { id: 1, image: "/cup2.png", alt: "Second Prize" },
    { id: 2, image: "/cup1.png", alt: "First Prize" },
    { id: 3, image: "/cup3.png", alt: "Third Prize" },
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
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {prizes.map((prize) => (
            <div key={prize.id} className="text-center">
              <div className="  mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={prize.image || "/placeholder.svg"}
                  alt={prize.alt}
                  width={228}
                  height={228}
                
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{prize.alt}</h3>
            </div>
          ))}
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-14 justify-items-center">
          {prizes2.map((prize) => (
            <div key={prize.id} className="text-center">
              <div className="  mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={prize.image || "/placeholder.svg"}
                  alt={prize.alt}
                  width={128}
                  height={128}
                
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}