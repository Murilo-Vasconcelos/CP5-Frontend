# Paleta de cores

Extraída por análise de pixels da capa de "Nada Como um Dia Após o Outro Dia, Vol. 1 & 2" (Racionais MC's).
Imagem de origem: `docs/referencias/capa-album.png`.

Método: agrupamento de cores dominantes (k-means, 8 grupos) para os tons principais, mais amostra direta (mediana da região) do bandana vinho, do asfalto e das calças.

| Papel na capa | Token Tailwind | HEX |
|---|---|---|
| Preto do carro | `preto` | #252222 |
| Azul do céu | `azul` | #1C72BA |
| Azul claro (nuvens/céu) | `azul-claro` | #44A3DA |
| Creme das calças | `creme` | #FCEEB5 |
| Branco quente (brilhos) | `branco-quente` | #F8F8E1 |
| Vinho do bandana | `vinho` | #9B352C |
| Laranja do asfalto | `laranja` | #874832 |
| Dourado/areia | `areia` | #B98B53 |
| Marrom-asfalto escuro | `asfalto` | #3E2A28 |

## Conferência contra a capa
Imagem: `docs/referencias/paleta-vs-capa.png` (capa à esquerda, as 9 cores à direita).
Script: `docs/ferramentas/conferir-paleta.py` (mede quantos pixels da capa estão perto de cada cor). Resultado e análise em `checklist-requisitos.md`.
Nenhum código de cor do site está fora destas 9 cores.

## Regra de uso
- Lado "Chora agora": azul + preto (Hero, Números)
- Lado "Ri depois": creme + vinho (Integrantes)
- Laranja e areia: detalhes e hovers
- Faixa em movimento: vinho com texto creme (ponte entre os dois lados)
