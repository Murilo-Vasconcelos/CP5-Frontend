import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import Reveal from './Reveal'

type Dado = {
  valor: number
  rotulo: string
  deslocar?: boolean
}

// Dados confirmados na pesquisa (ver docs/pesquisas.md)
const dados: Dado[] = [
  { valor: 2002, rotulo: 'Ano de lançamento' },
  { valor: 21, rotulo: 'Faixas', deslocar: true },
  { valor: 2, rotulo: 'CDs: Chora agora e Ri depois' },
  { valor: 5, rotulo: 'Singles em 2002', deslocar: true },
]

function Contador({ alvo, ativo }: { alvo: number; ativo: boolean }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!ativo) return
    const duracao = 1600
    const inicio = performance.now()
    let raf = 0

    const passo = (agora: number) => {
      const t = Math.min((agora - inicio) / duracao, 1)
      const suave = 1 - Math.pow(1 - t, 3)
      setN(Math.round(alvo * suave))
      if (t < 1) raf = requestAnimationFrame(passo)
    }
    raf = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(raf)
  }, [ativo, alvo])

  return <>{n}</>
}

export default function Numeros() {
  const { ref, visivel } = useReveal<HTMLDivElement>(0.3)

  return (
    <section id="numeros" className="grao scroll-mt-28 bg-preto px-6 py-24 text-branco-quente">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16">
          <p className="font-titulo text-xl uppercase text-azul-claro">[ Chora agora ]</p>
          <h2 className="font-titulo text-5xl font-bold uppercase sm:text-7xl">O álbum em números</h2>
        </Reveal>

        <div ref={ref} className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {dados.map((d) => (
            <div key={d.rotulo} className={d.deslocar ? 'lg:mt-16' : ''}>
              <p className="font-titulo text-8xl font-bold leading-none text-azul-claro [text-shadow:5px_5px_0_var(--color-azul)] sm:text-9xl">
                <Contador alvo={d.valor} ativo={visivel} />
              </p>
              <p className="mt-4 max-w-[14rem] border-t-4 border-vinho pt-3 text-2xl font-semibold uppercase leading-tight text-creme">
                {d.rotulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
