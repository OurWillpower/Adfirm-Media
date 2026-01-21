export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wide">
          Adfirm<span className="text-accent">Media</span>
        </span>
        <div className="space-x-6 text-sm font-medium">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
