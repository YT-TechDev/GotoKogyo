// components/Services.tsx
export default function Services() {
  const items = [
    { title: "住宅施工", desc: "高品質な住宅建設" },
    { title: "リフォーム", desc: "内装・外装リフォーム" },
    { title: "外構工事", desc: "エクステリア施工" },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">サービス</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}