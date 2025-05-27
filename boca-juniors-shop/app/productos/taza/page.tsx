import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductDetail() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-back-arrow p-2 mb-4">
        <a href="/productos" className="text-white">
          &lt;
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Taza De Cerámica Boca Juniors"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="bg-accent p-6 rounded-md">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-black">$ 6 USD</h2>
            <h1 className="text-3xl font-bold text-black mb-4">Taza De Cerámica Boca Juniors</h1>

            <div className="mb-6">
              <p className="text-black">
                <strong>Material:</strong> cerámica
              </p>
              <p className="text-black">
                <strong>Apto para micro ondas:</strong> Si
              </p>
              <p className="text-black">
                <strong>Capacidad de volumen:</strong> 300 mL
              </p>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
