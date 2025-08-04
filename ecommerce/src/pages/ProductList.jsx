import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* Header */}
      <header className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="images/5.png"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Navbar */}
        <nav className="relative z-20 px-10 py-6 flex justify-between items-center bg-[#4E342E] text-white">
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Shop<span className="text-[#D7CCC8]">Online</span>
          </h1>
          <ul className="flex gap-8 text-white font-medium text-lg">
            <li className="hover:text-[#D7CCC8] transition">
              <a href="#products">Products</a>
            </li>
            <li className="hover:text-[#D7CCC8] transition">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-[#D7CCC8] transition">
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Products Section */}
      <section id="products" className="px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#5D4037]">
          Our Products
        </h2>
        <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#FFF8F1] py-16 px-4 text-[#4E342E]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded border border-gray-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#5D4037] text-white px-6 py-3 rounded font-medium hover:bg-[#4E342E] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E2723] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default ProductList;
