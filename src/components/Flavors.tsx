const flavors = [
  {
    emoji: "🍿",
    name: "Pipoca Simples",
    description: "A clássica pipoca salgada, feita na hora com o tempero certo para agradar a todos.",
    price: "R$ 10,00",
    badge: "Mais Pedida",
    badgeColor: "bg-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    emoji: "🧀",
    name: "Pipoca com Queijo",
    description: "Pipoca crocante coberta com queijo saboroso, irresistível a cada mordida.",
    price: "R$ 13,00",
    badge: "Favorita",
    badgeColor: "bg-orange-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    emoji: "🥔",
    name: "Batata",
    description: "Batata crocante e sequinha, temperada com o toque especial da casa.",
    price: "R$ 12,00",
    badge: null,
    badgeColor: "",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    emoji: "🍫",
    name: "Pipoca Doce",
    description: "Pipoca coberta com chocolate — escolha entre chocolate branco ou chocolate ao leite.",
    price: "R$ 15,00",
    badge: "Premium",
    badgeColor: "bg-amber-800",
    bg: "bg-amber-50",
    border: "border-amber-300",
  },
];

export default function Flavors() {
  return (
    <section id="sabores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Cardápio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-amber-900 mb-4">
            Nossos Sabores
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Produtos artesanais feitos no momento do pedido para garantir
            máxima crocância e sabor em cada embalagem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((flavor) => (
            <div
              key={flavor.name}
              className={`relative rounded-2xl border-2 ${flavor.border} ${flavor.bg} p-6 hover:shadow-lg transition-all hover:-translate-y-1 group`}
            >
              {flavor.badge && (
                <span
                  className={`absolute -top-3 left-4 ${flavor.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {flavor.badge}
                </span>
              )}

              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {flavor.emoji}
              </div>

              <h3 className="font-bold text-amber-900 text-lg mb-2">
                {flavor.name}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                {flavor.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-amber-700 font-black text-xl">
                  {flavor.price}
                </span>
                <a
                  href="#contato"
                  className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold text-sm px-3 py-1.5 rounded-full transition-colors"
                >
                  Pedir
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-400 text-sm mb-4">
            Quer um sabor personalizado? Entre em contato!
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold underline underline-offset-4 transition-colors"
          >
            Falar com a gente →
          </a>
        </div>
      </div>
    </section>
  );
}
