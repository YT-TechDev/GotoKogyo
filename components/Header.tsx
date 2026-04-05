// components/Header.tsx
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="font-bold text-lg">後藤興業(株)</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="hover:animate-bounce hover:text-blue-300">サービス</a>
          <a href="#works" className="hover:animate-bounce hover:text-blue-300">施工実績</a>
          <a href="/About" className="hover:animate-bounce hover:text-blue-300">会社概要</a>
        </nav>
        <a href="/contact" className="bg-yellow-500 px-4 py-2 rounded text-black">
          相談
        </a>
      </div>
    </header>
  );
}