export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-semibold mb-2">Performance Marketing</h3>
            <p>
              ROI-focused paid campaigns across Google, Meta, and emerging
              platforms.
            </p>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-semibold mb-2">SEO & Organic Growth</h3>
            <p>
              Sustainable visibility through technical SEO and authority
              content.
            </p>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-semibold mb-2">Brand & Digital Strategy</h3>
            <p>
              Clear positioning, messaging, and funnel design that converts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
