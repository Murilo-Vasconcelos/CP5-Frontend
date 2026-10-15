import capa from '../assets/capa.png'
import { useScrollY } from '../hooks/useScrollY'

export default function Hero() {
  const y = useScrollY()

  return (
    <section
      id="inicio"
      className="grao relative isolate overflow-hidden bg-gradient-to-b from-azul to-azul-claro"
    >
      {/*
        Título gigante no fluxo da página: o texto fica SEMPRE abaixo dele (sem sobreposição).
        Só a capa sobe um pouco por cima do título, como na referência.
      */}
      <h1
        style={{ transform: `translateY(${y * -0.12}px)` }}
        className="pointer-events-none relative select-none px-4 pt-28 text-center font-titulo text-[16vw] font-bold leading-[0.9] text-creme [text-shadow:6px_6px_0_var(--color-preto)]"
      >
        RACIONAIS
      </h1>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-10 lg:grid-cols-2 lg:items-start">
        {/* Coluna de texto */}
        <div className="animate-subir space-y-10">
          <p className="text-4xl font-semibold uppercase leading-tight text-preto sm:text-5xl">
            Rua <span className="text-branco-quente">de São Paulo</span>
            <br />
            <span className="ml-8 inline-block">
              Voz <span className="text-branco-quente">da periferia</span>
            </span>
            <br />
            Álbum <span className="text-branco-quente">duplo de 2002</span>
          </p>

          <p className="max-w-md text-xl font-medium leading-snug text-preto">
            [ Homenagem ao Racionais MC's e a “Nada Como um Dia Após o Outro Dia, Vol. 1 &amp; 2”.
            Dois discos, 21 faixas e a quebrada de São Paulo como cenário. ]
          </p>

          <a
            href="#faixas"
            className="inline-flex items-center gap-3 rounded-full border-4 border-preto bg-creme py-2 pl-6 pr-2 text-xl font-bold uppercase shadow-[6px_6px_0_var(--color-preto)] transition-transform hover:-translate-y-1"
          >
            Ver os singles
            <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-preto text-creme">
              ↘
            </span>
          </a>
        </div>

        {/* Capa do álbum + rótulos (a margem negativa sobe a capa sobre o título só em telas grandes) */}
        <div
          style={{ transform: `translateY(${y * -0.08}px)` }}
          className="relative flex justify-center lg:-mt-[9vw] lg:justify-end"
        >
          <div className="relative animate-flutuar">
            <img
              src={capa}
              alt="Capa do álbum Nada Como um Dia Após o Outro Dia, Vol. 1 & 2, do Racionais MC's"
              className="w-72 rotate-3 border-[6px] border-preto shadow-[12px_12px_0_var(--color-preto)] sm:w-96"
            />

            <span className="absolute -left-6 top-10 border-2 border-preto bg-branco-quente px-3 py-1 font-titulo text-lg font-bold uppercase shadow-[4px_4px_0_var(--color-preto)]">
              [ Chora agora ]
            </span>
            <span className="absolute -right-4 bottom-16 border-2 border-preto bg-creme px-3 py-1 font-titulo text-lg font-bold uppercase text-vinho shadow-[4px_4px_0_var(--color-preto)]">
              [ Ri depois ]
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
