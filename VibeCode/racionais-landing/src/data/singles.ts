import { faixas } from './faixas'

// Resumos escritos com palavras próprias a partir das fontes listadas em docs/pesquisas.md.
// Nenhum trecho de letra é reproduzido.
const resumos: Record<number, string> = {
  4: 'Narrado por alguém da quebrada que não se enxerga como vítima, o rap mistura fé, desconfiança e sobrevivência. Fala de inveja, traição e do peso da cadeia para pobres e pretos, pede lealdade aos seus e mantém a esperança de que algo bom ainda pode nascer de onde tudo parece perdido.',
  5: 'Um retrato do que é ser negro e pobre no Brasil, contado por quem saiu da periferia, mas leva ela junto. Passa pelo estigma, pela violência e pelo consumismo, homenageia a mãe e o hip-hop e termina afirmando dignidade: dá para vencer sem esquecer de onde veio. Pesquisadores leem a faixa como resposta ao mito da “democracia racial”.',
  15: 'Começa como uma adivinha sobre a lágrima e vira um desabafo de Mano Brown sobre fama, inveja e traição. Ele ouve que falam mal dele, defende o direito de querer conforto sem abandonar a quebrada e lembra que até Jesus chorou. Termina com um tom de esperança ligado à fé.',
  17: 'Uma crônica sobre dinheiro, sedução e a relação entre homens e mulheres, cantada em revezamento pelos MCs. Os primeiros versos retratam o conquistador da noite com fascínio e deboche, e a faixa vira com ironia e cinismo, questionando quem manipula quem. Tom irônico, com crítica social e linguagem de rua.',
  18: 'Conta, em terceira pessoa, a história de garotos da periferia diante do crime: ao ver o tênis e as roupas caras de quem ostenta, um deles se encanta, entra nesse caminho e acaba preso e morto, enquanto o outro se refugia na religião. A leitura acadêmica vê a faixa como crítica ao consumo como promessa de sucesso e à exclusão, não como apologia do crime.',
}

export const singles = faixas
  .filter((f) => f.single)
  .map((f) => ({ ...f, resumo: resumos[f.n] }))
