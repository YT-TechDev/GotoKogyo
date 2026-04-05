import Link from "next/link"

export default function ContactHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href={'/'}>
            <h1 className="font-bold text-lg hover:animate-bounce">←Top</h1>
        </Link>
      </div>
    </header>
  )
}

