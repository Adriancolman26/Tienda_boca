import ProductCard from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Pulsera color amarillo y azul",
    price: 3,
    image: "/placeholder.svg?height=200&width=200",
    url: "/productos/pulsera",
  },
  {
    id: 2,
    name: "Taza De Cerámica Boca Juniors",
    price: 6,
    image: "/placeholder.svg?height=200&width=200",
    url: "/productos/taza",
  },
  {
    id: 3,
    name: "Llavero Boca Juniors Futbol Jr",
    price: 4,
    image: "/placeholder.svg?height=200&width=200",
    url: "/productos/llavero",
  },
]

export default function Productos() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-back-arrow p-2 mb-4">
        <a href="/" className="text-white">
          &lt;
        </a>
      </div>
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
