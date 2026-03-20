export default function Footer() {
  return (
    <>
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
                    <li
                      key={item}
                      className="mb-2 hover:text-green-600 cursor-pointer"
                    >
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
                    <li
                      key={j}
                      className="mb-2 hover:text-black cursor-pointer"
                    >
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
          <p className="text-sm">© Blink Commerce Private Limited, 2016-2026</p>

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
    </>
  );
}
