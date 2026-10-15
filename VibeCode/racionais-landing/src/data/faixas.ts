export type Faixa = {
  n: number
  titulo: string
  duracao: string
  cd: 1 | 2
  single?: boolean
}

export const nomeCd = { 1: 'Chora agora', 2: 'Ri depois' } as const

// Ordem e durações: Amazon Music. Divisão por CD: "Vida Loka II" é a 7ª faixa do CD 2 (Wikipedia),
// logo o CD 2 começa na faixa 12 e o CD 1 vai da 1 à 11. Singles de 2002: ver docs/pesquisas.md.
export const faixas: Faixa[] = [
  { n: 1, titulo: 'Sou + Você', duracao: '1:48', cd: 1 },
  { n: 2, titulo: 'Vivão e Vivendo', duracao: '1:57', cd: 1 },
  { n: 3, titulo: 'Vida Loka (Intro)', duracao: '0:24', cd: 1 },
  { n: 4, titulo: 'Vida Loka, Pt. 1', duracao: '5:03', cd: 1, single: true },
  { n: 5, titulo: 'Negro Drama', duracao: '6:51', cd: 1, single: true },
  { n: 6, titulo: 'A Vítima', duracao: '7:20', cd: 1 },
  { n: 7, titulo: 'Na Fé Firmão', duracao: '6:05', cd: 1 },
  { n: 8, titulo: '12 de Outubro', duracao: '3:30', cd: 1 },
  { n: 9, titulo: 'Eu Sou 157', duracao: '8:49', cd: 1 },
  { n: 10, titulo: 'A Vida É Desafio', duracao: '7:13', cd: 1 },
  { n: 11, titulo: '1 por Amor, 2 por Dinheiro', duracao: '6:58', cd: 1 },
  { n: 12, titulo: 'De Volta à Cena', duracao: '2:01', cd: 2 },
  { n: 13, titulo: 'Otus 500', duracao: '2:11', cd: 2 },
  { n: 14, titulo: 'Crime Vai e Vem', duracao: '7:55', cd: 2 },
  { n: 15, titulo: 'Jesus Chorou', duracao: '7:51', cd: 2, single: true },
  { n: 16, titulo: 'Fone (Intro)', duracao: '1:56', cd: 2 },
  { n: 17, titulo: 'Estilo Cachorro', duracao: '6:17', cd: 2, single: true },
  { n: 18, titulo: 'Vida Loka, Pt. 2', duracao: '5:50', cd: 2, single: true },
  { n: 19, titulo: 'Expresso da Meia-Noite', duracao: '5:21', cd: 2 },
  { n: 20, titulo: 'Trutas e Quebradas', duracao: '6:17', cd: 2 },
  { n: 21, titulo: 'Da Ponte pra Cá', duracao: '8:47', cd: 2 },
]
