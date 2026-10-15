# Decisões de design

| Decisão | Escolha | Motivo |
|---|---|---|
| Tema | Racionais MC's, álbum "Nada Como um Dia Após o Outro Dia, Vol. 1 & 2" | Álbum favorito |
| Foco | Homenagem ao grupo, álbum em destaque | Escolha do autor |
| Idioma | Português | Escolha do autor |
| Paleta | Cores da capa (ver `paleta.md`) | Exigência: seguir à risca a capa |
| Conceito | Dois lados: "Chora agora" (azul/preto) e "Ri depois" (creme/vinho) | O álbum duplo tem CD 1 "Chora agora" e CD 2 "Ri depois" |
| Tipografia títulos | Stardos Stencil | Estilo placa de carro / estêncil de rua |
| Tipografia textos | Barlow Condensed | Condensada, combina com a estética de rua |
| Layout | Baseado no Behance "Pure Dental" (só estrutura, não tema nem cores) | Hero com título gigante atrás da imagem, rótulos [ ], faixa em movimento, números, cards |
| Estética | Rua dos anos 90 em São Paulo | Bordas grossas, grão, sombras duras |
| Animação | Forte: marquee, parallax, animações ao rolar, hover | Pedido: site bem chamativo |
| Stack | React, TypeScript, HTML, Tailwind | Requisito da atividade |
| Entrega | Projeto completo em .zip | Preferência do autor |

Os motivos de cada pedido e o que foi ajustado a cada etapa estão em `prompts.md`. A conferência de requisitos está em `checklist-requisitos.md`.

## Mapeamento do layout de referência
| Referência (Behance) | Versão Racionais | Situação |
|---|---|---|
| Hero "Pure Dental" + dente | RACIONAIS gigante acima do texto, com a capa do álbum subindo sobre o final do título | Feito |
| Rótulos [ ... ] | Rótulos tipo placa: [ Chora agora ] e [ Ri depois ] | Feito |
| Faixa de logos | Faixa em movimento com frases de conceito | Feito |
| Números (9, 95%, 5000+) | 2002, 21 faixas, 2 CDs, 5 singles, com contagem animada | Feito |
| Serviços (pílulas + painel) | Singles em cards grandes com resumo + painel "Ver todas as 21 faixas" | Feito |
| Why Choose Us | Por que importa: biografia, linha do tempo e 4 blocos de importância | Feito |
| Our Team | Os 4 integrantes | Feito (grid, sem carrossel) |

## Decisões por seção
- **Faixa em movimento:** frases de conceito (e não nomes dos singles), para reforçar a identidade do álbum e deixar os singles para a seção própria.
- **Números:** só dados confirmados em pesquisa (ver `pesquisas.md`). Número de vendas ficou de fora por falta de fonte confiável.
- **Integrantes:** grid de 4 cards, sem carrossel, porque são só 4 pessoas e setas de navegação seriam desnecessárias. Fotos em P&B com granulado para unificar tratamentos de cor diferentes; cor e elevação no hover.
- **Fundos das seções:** Hero azul, Números preto (lado "Chora agora"); Singles em branco quente; Por que importa em azul; Integrantes creme com vinho (lado "Ri depois").
- **Acessibilidade:** textos alternativos nas imagens, `prefers-reduced-motion` desliga as animações, menu mobile com `aria-expanded`, links externos com aviso "abre em nova aba" para leitor de tela.

## Decisões da etapa 7 (correções e novas seções)
- **Hero, correção da sobreposição:** o título "RACIONAIS" deixou de ser posicionado de forma absoluta e passou a ficar no fluxo da página, acima do texto. Assim o texto nunca sobe sobre ele, em qualquer largura de tela. Só a capa sobe um pouco por cima do final do título (como na referência, em que o dente cobre parte do título). O tamanho do título passou de 20% para 16% da largura da tela, porque antes ele era cortado na borda direita. O parallax do título passou a subir (afasta do texto) em vez de descer.
- **Botão "Ouvir agora":** abre o álbum no Spotify em outra aba. No celular, onde o botão do topo some, o mesmo link aparece no menu.
- **Singles:** cada single é um card inteiro clicável (leva ao álbum no Spotify). O card mostra o número da faixa, o CD ("Chora agora" ou "Ri depois"), a duração, o título em stencil e um resumo do que a música fala. Os cards usam o creme com borda grossa e sombra dura, e a seta gira no hover.
- **Link do Spotify:** só tenho o link do álbum, então todos os cards levam ao álbum, não à faixa específica.
- **Ver todas as 21 faixas:** botão que expande a lista na própria seção, separada por CD (cores diferentes por CD), com os singles marcados. Também é clicável.
- **Resumos:** escritos com palavras próprias a partir de análises das letras; nenhum trecho de letra foi copiado.
- **Por que importa:** biografia (3 parágrafos), linha do tempo (1988 a 2023), 4 blocos de importância social (voz da periferia, orgulho e pertencimento, independência, reconhecimento acadêmico) e uma citação em destaque. As fontes aparecem como links no próprio site.
- **Layout das novas seções:** largura máxima igual à das demais seções (`max-w-7xl`), cards no mesmo padrão (borda grossa e sombra dura) e rolagem com margem para a barra de navegação não cobrir os títulos.
- **Correções de responsividade:** o título "INTEGRANTES" passou a escalar com a tela (antes estourava no celular) e os 4 blocos de importância só ficam lado a lado a partir de telas grandes (antes estouravam em ~1024px).
