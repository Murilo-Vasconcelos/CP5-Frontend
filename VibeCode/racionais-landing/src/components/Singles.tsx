import { useId, useState } from 'react'
import { faixas, nomeCd } from '../data/faixas'
import { singles } from '../data/singles'
import { SPOTIFY_ALBUM_URL } from '../data/links'
import Reveal from './Reveal'

const pad = (n: number) => String(n).padStart(2, '0')

export default function Singles() {
  const [aberto, setAberto] = useState(false)
  const painelId = useId()

  return (
    <section id="faixas" className="scroll-mt-28 bg-branco-quente px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-6">
          <p className="font-titulo text-xl uppercase text-vinho">[ Singles ]</p>
          <h2 className="font-titulo text-6xl font-bold uppercase text-azul [text-shadow:4px_4px_0_var(--color-preto)] sm:text-8xl">
            Os 5 singles
          </h2>
        </Reveal>

        <Reveal className="mb-14 max-w-2xl">
          <p className="text-2xl leading-snug">
            Cinco faixas viraram singles em 2002. Clique em qualquer uma para ouvir o álbum no Spotify.
          </p>
        </Reveal>

        <ul className="space-y-8">
          {singles.map((s, i) => (
            <li key={s.n}>
              <Reveal atraso={i * 80}>
                <a
                  href={SPOTIFY_ALBUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvir ${s.titulo} no álbum, no Spotify (abre em nova aba)`}
                  className="group grid gap-5 rounded-3xl border-4 border-preto bg-creme p-6 shadow-[8px_8px_0_var(--color-preto)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-vinho)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-azul sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:p-8"
                >
                  <span aria-hidden="true" className="flex flex-col sm:items-center">
                    <span className="text-lg font-semibold uppercase tracking-widest">Faixa</span>
                    <span className="font-titulo text-6xl font-bold leading-none text-vinho [text-shadow:3px_3px_0_var(--color-preto)] sm:text-7xl">
                      {pad(s.n)}
                    </span>
                  </span>

                  <span className="block space-y-3">
                    <span className="flex flex-wrap items-center gap-2">
                      <span
                        className={`border-2 border-preto px-2 font-titulo text-sm uppercase ${
                          s.cd === 1 ? 'bg-preto text-azul-claro' : 'bg-vinho text-branco-quente'
                        }`}
                      >
                        [ CD {s.cd} · {nomeCd[s.cd]} ]
                      </span>
                      <span className="border-2 border-preto bg-branco-quente px-2 font-titulo text-sm uppercase">
                        [ {s.duracao} ]
                      </span>
                    </span>
                    <span className="block text-balance font-titulo text-4xl font-bold uppercase leading-none sm:text-5xl">
                      {s.titulo}
                    </span>
                    <span className="block max-w-3xl text-xl leading-snug text-preto/85">{s.resumo}</span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid size-14 place-items-center rounded-full bg-preto text-2xl text-creme transition-all duration-300 group-hover:rotate-45 group-hover:bg-vinho sm:size-16"
                  >
                    ↗
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Ver todas as faixas: expande na própria seção */}
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            aria-expanded={aberto}
            aria-controls={painelId}
            onClick={() => setAberto((v) => !v)}
            className="inline-flex items-center gap-3 rounded-full border-4 border-preto bg-vinho py-2 pl-6 pr-2 text-xl font-bold uppercase text-branco-quente shadow-[6px_6px_0_var(--color-preto)] transition-transform hover:-translate-y-1"
          >
            {aberto ? 'Esconder as faixas' : 'Ver todas as 21 faixas'}
            <span
              aria-hidden="true"
              className={`grid size-10 place-items-center rounded-full bg-preto text-creme transition-transform duration-300 ${
                aberto ? 'rotate-180' : ''
              }`}
            >
              ↓
            </span>
          </button>
        </div>

        <div
          id={painelId}
          inert={!aberto}
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            aberto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-10 grid gap-10 rounded-3xl border-4 border-preto bg-preto p-6 text-branco-quente shadow-[8px_8px_0_var(--color-azul)] sm:p-8 md:grid-cols-2">
              {([1, 2] as const).map((cd) => (
                <div key={cd}>
                  <h3
                    className={`mb-4 font-titulo text-2xl font-bold uppercase ${
                      cd === 1 ? 'text-azul-claro' : 'text-areia'
                    }`}
                  >
                    [ CD {cd} · {nomeCd[cd]} ]
                  </h3>
                  <ol className="divide-y divide-branco-quente/20">
                    {faixas
                      .filter((f) => f.cd === cd)
                      .map((f) => (
                        <li key={f.n}>
                          <a
                            href={SPOTIFY_ALBUM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-baseline gap-4 py-2 text-xl transition-colors hover:text-creme focus-visible:outline-2 focus-visible:outline-creme"
                          >
                            <span className="w-8 shrink-0 font-titulo text-azul-claro">{pad(f.n)}</span>
                            <span className="flex-1">
                              {f.titulo}
                              {f.single && (
                                <span className="ml-2 border border-creme px-1 font-titulo text-xs uppercase text-creme">
                                  single
                                </span>
                              )}
                            </span>
                            <span className="shrink-0 text-areia">{f.duracao}</span>
                          </a>
                        </li>
                      ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
