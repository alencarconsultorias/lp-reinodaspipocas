const flavors = [
  {
    emoji: "🧈",
    name: "Manteiga Clássica",
    description: "O sabor tradicional que todo mundo ama, com manteiga real e sal na medida certa.",
    price: "R$ 12,00",
    badge: "Mais Pedido",
    badgeColor: "bg-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    emoji: "🍬",
    name: "Caramelo Crocante",
    description: "Pipoca envolta em caramelo artesanal dourado, crocante e deliciosa.",
    price: "R$ 15,00",
    badge: "Favorita",
    badgeColor: "bg-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    emoji: "🧀",
    name: "Queijo Especial",
    description: "Com blend exclusivo de queijos importados para um sabor intenso e irresistível.",
    price: "R$ 14,00",
    badge: null,
    badgeColor: "",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  {
    emoji: "🍫",
    name: "Chocolate Belga",
    description: "Cobertura de chocolate belga 70% cacau sobre pipocas crocantes e salgadas.",
    price: "R$ 16,00",
    badge: "Premium",
    badgeColor: "bg-amber-800",
    bg: "bg-amber-50",
    border: "border-amber-300",
  },
  {
    emoji: "🌶️",
    name: "Pimenta & Limão",
    description: "A combinação perfeita de picante e azedo para os amantes de emoção.",
    price: "R$ 13,00",
    badge: "Novidade",
    badgeColor: "bg-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    emoji: "🥓",
    name: "Bacon Defumado",
    description: "Pedaços de bacon crocante com tempero defumado especial da casa.",
    price: "R$ 15,00",
    badge: null,
    badgeColor: "",
    bg: "bg-stone-50",
    border: "border-stone-200",
  },
  {
    emoji: "🍕",
    name: "Pizza Margherita",
    description: "Pipoca temperada com tomate, orégano e queijo, sabor de pizza autêntico.",
    price: "R$ 14,00",
    badge: "Top 3",
    badgeColor: "bg-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    emoji: "🌊",
    name: "Sal Marinho",
    description: "Simples e sofisticado. Pipocas levemente salgadas com flor de sal artesanal.",
    price: "R$ 12,00",
    badge: null,
    badgeColor: "",
    bg: "bg-blue-50",
    border: "border-blue-100",
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
            Mais de 20 sabores artesanais esperando por você. Cada um é feito
            no momento do pedido para garantir máxima crocância.
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
