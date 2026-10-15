import { biografia, fontes, marcos, motivos } from '../data/importancia'
import Reveal from './Reveal'

export default function Importa() {
  return (
    <section id="importa" className="grao relative scroll-mt-28 bg-azul px-6 py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="mb-14">
          <p className="font-titulo text-xl uppercase text-branco-quente">[ Quem são e por que importam ]</p>
          <h2 className="font-titulo text-6xl font-bold uppercase text-creme [text-shadow:4px_4px_0_var(--color-preto)] sm:text-8xl">
            Por que importa
          </h2>
        </Reveal>

        {/* Biografia + linha do tempo */}
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <article className="h-full rounded-3xl border-4 border-preto bg-branco-quente p-6 shadow-[8px_8px_0_var(--color-preto)] sm:p-8">
              <h3 className="mb-5 font-titulo text-3xl font-bold uppercase text-vinho sm:text-4xl">
                [ Biografia ]
              </h3>
              <div className="space-y-4 text-xl leading-snug sm:text-2xl">
                {biografia.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <p className="mt-6 border-t-2 border-preto/20 pt-4 text-lg leading-snug text-preto/80">
                Fontes:{' '}
                {fontes.map((f, i) => (
                  <span key={f.url}>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline decoration-2 underline-offset-2 hover:text-vinho"
                    >
                      {f.nome}
                    </a>
                    {i < fontes.length - 1 ? ' · ' : '.'}
                  </span>
                ))}
              </p>
            </article>
          </Reveal>

          <Reveal atraso={150} className="lg:col-span-2">
            <aside className="h-full rounded-3xl border-4 border-preto bg-preto p-6 text-branco-quente shadow-[8px_8px_0_var(--color-vinho)] sm:p-8">
              <h3 className="mb-5 font-titulo text-3xl font-bold uppercase text-azul-claro sm:text-4xl">
                [ Linha do tempo ]
              </h3>
              <ol className="divide-y divide-branco-quente/20">
                {marcos.map((m) => (
                  <li key={m.ano} className="flex gap-4 py-3">
                    <span className="w-16 shrink-0 font-titulo text-2xl font-bold text-areia">{m.ano}</span>
                    <span className="text-xl leading-snug">{m.texto}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </Reveal>
        </div>

        {/* Por que são importantes para a sociedade */}
        <Reveal className="mb-8 mt-20">
          <h3 className="font-titulo text-4xl font-bold uppercase text-creme [text-shadow:3px_3px_0_var(--color-preto)] sm:text-6xl">
            Importância para a sociedade
          </h3>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {motivos.map((m, i) => (
            <Reveal key={m.titulo} atraso={i * 100}>
              <article className="h-full rounded-3xl border-4 border-preto bg-creme p-6 shadow-[8px_8px_0_var(--color-preto)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0_var(--color-vinho)]">
                <p aria-hidden="true" className="font-titulo text-6xl font-bold leading-none text-vinho [text-shadow:3px_3px_0_var(--color-preto)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h4 className="mt-4 font-titulo text-2xl font-bold uppercase leading-tight">{m.titulo}</h4>
                <p className="mt-3 text-xl leading-snug text-preto/85">{m.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <figure className="rounded-3xl border-4 border-preto bg-vinho p-8 text-creme shadow-[8px_8px_0_var(--color-preto)] sm:p-10">
            <blockquote className="font-titulo text-3xl font-bold uppercase leading-tight sm:text-5xl">
              “Extrapolam a fala do gueto, sem abandoná-lo.”
            </blockquote>
            <figcaption className="mt-4 text-xl">
              Professores da Unicamp autores da proposta do título de doutor honoris causa ao grupo (via{' '}
              <a
                href="https://www.gazetadopovo.com.br/vida-e-cidadania/grupo-de-rap-racionais-mcs-recebe-titulo-de-doutor-honoris-causa-da-unicamp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-2"
              >
                Gazeta do Povo
              </a>
              )
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
