import manoBrown from '../assets/integrantes/mano-brown.jpg'
import ediRock from '../assets/integrantes/edi-rock.jpg'
import iceBlue from '../assets/integrantes/ice-blue.jpg'
import klJay from '../assets/integrantes/kl-jay.jpg'

export type Integrante = {
  nome: string
  funcao: 'MC' | 'DJ'
  frase: string
  foto: string
}

// Frases pesquisadas e aprovadas (fontes em docs/pesquisas.md)
export const integrantes: Integrante[] = [
  {
    nome: 'Mano Brown',
    funcao: 'MC',
    frase: 'Criado no Capão Redondo, fundou o grupo em 1988.',
    foto: manoBrown,
  },
  {
    nome: 'Edi Rock',
    funcao: 'MC',
    frase: 'Começou fazendo bailes com KL Jay, antes de 1988.',
    foto: ediRock,
  },
  {
    nome: 'Ice Blue',
    funcao: 'MC',
    frase: 'O mais negociador do grupo, segundo a Rolling Stone.',
    foto: iceBlue,
  },
  {
    nome: 'KL Jay',
    funcao: 'DJ',
    frase: 'Um dos maiores DJs do país e criador das bases.',
    foto: klJay,
  },
]
