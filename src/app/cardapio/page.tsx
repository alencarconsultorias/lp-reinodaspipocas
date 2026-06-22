"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "5511999999999";

const products = [
  {
    id: "pipoca-simples",
    emoji: "🍿",
    name: "Pipoca Simples",
    description: "A clássica pipoca salgada, feita na hora com o tempero certo.",
    price: 10.0,
    badge: "Mais Pedida",
    badgeColor: "bg-amber-500",
  },
  {
    id: "pipoca-queijo",
    emoji: "🧀",
    name: "Pipoca com Queijo",
    description: "Crocante, coberta com queijo saboroso, irresistível a cada mordida.",
    price: 13.0,
    badge: "Favorita",
    badgeColor: "bg-orange-500",
  },
  {
    id: "batata",
    emoji: "🥔",
    name: "Batata",
    description: "Crocante e sequinha, temperada com o toque especial da casa.",
    price: 12.0,
    badge: null,
    badgeColor: "",
  },
  {
    id: "pipoca-doce",
    emoji: "🍫",
    name: "Pipoca Doce",
    description: "Coberta com chocolate branco ou ao leite — escolha seu favorito.",
    price: 15.0,
    badge: "Premium",
    badgeColor: "bg-amber-800",
  },
];

const paymentMethods = [
  { id: "pix", label: "PIX", icon: "💠" },
  { id: "credito", label: "Crédito", icon: "💳" },
  { id: "debito", label: "Débito", icon: "💳" },
  { id: "dinheiro", label: "Dinheiro", icon: "💵" },
];

