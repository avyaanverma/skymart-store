import React from 'react'

const stats = [
  {
    icon: "ri-shopping-bag-3-line",
    value: "0",
    label: "Cart Items",
    hint: "In your bag",
    tone: "bg-[#1a1a1a] text-[#c8f400]"
  },
  {
    icon: "ri-line-chart-line",
    value: "$0.00",
    label: "Cart Value",
    hint: "Ready to checkout",
    tone: "bg-[#151a1f] text-[#5fd0ff]"
  },
  {
    icon: "ri-star-line",
    value: "5",
    label: "Top Products",
    hint: "Highly rated",
    tone: "bg-[#1c1a12] text-[#ffcc57]"
  },
  {
    icon: "ri-price-tag-3-line",
    value: "6",
    label: "Categories",
    hint: "To explore",
    tone: "bg-[#1b1320] text-[#b17cff]"
  }
];

const categories = [
  { title: "Electronics", items: "120+ items", icon: "ri-computer-line" },
  { title: "Fashion", items: "80+ items", icon: "ri-t-shirt-line" },
  { title: "Home & Living", items: "45+ items", icon: "ri-home-4-line" },
  { title: "Accessories", items: "60+ items", icon: "ri-handbag-line" }
];

const topRated = [
  { price: "$599.99", label: "Premium Speaker" },
  { price: "$199.99", label: "Desk Setup" },
  { price: "$349.99", label: "4K Monitor" },
  { price: "$49.99", label: "Smart Lamp" },
  { price: "$149.99", label: "Keyboard Pro" }
];

const newArrivals = [
  { price: "$99.99", label: "Noise Cancel" },
  { price: "$299.99", label: "Smart Home Kit" },
  { price: "$24.99", label: "Graphic Tee" },
  { price: "$199.99", label: "Minimal Desk" },
  { price: "$34.99", label: "Travel Bottle" }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-volt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap text-ink fill-ink"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Sky<span className="text-[#c8f400]">Mart</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <span className="font-semibold text-[#c8f400]">Home</span>
            <span className="hover:text-white">Shop</span>
            <span className="hover:text-white">About</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8f400] text-xs font-semibold text-[#0b0b0b]">
                A
              </div>
              <span className="text-sm text-white/80">avyaan</span>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white">
              <i className="ri-shopping-cart-2-line text-lg"></i>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-white">
              <i className="ri-logout-circle-r-line text-lg"></i>
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-10 px-6 py-8">
        <section className="rounded-[32px] border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] p-8">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.7fr]">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c8f400]">
                  Good Morning
                </div>
                <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.05]">
                  Welcome back,
                  <br />
                  <span className="text-[#c8f400]">avyaan!</span>
                </h1>
                <p className="max-w-xl text-sm text-white/60">
                  Discover today&apos;s picks — hand-curated products across electronics, fashion, and more.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 rounded-full bg-[#c8f400] px-6 py-3 text-sm font-semibold text-[#0b0b0b]">
                    Shop Now <i className="ri-arrow-right-line"></i>
                  </button>
                  <button className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:text-white">
                    View All Products
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="w-full max-w-[180px] rounded-3xl border border-[#c8f400]/30 bg-[#111708] px-6 py-5 text-center">
                  <p className="text-3xl font-semibold text-[#c8f400]">20+</p>
                  <p className="text-xs text-white/60">Products Available</p>
                </div>
                <div className="w-full max-w-[180px] rounded-3xl border border-white/20 bg-[#0f0f0f] px-6 py-5 text-center">
                  <p className="text-2xl font-semibold text-white">Free</p>
                  <p className="text-xs text-white/60">Delivery on ₹999+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.tone}`}>
                <i className={`${item.icon} text-lg`}></i>
              </div>
              <div>
                <p className="text-lg font-semibold">{item.value}</p>
                <p className="text-xs text-white/60">{item.label}</p>
                <p className="text-xs text-white/40">{item.hint}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shop by Category</h2>
            <button className="text-sm font-semibold text-[#c8f400] hover:text-[#d7ff2f]">
              View All <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#121212] text-[#c8f400]">
                  <i className={`${cat.icon} text-lg`}></i>
                </div>
                <h3 className="text-base font-semibold">{cat.title}</h3>
                <p className="text-xs text-white/60">{cat.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white p-6 text-[#0b0b0b] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i className="ri-star-s-fill text-[#f6c54b]"></i>
                <h3 className="text-base font-semibold">Top Rated</h3>
              </div>
              <button className="text-xs font-semibold text-[#7f9f00]">
                See all <i className="ri-arrow-right-line"></i>
              </button>
            </div>
            <div className="mt-5 space-y-3">
              {topRated.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-[#e9ecf1] bg-white px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#f1f3f6]"></div>
                    <div>
                      <p className="text-sm font-semibold text-[#94b200]">{item.price}</p>
                      <p className="text-xs text-[#8a8f98]">{item.label}</p>
                    </div>
                  </div>
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3f8d7] text-[#94b200]">
                    <i className="ri-shopping-cart-2-line"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white p-6 text-[#0b0b0b] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <i className="ri-flashlight-fill text-[#c8f400]"></i>
                <h3 className="text-base font-semibold">New Arrivals</h3>
              </div>
              <button className="text-xs font-semibold text-[#7f9f00]">
                See all <i className="ri-arrow-right-line"></i>
              </button>
            </div>
            <div className="mt-5 space-y-3">
              {newArrivals.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-[#e9ecf1] bg-white px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#f1f3f6]"></div>
                    <div>
                      <p className="text-sm font-semibold text-[#94b200]">{item.price}</p>
                      <p className="text-xs text-[#8a8f98]">{item.label}</p>
                    </div>
                  </div>
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3f8d7] text-[#94b200]">
                    <i className="ri-shopping-cart-2-line"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#0c0c0c] px-6 py-5">
            <div className="mb-2 flex items-center gap-3">
              <i className="ri-flashlight-line text-xl text-[#c8f400]"></i>
              <h4 className="text-sm font-semibold">Fast Delivery</h4>
            </div>
            <p className="text-xs text-white/55">Same-day on select items</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0c0c0c] px-6 py-5">
            <div className="mb-2 flex items-center gap-3">
              <i className="ri-shield-check-line text-xl text-[#61a6ff]"></i>
              <h4 className="text-sm font-semibold">Secure Payments</h4>
            </div>
            <p className="text-xs text-white/55">100% encrypted checkout</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0c0c0c] px-6 py-5">
            <div className="mb-2 flex items-center gap-3">
              <i className="ri-price-tag-3-line text-xl text-[#4ee38e]"></i>
              <h4 className="text-sm font-semibold">Best Prices</h4>
            </div>
            <p className="text-xs text-white/55">Price-match guarantee</p>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-center text-xs text-white/50">
          <span className="text-sm font-semibold text-[#c8f400]">SkyMart</span>
          <p> <a href='https://www.github.com/avyaanverma'>©avyaanverma</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Home
