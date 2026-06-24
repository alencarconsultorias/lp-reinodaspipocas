const features = [
  {
    icon: "🌽",
    title: "Ingredientes Frescos",
    description:
      "Selecionamos apenas os melhores grãos de milho não-transgênico, colhidos por produtores locais parceiros. Frescor garantido em cada lote.",
  },
  {
    icon: "👨‍🍳",
    title: "Feito com Amor",
    description:
      "Cada embalagem é preparada artesanalmente, um lote por vez. Nada de linha de produção industrial — cada pipoca tem a atenção que merece.",
  },
  {
    icon: "♻️",
    title: "Embalagem Sustentável",
    description:
      "Nossas embalagens são 100% recicláveis e biodegradáveis. Cuidamos do sabor e do planeta ao mesmo tempo.",
  },
];

export default function Features() {
  return (
    <section id="sobre" className="py-24 bg-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            O Melhor da Pipoca
            <br />
            <span className="text-amber-400">Joseense</span>
          </h2>
          <p className="text-amber-100/70 text-lg max-w-xl mx-auto">
            No Reino das Pipocas, cada detalhe importa. Desde a escolha do
            grão até o momento em que chega às suas mãos.
          </p>
        </div>

        {/* Banner exclusivo — Entrega Rápida */}
        <div className="mb-6 bg-amber-400/15 border border-amber-400/40 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8">
          <div className="flex-shrink-0 text-7xl">🚀</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white font-black text-2xl sm:text-3xl mb-2">
              Entrega Rápida
            </h3>
            <p className="text-amber-100/70 text-base leading-relaxed mb-6">
              Pediu, fizemos! Entregamos via iFood ou 99 Food, ainda quente e
              crocante. Disponível todos os dias, exceto as Terças-feiras.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.ifood.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#ea1d2c] hover:bg-[#c7111e] text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <span>🛵</span> Pedir pelo iFood
              </a>
              <a
                href="https://www.99app.com/99food"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#f9a61a] hover:bg-[#e09510] text-black font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <span>🍔</span> Pedir pelo 99 Food
              </a>
            </div>
          </div>
        </div>

        {/* Demais banners */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-amber-400/10 border border-amber-400/30 rounded-3xl p-8 sm:p-12 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { number: "2025", label: "Fundada em", sub: "1 ano de história" },
            { number: "20k+", label: "Pipocas feitas", sub: "Sempre evoluindo" },
            { number: "4.9★", label: "Nota média", sub: "No Google e iFood" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-black text-amber-400 mb-1">{stat.number}</div>
              <div className="text-white font-semibold">{stat.label}</div>
              <div className="text-amber-100/50 text-sm mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
