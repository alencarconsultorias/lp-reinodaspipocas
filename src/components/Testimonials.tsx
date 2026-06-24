const testimonials = [
  {
    name: "Mariana Costa",
    role: "Cliente desde 2025",
    avatar: "MC",
    avatarBg: "bg-pink-500",
    stars: 5,
    text: "Simplesmente a melhor pipoca que já comi! O sabor de caramelo crocante é viciante. Peço toda semana pro cinema em casa. Entrega sempre pontual e ainda chegam quentinhas!",
  },
  {
    name: "Rafael Oliveira",
    role: "Cliente desde 2025",
    avatar: "RO",
    avatarBg: "bg-blue-500",
    stars: 5,
    text: "Fiz um pedido para o aniversário da minha esposa e ela adorou! A apresentação é linda e o sabor de chocolate belga é incrível. Todo mundo na festa queria saber onde comprar.",
  },
  {
    name: "Juliana Santos",
    role: "Cliente desde 2025",
    avatar: "JS",
    avatarBg: "bg-purple-500",
    stars: 5,
    text: "Já testei vários sabores e não consigo escolher um favorito! O atendimento pelo WhatsApp é super rápido e o pessoal é muito atencioso. Recomendo de olhos fechados!",
  },
  {
    name: "Pedro Almeida",
    role: "Cliente desde 2025",
    avatar: "PA",
    avatarBg: "bg-green-500",
    stars: 5,
    text: "A pipoca de pimenta & limão é simplesmente surpreendente. Nunca pensei que iria gostar tanto! O combo de sabores é perfeito. Agora não consigo ficar sem.",
  },
  {
    name: "Carla Mendes",
    role: "Cliente desde 2025",
    avatar: "CM",
    avatarBg: "bg-orange-500",
    stars: 5,
    text: "Uso o Reino das Pipocas pra presentear clientes da minha empresa. Todo mundo fica encantado! A embalagem é bonita e o produto é top. Atendimento corporativo excelente.",
  },
  {
    name: "Bruno Lima",
    role: "Cliente desde 2025",
    avatar: "BL",
    avatarBg: "bg-teal-500",
    stars: 5,
    text: "Ingredientes de qualidade que dá pra sentir a diferença. Nunca mais comprei pipoca em supermercado. A manteiga clássica é incrivelmente saborosa e as porções são generosas!",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-amber-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Mais de 1.000 clientes satisfeitos. Veja o que eles têm a dizer
            sobre a experiência Reino das Pipocas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-amber-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-stone-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
