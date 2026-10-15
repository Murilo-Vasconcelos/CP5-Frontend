const frases = [
  'Chora agora',
  'Ri depois',
  'Nada como um dia após o outro dia',
  'Rua de São Paulo',
  'Álbum duplo · 2002',
  "Racionais MC's",
]

function Faixa({ escondida = false }: { escondida?: boolean }) {
  return (
    <ul
      aria-hidden={escondida}
      className="flex shrink-0 items-center gap-8 pr-8 font-titulo text-3xl font-bold uppercase tracking-wider sm:text-4xl"
    >
      {frases.map((f) => (
        <li key={f} className="flex items-center gap-8 whitespace-nowrap">
          {f}
          <span className="text-laranja">■</span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y-4 border-preto bg-vinho py-4 text-creme">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Faixa />
        <Faixa escondida />
      </div>
    </div>
  )
}
