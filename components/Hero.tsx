// components/Hero.tsx

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white bg-[url(/images/Logo.gif)] bg-center">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/construction.jpg"
          alt="construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          信頼できる施工を、<br className="hidden md:block" />
          確かな技術で
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          地域密着で高品質な建設サービスをご提供します
        </p>

        <a
          href="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition"
        >
          無料で相談する
        </a>

      </div>
    </section>
  );
}