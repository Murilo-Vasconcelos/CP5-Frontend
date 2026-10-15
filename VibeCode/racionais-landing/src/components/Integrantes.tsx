import { integrantes } from '../data/integrantes'
import Reveal from './Reveal'

export default function Integrantes() {
  return (
    <section id="integrantes" className="scroll-mt-28 bg-creme px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-right">
          <p className="font-titulo text-xl uppercase text-preto">[ Ri depois ]</p>
          <h2 className="font-titulo text-[11vw] font-bold uppercase text-vinho [text-shadow:4px_4px_0_var(--color-preto)] sm:text-7xl lg:text-8xl">
            Integrantes
          </h2>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {integrantes.map((p, i) => (
            <Reveal key={p.nome} atraso={i * 120}>
              <article className="group overflow-hidden rounded-3xl border-4 border-preto bg-branco-quente shadow-[8px_8px_0_var(--color-preto)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[12px_12px_0_var(--color-vinho)]">
                <div className="grao aspect-[3/4] overflow-hidden border-b-4 border-preto">
                  <img
                    src={p.foto}
                    alt={`Foto de ${p.nome}, ${p.funcao} do Racionais MC's`}
                    loading="lazy"
                    className="size-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <span className="inline-block border-2 border-preto bg-vinho px-2 font-titulo text-sm uppercase text-branco-quente">
                    [ {p.funcao} ]
                  </span>
                  <h3 className="font-titulo text-3xl font-bold uppercase leading-none">{p.nome}</h3>
                  <p className="text-xl leading-snug text-preto/80">{p.frase}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
