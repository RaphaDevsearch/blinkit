import  {Button}  from "@/components/ui/Button";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center gap-5 px-6 bg-white border-b z-50">
      <div className="text-3xl font-bold">
        blinK<span className="text-green-600">it</span>
      </div>

      <Button label="Delivery" />

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
  );
}
