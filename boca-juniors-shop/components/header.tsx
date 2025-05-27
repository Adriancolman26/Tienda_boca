import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-primary text-white py-4 mb-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Logo Boca Juniors"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-accent uppercase text-lg">Artesanías Xeneizes</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/sobre-nosotros" className="hover:underline">
            Sobre nosotros
          </Link>
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
          <Link href="/account" className="text-white">
            <User className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
