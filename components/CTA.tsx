// components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-20 text-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">
        まずはお気軽にご相談ください
      </h2>
      <a
        href="/contact"
        className="bg-yellow-500 text-black px-8 py-4 rounded"
      >
        無料相談する
      </a>
    </section>
  );
}