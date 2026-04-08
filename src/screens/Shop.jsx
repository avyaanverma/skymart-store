import React from 'react'

const products = [
  {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 99.99,
    rating: 4.8,
    reviews: 120,
    image:
      'https://images.unsplash.com/photo-1518441988790-2dc8e8c6c6f4?auto=format&fit=crop&w=600&q=80',
    added: true,
  },
  {
    id: 2,
    title: 'Smart Watch Series 5',
    category: 'Electronics',
    price: 299.99,
    rating: 4.5,
    reviews: 85,
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80',
    added: true,
  },
  {
    id: 3,
    title: 'Comfortable Cotton T-Shirt',
    category: 'Clothing',
    price: 24.99,
    rating: 4.4,
    reviews: 200,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 4,
    title: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: 199.99,
    rating: 4.6,
    reviews: 65,
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 5,
    title: 'Stainless Steel Water Bottle',
    category: 'Home',
    price: 34.99,
    rating: 4.2,
    reviews: 150,
    image:
      'https://images.unsplash.com/photo-1526401485004-2fda9f6c0d25?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 6,
    title: 'Webcam',
    category: 'Electronics',
    price: 59.99,
    rating: 4.1,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 7,
    title: 'Plant Pot',
    category: 'Home',
    price: 19.99,
    rating: 4.3,
    reviews: 123,
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 8,
    title: 'Swim Goggles',
    category: 'Sports',
    price: 14.99,
    rating: 4.5,
    reviews: 178,
    image:
      'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 9,
    title: 'Notebook Set',
    category: 'Accessories',
    price: 12.99,
    rating: 4.1,
    reviews: 145,
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
  {
    id: 10,
    title: 'Wall Art',
    category: 'Home',
    price: 39.99,
    rating: 4.0,
    reviews: 87,
    image:
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?auto=format&fit=crop&w=600&q=80',
    added: false,
  },
]

const Shop = () => {
  return (
    <div className="min-h-screen bg-[#070707]">
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-semibold">All Products</h1>
            <p className="mt-2 text-sm text-white/50">50 products found</p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white/60">
              <i className="ri-search-line"></i>
              <input
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="Search products..."
              />
            </div>
            <select className="rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white/80 focus:outline-none">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Furniture</option>
              <option>Home</option>
            </select>
            <select className="rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-sm text-white/80 focus:outline-none">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative bg-white p-4">
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#5b5b5b]">
                    {product.category}
                  </span>
                  <div className="flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-[#f3f3f3]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-[#0f0f0f] p-5 text-white">
                  <p className="text-xs uppercase tracking-wide text-white/40">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">
                    {product.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                    <span className="flex items-center gap-0.5 text-[#f6c945]">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>({product.reviews})</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="text-xl font-semibold text-[#c8f400]">
                      ${product.price.toFixed(2)}
                    </div>
                    <button
                      type="button"
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
                        product.added
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : 'bg-volt text-[#0b0b0b]'
                      }`}
                    >
                      {product.added ? (
                        <>
                          <i className="ri-check-line"></i> Added
                        </>
                      ) : (
                        <>
                          <i className="ri-shopping-cart-2-line"></i> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Shop
