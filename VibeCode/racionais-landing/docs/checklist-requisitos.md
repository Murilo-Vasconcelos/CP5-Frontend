# Checklist de requisitos e auditoria final

Auditoria feita sobre o `.zip` como foi entregue: extraído em uma pasta limpa, com `npm install` do zero, sem aproveitar nada de testes anteriores. Data: 15/10/2026.

Legenda: **Atendido** (há prova na pasta), **Parcial** (feito, mas falta algo que depende do autor), **Pendente** (não feito).

## 1. Requisitos da atividade

| Requisito | Situação | Prova |
|---|---|---|
| Landing page com tema livre | Atendido | Tema: Racionais MC's e o álbum "Nada Como um Dia Após o Outro Dia, Vol. 1 & 2". Site com 6 blocos: Hero, faixa em movimento, Números, Singles, Por que importa, Integrantes. |
| Treinar e explorar o Vibecode | Atendido | Todo o site foi construído em conversa com a IA, registrada em `docs/prompts.md` (8 prompts e 5 correções). |
| Pasta com os registros: prompts | Atendido | `docs/prompts.md` (pedido, por quê, resultado, revisão, ajuste e evidência de cada etapa). |
| Pasta com os registros: pesquisas | Atendido | `docs/pesquisas.md` (fontes, divergências entre fontes, visão crítica, o que não foi encontrado). |
| Pasta com os registros: decisões de design | Atendido | `docs/decisoes-design.md` (tabela de decisões, mapeamento do layout, decisões por seção). |
| Pasta com os registros: referências visuais | Atendido | `docs/referencias/` (capa, 6 prints do Behance, fotos dos integrantes, prints antes/depois do Hero). |
| Pasta com os registros: paleta de cores | Atendido | `docs/paleta.md`, `docs/referencias/paleta-vs-capa.png`, `docs/ferramentas/conferir-paleta.py`. |
| Mostrar como pensei | Atendido | "Por que pedi assim" em cada prompt; `decisoes-design.md`. |
| Mostrar como conversei com a IA | Atendido | Pedidos literais em `prompts.md`. Dois trechos ainda precisam do texto original completo (marcados **[PREENCHER]**). |
| Mostrar como corrigi o caminho | Atendido | Correções 1 a 5 em `prompts.md`, com causa, solução e evidência. |
| Repertório visual | Atendido | Referência de layout (Behance), estética de rua dos anos 90, capa do álbum, fotos. Ver `decisoes-design.md`. |
| Decisões de identidade visual (IDV) | Atendido | Paleta da capa, tipografia (Stardos Stencil e Barlow Condensed), conceito "Chora agora / Ri depois", grão, bordas e sombras duras. |
| Prompt claro | Atendido | Pedidos com tema, paleta, stack e restrições ("layout e não tema nem cores") já no Prompt 1. |
| Revisão crítica do resultado da IA | Atendido | Hero com sobreposição (Correção 4), 6 defeitos achados em teste (Correção 5), divergências entre fontes (`pesquisas.md`). |

## 2. Requisitos que eu pedi para o site

| Requisito | Situação | Prova |
|---|---|---|
| Tema Racionais MC's, álbum em destaque | Atendido | Hero com a capa inteira; título da página e meta descrição citam o álbum. |
| Paleta seguindo "na risca" a capa | Atendido | 9 cores, todas extraídas da capa. Nenhum código de cor fora delas no site (só o favicon repete 3 delas). Cada cor tem pixels parecidos na capa (tabela abaixo). |
| Site bem chamativo | Atendido | Título gigante em estêncil, faixa em movimento, parallax, contadores, animações ao rolar, sombras duras, hover nos cards. Respeita `prefers-reduced-motion`. |
| Layout baseado no Behance (só layout) | Atendido | Tabela "Mapeamento do layout de referência" em `decisoes-design.md`, com todas as linhas feitas. Tema e cores são do Racionais. |
| React, TypeScript, HTML, Tailwind | Atendido | React 19, TypeScript, `index.html` (`lang="pt-BR"`), Tailwind CSS v4, Vite. |
| Estética de rua dos anos 90 | Atendido | Bordas grossas, sombras duras, grão, rótulos `[ ]`, estêncil de placa. |
| Trabalhar por etapas, com perguntas | Atendido | Prompts 1 a 3 e 5 (rodadas de perguntas e respostas). |
| Entrega em .zip com instruções | Atendido | `README.md` (como rodar, problemas no Windows, estrutura, onde mudar o conteúdo). |
| "Ouvir agora" abre o álbum no Spotify | Atendido | Abre `https://open.spotify.com/intl-pt/album/4HcPzKyKVtcZCwJgesoZWn` em nova aba, no menu e no celular. |
| Singles na mesma página, com resumo e clique para o álbum | Atendido | 5 cards com resumo; "Ver todas as 21 faixas" expande a lista (11 no CD 1, 10 no CD 2). Todos levam ao álbum. |
| Por que importa: biografia e importância social | Atendido | Biografia, linha do tempo (1988 a 2023), 4 blocos de importância, citação e fontes com link. |
| Hero sem texto sobre o título | Atendido | Correção 4, testada em 16 larguras. |

## 3. Verificação técnica (resultados reais)

