export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-16 flex items-center gap-5 px-6 bg-white border-b z-50">
        <div className="text-3xl font-bold">
          blinK<span className="text-green-600">it</span>
        </div>

        <button className="px-4 py-2 rounded bg-gray-100">Delivery</button>

        <div className="flex-1 flex items-center bg-gray-100 px-3 py-2 rounded">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search products"
            className="ml-2 w-full bg-transparent outline-none"
          />
        </div>

        <button className="px-4 py-2 rounded bg-gray-100">Account</button>
        <button className="px-4 py-2 rounded bg-green-600 text-white">
          Cart
        </button>
      </header>

      {/* MAIN */}
      <main className="max-w-[1000px] mx-auto mt-20 p-5">
        {/* HERO */}
        <section className="h-[220px] bg-gray-200 rounded-xl m-5 cursor-pointer" />

        {/* CATEGORIES */}
        <section className="grid grid-cols-3 gap-5 m-5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-[160px] bg-gray-200 rounded-xl cursor-pointer"
            />
          ))}
        </section>

        {/* PRODUCT GRID */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-4 m-5">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="h-[110px] bg-gray-100 rounded-lg"
            />
          ))}
        </section>

        {/* SLIDER SECTIONS */}
        {[1, 2, 3].map((section) => (
          <section key={section} className="m-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Label</h2>
              <a className="text-green-600 text-sm cursor-pointer">
                See All
              </a>
            </div>

            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[160px] h-[220px] bg-gray-100 rounded-xl"
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* FOOTER */}
      <footer className="max-w-[1000px] mx-auto p-5 border-t">
        {/* TOP */}
        <div className="flex justify-between gap-10 mb-8">
          {/* LINKS */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Useful Links</h3>

            <div className="grid grid-cols-3 gap-5">
              {[
                ["About", "Careers", "Contact"],
                ["Privacy Policy", "Terms", "Security"],
                ["Help", "FAQ", "Support"],
              ].map((col, i) => (
                <ul key={i} className="text-sm text-gray-600">
                  {col.map((item) => (
                    <li key={item} className="mb-2 hover:text-green-600 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold">Categories</h3>
              <span className="text-green-600 text-sm cursor-pointer">
                see all
              </span>
            </div>

            <div className="grid grid-cols-3 gap-10 text-sm text-gray-600">
              {[...Array(3)].map((_, i) => (
                <ul key={i}>
                  {[...Array(10)].map((_, j) => (
                    <li key={j} className="mb-2 hover:text-black cursor-pointer">
                      Category
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex justify-between items-center border-y py-5 mb-5">
          <p className="text-sm">
            © Blink Commerce Private Limited, 2016-2026
          </p>

          <div className="flex items-center gap-3">
            <span>Download App</span>
            <button className="px-3 py-1 border rounded">App Store</button>
            <button className="px-3 py-1 border rounded">Play Store</button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-xs text-gray-500 leading-relaxed">
          “Blinkit” is owned & managed by Blink Commerce Private Limited and is
          not related to GROFFR.COM operated by Redstone Consultancy Services
          Private Limited.
        </div>
      </footer>
    </div>
  );
}
