import Image from "next/image";

const VERSION = "v1.0.0";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-amber-950 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4 w-fit">
              <span className="text-4xl">🍿</span>
              <span className="text-white font-bold text-xl leading-tight">
                Reino das<br />
                <span className="text-amber-400">Pipocas</span>
              </span>
            </a>
            <p className="text-amber-200/60 text-sm leading-relaxed max-w-sm">
              Pipocas feitas com ingredientes frescos e
              muito amor. O sabor que você vai querer de novo e de novo.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-amber-200/50 hover:text-amber-400 text-sm font-medium transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Nossos Sabores", href: "#sabores" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Depoimentos", href: "#depoimentos" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-amber-200/60 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">📱</span>
                <div>
                  <div className="text-amber-100/80 text-sm">(12) 98895-8766</div>
                  <div className="text-amber-100/40 text-xs">WhatsApp disponível</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">📧</span>
                <div>
                  <div className="text-amber-100/80 text-sm">contato@reinodaspipocas.com.br</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">📍</span>
                <div>
                  <div className="text-amber-100/80 text-sm">São José dos Campos, SP</div>
                  <div className="text-amber-100/40 text-xs">Entrega disponível na região</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">🕐</span>
                <div>
                  <div className="text-amber-100/80 text-sm">Seg - Dom: 17h às 21h,<br></br>exceto Terças-feiras</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-amber-200/40 text-sm">
              © {currentYear} Reino das Pipocas. Todos os direitos reservados.
            </p>
            <p className="text-amber-200/30 text-xs">
              Feito com ❤️ e muito 🍿 &bull; {VERSION}
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://www.alencarconsultorias.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
            >
              <span className="text-amber-200/50 text-xs">Produzido por</span>
              <Image
                src="/Logotipo Alencar Consultorias.png"
                alt="Alencar Consultorias"
                width={120}
                height={36}
                style={{ width: "120px", height: "auto" }}
                className="brightness-0 invert opacity-60"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