| Verificação | Resultado |
|---|---|
| `npm install` em pasta limpa, sem `package-lock.json` | Funcionou (44 pacotes). |
| `npm run build` (inclui TypeScript) | Sem erros. |
| `npm run lint` | Sem avisos. |
| Erros de console no navegador | Nenhum. |
| Rolagem horizontal, 16 larguras (320, 360, 390, 414, 600, 640, 700, 768, 820, 900, 1024, 1100, 1280, 1366, 1440, 1920 px) | Nenhuma. |
| Título "RACIONAIS" inteiro dentro da tela, nas 16 larguras | Sim. |
| Texto do Hero abaixo do título, nas 16 larguras | Sim. |
| Links do menu (`#numeros`, `#faixas`, `#importa`, `#integrantes`) | Todos levam a uma seção que existe. |
| Botão "Ouvir agora" | Aponta para o álbum certo, em nova aba, com `noopener noreferrer`. |
| Cards dos singles | 5 cards, todos apontam para o álbum. |
| Lista completa | 21 links: 11 no CD 1 e 10 no CD 2; abre e fecha. |
| Títulos e idioma | 1 `h1`, `lang="pt-BR"`, título e meta descrição definidos. |
| Imagens | 5 imagens, todas com texto alternativo, nenhuma quebrada. |
| Links e botões | Nenhum sem nome acessível. Os 33 links externos têm `noopener`. |

**Conferência da paleta contra a capa** (`docs/ferramentas/conferir-paleta.py`): porcentagem de pixels da capa a no máximo 25 de distância (em RGB) da cor.

| Token | HEX | Pixels parecidos na capa |
|---|---|---|
| preto | #252222 | 40,9% |
| azul | #1C72BA | 8,6% |
| azul-claro | #44A3DA | 4,1% |
| creme | #FCEEB5 | 2,7% |
| branco-quente | #F8F8E1 | 6,9% |
| vinho | #9B352C | 2,7% |
| laranja | #874832 | 3,8% |
| areia | #B98B53 | 0,3% |
| asfalto | #3E2A28 | 17,0% |

A "areia" é a cor menos presente na capa (0,3%, nos reflexos dourados do carro), e por isso é usada só em detalhes e hovers. Todas têm pixels muito próximos na imagem (distância mínima de 1,4 ou menos).

**Limites desta verificação:**
- O teste automatizado rodou em Chromium, em Linux. Como o ambiente de teste não acessa o Google Fonts, as duas fontes foram carregadas dos pacotes locais, que são as mesmas fontes. No navegador normal elas vêm do Google Fonts, como em `index.html`.
- Não testei no Windows nem em outros navegadores. Isso fica para o teste do autor.
- Os links das fontes de pesquisa foram lidos na etapa de pesquisa. Não foram reabertos agora.

## 4. Pendências

| Pendência | Quem resolve | Onde |
|---|---|---|
| Preencher a tabela de créditos das fotos (autor, site, link da página) | Autor | `docs/pesquisas.md`, seção "Créditos das fotos". As fotos vieram do autor e a IA não sabe a origem, então não foi inventado crédito. |
| Escrever a "Minha revisão" do Prompt 5 (integrantes) e do Prompt 7 | Autor | `docs/prompts.md` |
| Conferir se as justificativas "Por que pedi assim" estão como o autor pensou | Autor | `docs/prompts.md` |
| Colar o enunciado completo da atividade e a mensagem inicial completa | Autor | `docs/prompts.md` (marcado **[PREENCHER]**) |
| Conferir no encarte do álbum a divisão das faixas por CD (CD 2 começa na faixa 12) | Autor | `docs/pesquisas.md`, seção "Divisão das faixas por CD". Foi deduzida da ordem das faixas e da Wikipedia. |
| Nome do designer do layout de referência | Autor | `docs/pesquisas.md`, tabela de créditos (aparece na página do Behance). |
| Rodapé com créditos visíveis no site (opcional) | Autor decide | Não é requisito da atividade. Pode ser feito se a professora pedir. |

## 5. Benefícios e limites do Vibecode que apareceram neste projeto

Observações tiradas dos registros, para a parte "explorar os benefícios do Vibecode". O autor pode reescrever com as próprias palavras.

**Benefícios**
- **Velocidade:** um site com 6 seções, animações e 5 arquivos de dados saiu em uma conversa. Os ajustes pedidos depois (Hero, Spotify, singles, biografia) foram feitos em uma única mensagem.
- **Pesquisa integrada:** a IA buscou fontes, registrou divergências e escreveu os resumos das músicas sem copiar letras.
- **Teste automático:** a IA rodou o site em um navegador e achou 6 defeitos de responsividade e texto antes de eu os ver (Correção 5).
- **Registro do processo:** a IA manteve a pasta `docs/` atualizada durante todo o trabalho.

**Limites**
- **Código sem teste visual:** o primeiro Hero chegou com texto sobre o título. Só o teste no navegador mostrou (Correção 4).
- **Ambiente:** os erros de PowerShell e de `package-lock.json` vieram do meu Windows, que a IA não via (Correções 2 e 3).
- **Fontes que ela não alcança:** o Behance bloqueou a leitura, e foi preciso mandar prints (Correção 1).
- **Dados que a IA não sabe:** a origem das fotos e o encarte do álbum dependem de mim.
- **Revisão humana necessária:** a IA deduziu a divisão por CD e marcou como inferência. Decidir o que entra no site e conferir os fatos continua sendo trabalho meu.
