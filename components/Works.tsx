// components/Works.tsx
export default function Works() {
  return (
    <section id="works" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">施工実績</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i}>
              <img src={`/images/work${i}.jpg`} className="rounded mb-3"/>
              <p>施工事例 {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}