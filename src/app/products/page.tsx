import Image from "next/image";

export default function Products() {
  const products = [
    { image: "/bouquet-purple-tulips-17145910.webp", name: "Purple Tulip Bouquet", price: 22 },
    { image: "/White Tulips.webp", name: "White Tulip Bouquet", price: 20 },
    { image: "/light pink tulip.webp", name: "Light Pink Tulips", price: 18 },
    { image: "/red-tulip.jpg", name: "Red Tulip Bouquet", price: 20 },
    { image: "/double tulip.jpg", name: "Double Tulips", price: 24 },
    { image: "/Fosteriana tulips.jpg", name: "Fosteriana Tulips", price: 23 },
    { image: "/yellow tulip.jpg", name: "Yellow Tulips", price: 19 },
    { image: "/Lily Flowered Mixed.jpg", name: "Lily Flowered Tulips", price: 25 },
    { image: "/Kingsblood.jpg", name: "Kingsblood Tulips", price: 21 },
    { image: "/Fringed tulips.jpg", name: "Fringed Tulips", price: 26 },
    { image: "/fringed tulip.jpeg", name: "Fringed Tulip Mix", price: 24 },
    { image: "/Darwin Hybrid tulips.jpg", name: "Darwin Hybrid Tulips", price: 28 }
  ];

  return (
    <div className="py-10 bg-pink-50">
      <h1 className="text-center text-3xl font-bold">
        <span className="text-black">Latest</span>{' '}
        <span className="text-pink-600">Products</span>
      </h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center px-4">
        {products.map((product, i) => (
          <div
            key={i}
            className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={320}
              height={256}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all">
                <i className="bi bi-cart-fill text-lg mr-2"></i>
                Add to Cart
              </button>
              <button className="flex items-center bg-white px-4 py-2 rounded-full hover:bg-pink-100 transition-all">
                <i className="bi bi-heart-fill text-pink-500 text-lg mr-2"></i>
                Save
              </button>
            </div>

            {/* Card content */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-semibold text-lg mb-2">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 line-through">${product.price + 5}</span>
                <span className="text-pink-500 font-bold">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
