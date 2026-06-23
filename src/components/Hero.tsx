export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amber-900"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 60% 80%, #d97706 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-300 text-sm font-medium">
              ✨ Pipocas
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            O{" "}
            <span className="text-amber-400">Reino</span>
            {" "}do
            <br />
            Sabor
            <br />
            <span className="text-amber-300">Perfeito</span>
          </h1>

          <p className="text-amber-100/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Pipocas com sabores únicos, feitas com ingredientes
            frescos e muito amor. Cada grão, uma experiência inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#sabores"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl shadow-amber-400/30"
            >
              🍿 Ver Sabores
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/60 font-bold text-lg px-8 py-4 rounded-full transition-all"
            >
              📱 Peça pelo WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            {[
              { value: "20k+", label: "Pipocas feitas" },
              { value: "4.9★", label: "Avaliação" },
              { value: "1k+", label: "Clientes Felizes" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-amber-400">
                  {stat.value}
                </div>
                <div className="text-amber-100/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-amber-400/10 rounded-full flex items-center justify-center border border-amber-400/20">
              <div className="w-64 h-64 bg-amber-400/15 rounded-full flex items-center justify-center border border-amber-400/30">
                <div className="w-48 h-48 bg-amber-400/20 rounded-full flex items-center justify-center border border-amber-400/40">
                  <span className="text-9xl animate-bounce">🍿</span>
                </div>
              </div>
            </div>

            {[
              { emoji: "🧀", label: "Queijo", top: "0", right: "0" },
              { emoji: "🍫", label: "Chocolate", bottom: "0", left: "0" },
              { emoji: "🥔", label: "Batata", top: "50%", left: "-20px" },
              { emoji: "🍿", label: "Simples", top: "50%", right: "-20px" },
            ].map((item) => (
              <div
                key={item.label}
                className="absolute bg-amber-900 border border-amber-600/50 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg"
                style={{ top: item.top, right: item.right, bottom: item.bottom, left: item.left, transform: item.top === "50%" ? "translateY(-50%)" : undefined }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-amber-100 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sabores" className="text-amber-400/60 hover:text-amber-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
