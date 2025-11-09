import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="bg-pink-50 py-16 flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image on left */}
          <div className="flex justify-center">
            <Image
              src="/images (5).jpg"
              alt="Pink tulip bouquet"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg w-full md:w-4/5 max-h-[60vh] object-contain transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* Text on right */}
          <div className="space-y-5">
            <h2 className="text-4xl font-bold text-gray-800">About Us</h2>

            <h3 className="text-xl font-semibold text-pink-500">
              The Beauty of Nature in Every Bloom
            </h3>

            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold text-pink-600">Fresh Flowers</span>, we believe every bloom tells a story. 
              Our journey began with a love for nature’s beauty and the joy it brings to people’s lives. 
              Each bouquet is handpicked with care, blending color, fragrance, and meaning to create moments of happiness.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We work with local growers and sustainable farms to ensure every flower you receive 
              is fresh, eco-friendly, and full of life. From our garden to your heart — 
              spreading love, one petal at a time.
            </p>

            <button className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition-all">
              Learn More
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
