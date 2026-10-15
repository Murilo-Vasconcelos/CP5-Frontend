import { useState } from 'react'
import { SPOTIFY_ALBUM_URL } from '../data/links'

const links = [
  { label: 'O álbum', href: '#numeros' },
  { label: 'Singles', href: '#faixas' },
  { label: 'Por que importa', href: '#importa' },
  { label: 'Integrantes', href: '#integrantes' },
]

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border-4 border-preto bg-branco-quente px-5 py-2 shadow-[6px_6px_0_var(--color-preto)]"
      >
        <a href="#inicio" className="font-titulo text-xl font-bold tracking-widest text-preto">
          RACIONAIS<span className="text-vinho">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-lg font-semibold uppercase tracking-wide md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-vinho">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Abre o álbum no Spotify em outra aba */}
        <a
          href={SPOTIFY_ALBUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-3 rounded-full border-2 border-preto bg-vinho py-1 pl-5 pr-1 text-lg font-bold uppercase text-branco-quente transition-transform hover:-translate-y-0.5 md:flex"
        >
          Ouvir agora
          <span className="sr-only"> no Spotify (abre em nova aba)</span>
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-preto text-creme">
            ↗
          </span>
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
          className="grid size-10 place-items-center rounded-full border-2 border-preto md:hidden"
        >
          {aberto ? '✕' : '☰'}
        </button>
      </nav>

      {aberto && (
        <ul className="mx-auto mt-3 max-w-6xl rounded-3xl border-4 border-preto bg-creme p-5 text-xl font-semibold uppercase shadow-[6px_6px_0_var(--color-preto)] md:hidden">
          {links.map((l) => (
            <li key={l.href} className="border-b-2 border-preto/20 py-2">
              <a href={l.href} onClick={() => setAberto(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={SPOTIFY_ALBUM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAberto(false)}
              className="flex items-center justify-between rounded-full border-2 border-preto bg-vinho py-1 pl-5 pr-1 font-bold text-branco-quente"
            >
              Ouvir agora
              <span className="sr-only"> no Spotify (abre em nova aba)</span>
              <span aria-hidden="true" className="grid size-8 place-items-center rounded-full bg-preto text-creme">
                ↗
              </span>
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