function fmt(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const WhatsAppSVG = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function CardapioPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [payment, setPayment] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const cartItems = products.filter((p) => (quantities[p.id] ?? 0) > 0);
  const totalItems = cartItems.reduce((sum, p) => sum + (quantities[p.id] ?? 0), 0);
  const total = cartItems.reduce((sum, p) => sum + p.price * (quantities[p.id] ?? 0), 0);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  function change(id: string, delta: number) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) + delta),
    }));
  }

  function buildMessage() {
    const lines = [
      "🍿 *Novo Pedido — Reino das Pipocas*",
      "",
      "*Itens:*",
      ...cartItems.map((p) => {
        const qty = quantities[p.id];
        return `• ${qty}x ${p.name} — ${fmt(p.price * qty)}`;
      }),
      "",
      `*Total: ${fmt(total)}*`,
      `*Pagamento:* ${paymentMethods.find((m) => m.id === payment)?.label ?? payment}`,
    ];
    if (name.trim()) lines.push(`*Nome:* ${name.trim()}`);
    if (notes.trim()) lines.push(`*Observações:* ${notes.trim()}`);
    return lines.join("\n");
  }

  function handleSend() {
    if (cartItems.length === 0) { setError("Selecione pelo menos um item."); return; }
    if (!payment) { setError("Escolha uma forma de pagamento."); return; }
    setError("");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-amber-900 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🍿</span>
            <span className="text-white font-bold text-base leading-tight">
              Reino das <span className="text-amber-300">Pipocas</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {totalItems > 0 && (
              <button
                onClick={() => setDrawerOpen(true)}
                className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-amber-900"
                aria-label="Ver carrinho"
              >
                <span className="text-lg">🛒</span>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </button>
            )}
            <Link
              href="/"
              className="text-amber-200 text-sm font-medium hover:text-white transition-colors"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero strip ── */}
      <div className="mt-14 bg-amber-900 px-4 pt-5 pb-6 text-center">
        <h1 className="text-2xl font-black text-white mb-1">Cardápio</h1>
        <p className="text-amber-200/70 text-sm">
          Toque em <span className="font-bold text-amber-300">+</span> para adicionar itens ao pedido
        </p>
      </div>

      {/* ── Product list ── */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-3 py-4 pb-36 space-y-3">
        {products.map((product) => {
          const qty = quantities[product.id] ?? 0;
          const active = qty > 0;
          return (
            <div
              key={product.id}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-200 ${
                active ? "ring-2 ring-amber-400 shadow-amber-100 shadow-md" : ""
              }`}
            >
              {/* Active accent bar */}
              {active && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-l-2xl" />
              )}

              <div className="flex items-center gap-4 px-4 py-4 pl-5">
                {/* Emoji */}
                <div className="text-4xl w-12 text-center shrink-0 select-none">
                  {product.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-stone-800 text-base leading-tight">
                      {product.name}
                    </h3>
                    {product.badge && (
                      <span className={`${product.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-400 text-xs mt-0.5 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <span className="text-amber-700 font-black text-lg mt-1 block">
                    {fmt(product.price)}
                  </span>
                </div>

                {/* Counter */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {qty > 0 ? (
                    <>
                      <button
                        onClick={() => change(product.id, -1)}
                        className="w-11 h-11 rounded-full bg-amber-100 active:bg-amber-200 text-amber-900 font-black text-xl flex items-center justify-center transition-colors touch-manipulation"
                        aria-label="Remover"
                      >
                        −
                      </button>
                      <span className="w-7 text-center font-black text-stone-800 text-lg tabular-nums">
                        {qty}
                      </span>
                      <button
                        onClick={() => change(product.id, 1)}
                        className="w-11 h-11 rounded-full bg-amber-500 active:bg-amber-600 text-white font-black text-xl flex items-center justify-center transition-colors touch-manipulation"
                        aria-label="Adicionar"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => change(product.id, 1)}
                      className="w-11 h-11 rounded-full bg-amber-500 active:bg-amber-600 text-white font-black text-2xl flex items-center justify-center transition-colors touch-manipulation shadow-sm"
                      aria-label="Adicionar"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>

              {/* Subtotal strip */}
              {active && (
                <div className="bg-amber-50 px-5 py-2 flex items-center justify-between">
                  <span className="text-amber-700 text-xs font-medium">
                    {qty} {qty === 1 ? "unidade" : "unidades"}
                  </span>
                  <span className="text-amber-800 text-sm font-black">
                    {fmt(product.price * qty)}
                  </span>
                </div>
              )}
            </div>
          );
        })}

        {/* Empty state hint */}
        {totalItems === 0 && (
          <p className="text-center text-stone-400 text-sm pt-4">
            Adicione itens para montar seu pedido 👆
          </p>
        )}
      </main>

      {/* ── Sticky checkout bar ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 px-4 py-3 bg-white border-t border-stone-100 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
          totalItems > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-full flex items-center justify-between bg-green-500 active:bg-green-600 text-white font-bold px-5 py-4 rounded-2xl transition-colors touch-manipulation shadow-lg shadow-green-500/30"
          >
            <div className="flex items-center gap-2">
              <span className="bg-white/25 text-white text-sm font-black w-7 h-7 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
              <span className="text-base">Ver pedido</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black">{fmt(total)}</span>
              <span className="text-white/70">›</span>
            </div>
          </button>
        </div>
      </div>

      {/* ── Bottom drawer overlay ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Bottom drawer ── */}
      <div
        ref={drawerRef}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-out max-h-[90dvh] flex flex-col ${
          drawerOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div className="flex flex-col items-center pt-3 pb-2 shrink-0">
          <div className="w-10 h-1 bg-stone-200 rounded-full" />
        </div>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 pb-3 shrink-0">
          <h2 className="text-lg font-black text-stone-800">Resumo do Pedido</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-lg font-bold active:bg-stone-200"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 pb-6 space-y-5">
          {/* Items */}
          <div className="bg-stone-50 rounded-2xl p-4 space-y-3">
            {cartItems.map((p) => (
              <div key={p.id} className="flex items-center gap-3">
                <span className="text-2xl w-8 text-center">{p.emoji}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-stone-700">{p.name}</p>
                  <p className="text-xs text-stone-400">{quantities[p.id]}x · {fmt(p.price)} cada</p>
                </div>
                <span className="font-black text-stone-800">
                  {fmt(p.price * quantities[p.id])}
                </span>
              </div>
            ))}
            <div className="border-t border-stone-200 pt-3 flex items-center justify-between">
              <span className="font-bold text-stone-600 text-sm">Total</span>
              <span className="font-black text-amber-700 text-xl">{fmt(total)}</span>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-sm font-bold text-stone-700 mb-2">Forma de Pagamento</h3>
            <div className="grid grid-cols-2 gap-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPayment(method.id)}
                  className={`flex items-center gap-2 px-4 py-3.5 rounded-xl border-2 text-sm font-semibold transition-all touch-manipulation ${
                    payment === method.id
                      ? "border-amber-500 bg-amber-50 text-amber-900"
                      : "border-stone-200 bg-white text-stone-500 active:border-amber-300"
                  }`}
                >
                  <span className="text-lg">{method.icon}</span>
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm font-bold text-stone-700 block mb-1.5">
              Seu nome{" "}
              <span className="font-normal text-stone-400">(opcional)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: João Silva"
              className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors bg-white"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-bold text-stone-700 block mb-1.5">
              Observações{" "}
              <span className="font-normal text-stone-400">(opcional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Endereço de entrega, sem sal, troco para..."
              rows={3}
              className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-amber-400 transition-colors resize-none bg-white"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm font-semibold text-center bg-red-50 py-3 rounded-xl">
              {error}
            </p>
          )}

          {/* Send button */}
          <button
            onClick={handleSend}
            className="w-full flex items-center justify-center gap-3 bg-green-500 active:bg-green-600 text-white font-bold text-base px-6 py-4 rounded-2xl transition-colors touch-manipulation shadow-lg shadow-green-500/20"
          >
            <WhatsAppSVG className="w-5 h-5" />
            Enviar Pedido pelo WhatsApp
          </button>

          <p className="text-stone-400 text-xs text-center -mt-2 pb-2">
            Você será redirecionado para o WhatsApp com o resumo do pedido.
          </p>
        </div>
      </div>
    </div>
  );
}
