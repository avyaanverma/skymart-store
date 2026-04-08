import React from 'react'

const stats = [
  { icon: "ri-store-2-line", value: "20K+", label: "Products" },
  { icon: "ri-user-smile-line", value: "50K+", label: "Happy Customers" },
  { icon: "ri-star-line", value: "4.9", label: "Avg. Rating" },
  { icon: "ri-truck-line", value: "99%", label: "On-time Delivery" }
];

const values = [
  {
    icon: "ri-shield-check-line",
    title: "Trust",
    text: "Every product is verified for quality and authenticity before listing."
  },
  {
    icon: "ri-flashlight-line",
    title: "Speed",
    text: "We obsess over delivery times so your orders arrive when promised."
  },
  {
    icon: "ri-hand-heart-line",
    title: "Community",
    text: "Built around real customer feedback, not just business metrics."
  },
  {
    icon: "ri-award-line",
    title: "Quality",
    text: "We curate the best — no filler, no junk, just great products."
  }
];

const team = [
  { name: "Isha Rani", role: "Founder", badge: "I", tone: "bg-[#c8f400] text-[#0b0b0b]" },
  { name: "Shriya Rani", role: "Co-Founder", badge: "S", tone: "bg-[#4f8dff] text-white" },
  { name: "Avyaan Verma", role: "Chief Technical Officer", badge: "O", tone: "bg-[#a85bff] text-white" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <main className="mx-auto w-full max-w-6xl space-y-10 px-6 py-10">
        <section className="space-y-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c8f400] text-[#0b0b0b]">
            <i className="ri-flashlight-line text-2xl"></i>
          </div>
          <h1 className="text-[clamp(2.4rem,4vw,3.6rem)] font-semibold">
            About <span className="text-[#c8f400]">SkyMart</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/60">
            SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#121212] text-[#c8f400]">
                <i className={`${item.icon} text-lg`}></i>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
              <p className="text-xs text-white/60">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="rounded-[32px] border border-white/10 bg-[#0d0d0d] p-8">
          <h2 className="text-xl font-semibold">Our Story</h2>
          <div className="mt-4 space-y-4 text-sm text-white/60">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences.
              We asked ourselves: what if shopping online was actually enjoyable?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion,
              jewelry, and everyday essentials — all at prices that don&apos;t require a second mortgage.
            </p>
            <p>
              We&apos;re still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-center text-xl font-semibold">What We Stand For</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#121212] text-[#c8f400]">
                  <i className={`${item.icon} text-lg`}></i>
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-center text-xl font-semibold">Meet the Team</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold ${member.tone}`}>
                  {member.badge}
                </div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[#c8f400]/20 bg-[#0c0c0c] px-6 py-10 text-center">
          <h3 className="text-xl font-semibold">Ready to shop?</h3>
          <p className="mt-2 text-sm text-white/60">Explore thousands of products at unbeatable prices.</p>
          <button
            type="button"
            className="mt-6 rounded-full bg-[#c8f400] px-8 py-3 text-sm font-semibold text-[#0b0b0b]"
          >
            Browse Products <i className="ri-arrow-right-line"></i>
          </button>
        </section>
      </main>

      <footer className="mt-12 border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 text-center text-xs text-white/50">
          <span className="text-sm font-semibold text-[#c8f400]">SkyMart</span>
          <p>© 2025 SkyMart • Built with React + Redux + TanStack Query</p>
        </div>
      </footer>
    </div>
  )
}

export default About
