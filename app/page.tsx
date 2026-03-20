export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1000px] mx-auto mt-20 p-5">
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
      </div>   
    </div>
  );
}
