import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
  url: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2">{product.name}</h3>
        <p className="text-accent font-bold mb-4">$ {product.price} USD</p>
        <Link href={product.url}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">Comprar</Button>
        </Link>
      </div>
    </div>
  )
}
