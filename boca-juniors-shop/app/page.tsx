import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-4xl h-[300px] mb-8">
        <Image
          src="/placeholder.svg?height=300&width=800"
          alt="Estadio de Boca Juniors"
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-2">
            ARTESANIA DE
            <br />
            BOCA JUNIORS
          </h1>
          <Link href="/productos">
            <Button className="mt-6 bg-accent hover:bg-accent/90 text-black font-bold px-8">Empezar</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
