# Registro de prompts e correções

Este arquivo conta o processo de criação da landing page, na ordem em que aconteceu: o que eu pedi, por que pedi desse jeito, o que a IA entregou, o que eu revisei e o que foi ajustado.

**Como ler**
- **Meu pedido:** o que eu escrevi para a IA. Quando está entre aspas, é a minha mensagem copiada ao pé da letra. Quando está como "(resumo)", é a ideia da mensagem em poucas palavras.
- **Por que pedi assim:** a decisão por trás do pedido (clareza, controle do processo, objetivo da atividade). Pedi à IA que redigisse essas explicações a partir da nossa conversa. **[CONFERIR]** Ajustar com minhas próprias palavras onde o motivo real foi outro.
- **Resultado da IA:** o que a IA entregou. Essas linhas foram redigidas pela própria IA, a meu pedido, e conferidas por mim.
- **Minha revisão:** o que eu observei ao testar. Onde ainda não registrei a minha observação, está marcado **[PREENCHER]**.
- **O que foi ajustado:** o que mudou no projeto por causa da revisão.
- **Evidência:** onde ver a prova (arquivo ou imagem da pasta `docs/`).

**Objetivo da atividade:** "Desenvolvam uma landing page, com tema livre, para treinar e explorar os benefícios do Vibecode." A avaliação olha o processo: como pensei, como conversei com a IA e como corrigi o caminho quando algo deu errado. Por isso a ordem abaixo inclui os erros, não só os acertos.

> **[PREENCHER]** Colar aqui o enunciado completo da atividade, exatamente como a professora enviou.

---

## Prompt 1: briefing inicial
**Meu pedido (trechos literais):** "O tema que eu quero é sobre o Racionais ... As paletas de cores vai ser as que a capa do álbum possui e também eu quero que ele seja bem chamativo ... quero que seja feito React, TypeScript, HTML, Tailwind. Mas antes de você começar a fazer o site quero que você tire duvidas de cada passo que você fazer. OBS: O site que eu te mandei é para você se basear no layout e não no tema que o link tem e nem na paleta de cores ... as paletas do site tem que seguir na risca com as paletas de cores do álbum." Enviei a capa do álbum junto e o link do Behance como referência de layout. **[PREENCHER]** Colar aqui o texto completo da mensagem original, se quiser o registro integral.

**Por que pedi assim:**
- Deixei a paleta e a stack fechadas logo de início, para a IA não escolher por conta própria.
- Separei "layout" de "tema e cores" para a referência não contaminar a identidade do Racionais.
- Pedi que a IA tirasse dúvidas antes de cada passo, porque queria participar das decisões e mostrar o processo, em vez de receber tudo pronto.

**Resultado da IA:** em vez de gerar o site, fez rodadas de perguntas (foco do site, idioma, quais cores usar). Respondi: "Homenagem ao Racionais MC's (álbum em destaque)", "Português" e "Todas: azul, preto, creme, vinho e laranja do asfalto".

**O que foi ajustado:** a IA passou a trabalhar por etapas e só avançou depois das minhas respostas. Isso aparece em `decisoes-design.md` (tabela de decisões).

**Evidência:** `docs/decisoes-design.md`, `docs/referencias/capa-album.png`.

---

## Correção 1: referência do Behance bloqueada
**Problema:** a IA não conseguiu abrir o link do Behance (o site bloqueia leitura automática).
**Como corrigi:** em vez de insistir no link, enviei 6 prints do projeto, que guardei em `docs/referencias/behance/` (hero, título gigante, números e serviços, "por que escolher", versão mobile, equipe).
**O que foi ajustado:** a IA passou a basear o layout nos prints. Nada foi inventado a partir de um link que ela não conseguiu ler.
**Aprendizado:** quando a IA não acessa uma fonte, enviar o material é mais confiável do que insistir.
**Evidência:** `docs/referencias/behance/01` a `06`.

---

## Prompt 2: direção estética (rua dos anos 90)
**Meu pedido (literal):** "Vou te mandar agora o Design e também quero que a estética seja mais Rua dos anos 90. Os prints que eu mandei para você é o design que você tem que se basear e colocar isso na estética dos Racionais e das ruas de São Paulo nos anos 90."

**Por que pedi assim:** os prints dão a estrutura (o "esqueleto"), e a estética de rua dos anos 90 dá a identidade. Pedi para traduzir um no outro, em vez de copiar o layout do Behance como está.

**Resultado da IA:** montou uma tabela de tradução do layout. Exemplos: o dente do hero virou a capa do álbum, os "serviços" viraram os singles, "Our Team" virou os integrantes. Propôs bordas grossas, sombras duras, textura de grão e rótulos em colchetes.

**O que foi ajustado:** o layout do Behance foi usado só como estrutura. As cores, o tema e as imagens são todos do Racionais.

**Evidência:** seção "Mapeamento do layout de referência" em `docs/decisoes-design.md`.

---

## Prompt 3: respostas de etapa (identidade visual)
**Minhas respostas (literais):** "Vou te enviar fotos do grupo/álbum que eu escolher"; "Stencil / placa"; "Sim, pode seguir assim"; "Só os 5 singles em destaque + 'ver todas'"; "Sim, usar como conceito visual" (Chora agora / Ri depois); fonte de títulos "Stardos Stencil"; fonte de textos "Barlow Condensed"; "Expande a lista na própria seção"; "Forte: faixa em movimento, parallax, animações ao rolar e hover".

**Por que pedi assim:** foi o momento de definir a identidade visual (IDV). Escolhi o estêncil porque lembra a placa de carro "RACIONAIS" da capa, e transformei o nome dos dois CDs ("Chora agora" e "Ri depois") em um conceito visual que organiza as cores do site (azul e preto de um lado, creme e vinho do outro).

**Resultado da IA:** consolidou as escolhas na tabela de decisões e definiu o uso das cores por lado do álbum.

**O que foi ajustado:** a paleta deixou de ser só "as cores da capa" e ganhou regra de uso (ver `paleta.md`). Os fundos das seções seguem o conceito dos dois lados.

**Evidência:** `docs/decisoes-design.md`, `docs/paleta.md`.

---

## Prompt 4: Hero
**Minhas respostas (literais):** "Capa inteira num card com borda grossa, ao lado do título gigante"; "Já na próxima mensagem".

**Por que pedi assim:** o hero é a primeira impressão e precisava ser bem chamativo, como pedi no Prompt 1. A capa inteira, com borda grossa, dá a cara de "cartaz de rua".

**Resultado da IA:** gerou uma Navbar fixa em formato de pílula, com menu mobile, e um Hero com o título "RACIONAIS" gigante em Stardos Stencil, a capa em card (borda de 6px, sombra dura, animação de flutuar) e os rótulos [ Chora agora ] e [ Ri depois ]. Aplicou a paleta como tokens do Tailwind e criou uma textura de grão em SVG. Limitação: entregou o código sem testar no navegador.

**Minha revisão:** ao rodar, o texto da esquerda ficou por cima do título e o título saiu cortado na borda direita (ver Correção 4).

**O que foi ajustado:** corrigido na Correção 4.

**Evidência:** `src/components/Hero.tsx`, `docs/referencias/correcoes/`.

---

## Prompt 5: Integrantes
**Meu pedido:** enviei 4 fotos e os nomes na ordem: "Mano Brown, Edi Rock, Ice blue e o Kl Jay". Respostas às perguntas da IA (literais): "Preto e branco com granulado; no hover volta a cor e o card sobe"; "Nome, função e uma frase curta sobre o integrante (eu pesquiso e você aprova)"; "Aprovo todas como estão".

**Por que pedi assim:** as fotos vieram de fontes diferentes, com tratamentos de cor diferentes. Preto e branco com granulado uniformiza o conjunto e combina com a estética de rua. Pedi que a IA pesquisasse as frases para eu aprovar antes de entrarem no site, para não publicar nada sem eu ter lido.

**Resultado da IA:** associou cada foto ao nome pela ordem que informei. Pesquisou uma frase para cada integrante, com fonte, e só usou depois da minha aprovação. Criou um arquivo de dados tipado (`integrantes.ts`) e um grid de 4 cards (foto P&B com grão, cor e elevação no hover, nome, função e frase). Escolheu grid em vez de carrossel por serem só 4 pessoas.

**Minha revisão:** na mensagem seguinte (Prompt 7) listei os ajustes que queria e a seção de integrantes não estava entre eles. **[PREENCHER]** Confirmar aqui, olhando no navegador, se os rostos ficaram bem enquadrados e se o hover funcionou.

**O que foi ajustado:** nada foi pedido para esta seção. Na verificação final, o título "INTEGRANTES" estourava a tela no celular e foi corrigido (Correção 5).

**Pendente:** os créditos das fotos (ver `pesquisas.md`, tabela de créditos).

**Evidência:** `src/components/Integrantes.tsx`, `src/data/integrantes.ts`, `docs/referencias/integrantes/`, fontes das frases em `docs/pesquisas.md`.

---

## Prompt 6: faixa em movimento, números e entrega em .zip
**Meu pedido (literal):** "Eu prefiro que seja frases de conceito, e quero que você me mande os arquivos em .zip e depois me fale o que eu tenho que colocar ou alterar para que funcione tudo corretamente". Em outra mensagem: "Como você quer que fique a parte da tabela de créditos das fotos, porque eu não sei como colocar da maneira correta> E nas linhas 'Resultado da IA...' quero que você escreva para mim e eu só coloco lá". E: "Eu não consigo testar agora se está funcionando tudo bonitrinho mas quando eu chegar na facul eu testo".

**Por que pedi assim:**
- Frases de conceito na faixa em movimento reforçam a identidade do álbum e deixam os nomes dos singles para a seção própria.
- Pedi o .zip e as instruções porque queria montar o projeto no meu computador.
- Pedi que a IA redigisse as linhas "Resultado da IA", porque ela sabe exatamente o que entregou. Eu fico com a parte da revisão.
- Avisei que só testaria na faculdade para a IA não prometer que estava testado.

**Resultado da IA:** montou o projeto completo e compilou sem erros (`npm run build`, que inclui a checagem de TypeScript). Criou a faixa em movimento (fundo vinho, frases de conceito, loop, pausa ao passar o mouse) e a seção de Números com contadores animados (2002, 21 faixas, 2 CDs, 5 singles), usando só dados confirmados em pesquisa. Converteu as fotos para JPG e reduziu o tamanho (a do Edi Rock foi de 1,3 MB para cerca de 100 KB). Gerou a pasta `docs/` e o README. Limitações: não houve teste visual e os links do menu para `#faixas` e `#importa` ainda não tinham seção de destino.

**Minha revisão:** ao rodar, tive dois erros de ambiente (Correções 2 e 3). Depois que o site abriu, apareceram os problemas do Hero (Correção 4).

**O que foi ajustado:** o zip passou a vir sem `package-lock.json` (Correção 3). As seções `#faixas` e `#importa` foram criadas no Prompt 7. O número de vendas ficou de fora porque não achei fonte confiável.

**Evidência:** `src/components/Marquee.tsx`, `src/components/Numeros.tsx`, `README.md`.

---

## Correção 2: PowerShell bloqueou o `npm install`
**Problema:** ao rodar `npm install` no PowerShell, o Windows bloqueou o script do npm ("a execução de scripts foi desabilitada neste sistema").
**Por que deu errado:** é uma política de segurança do PowerShell, que não tem a ver com o código do projeto.
**Como corrigi:** colei a mensagem de erro completa para a IA, que identificou que o problema era do sistema. Usei o Prompt de Comando (CMD), ou `npm.cmd install`, ou liberei scripts só para o meu usuário com `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
**O que foi ajustado:** o README ganhou a seção "Problemas comuns no Windows".
**Aprendizado:** colar o erro inteiro, em vez de descrever, deixa a IA achar a causa certa.

---

## Correção 3: erro "Cannot find native binding" no `npm run dev`
**Problema:** o Vite não abriu, com o erro "Cannot find native binding" (arquivo nativo do rolldown inválido para Windows).
**Por que deu errado:** o `package-lock.json` do zip foi gerado em Linux, e o npm às vezes instala errado as dependências opcionais quando o sistema operacional é outro.
**Como corrigi:** apaguei `node_modules` e `package-lock.json` e rodei `npm install` de novo. Funcionou.
**O que foi ajustado:** a IA tirou o `package-lock.json` do projeto e dos zips seguintes, e acrescentou essa solução ao README.
**Aprendizado:** dependências com arquivos nativos se comportam diferente entre sistemas. O conserto sugerido pela própria mensagem de erro resolveu.

---

## Prompt 7: Hero, botão do Spotify, Singles e Por que importa
**Meu pedido (literal):** "Beleza rodou agora vamos arrumar alguns detalhes, primeiro que as letras estão em cima do nome dos racionais, também o botão lá em em 'Ouvir agora' quero que vá para o link do álbum dos racionais ... Quero que você coloque na mesma pagina todos os singles quando a pessoa clicar em singles e também coloque um resumo do que a musica fala lembrando que tem que seguir a estética do site e também quero que quando a pessoa clique em cima da musica ele vai para o site do álbum, no porque importa quero que você pesquise sobre os racionais e coloque um biografia sobre a banda e também explica o porque eles são importante para sociedade. link: https://open.spotify.com/intl-pt/album/4HcPzKyKVtcZCwJgesoZWn". Enviei um print do Hero com o problema.

**Por que pedi assim:**
- Mandei o print do problema, em vez de descrevê-lo, para a IA ver exatamente o que eu via.
- Dei o link do Spotify no próprio pedido, para o botão e os cards irem para o lugar certo.
- Reforcei "seguir a estética do site" para as seções novas não parecerem de outro projeto.
- Pedi pesquisa e não texto livre, porque a seção "Por que importa" fala de fatos e precisa de fonte.

**Resultado da IA:**
- **Hero:** ver Correção 4.
- **Botão "Ouvir agora":** abre o álbum no Spotify em nova aba. A IA conferiu que o link é do álbum certo (21 faixas) e colocou o mesmo botão no menu do celular.
- **Singles:** 5 cards clicáveis (Vida Loka Pt. 1, Negro Drama, Jesus Chorou, Estilo Cachorro, Vida Loka Pt. 2) com número da faixa, CD, duração e resumo. Os resumos foram escritos com palavras próprias, a partir de análises das letras, sem copiar trechos (direitos autorais). O botão "Ver todas as 21 faixas" expande a lista na própria seção, separada por CD.
- **Por que importa:** biografia em 3 parágrafos, linha do tempo (1988 a 2023), 4 blocos de importância social, uma citação em destaque e links para as fontes.
- **Pesquisa crítica:** as fontes divergiam em alguns pontos (data de lançamento, vendas, ano da leitura obrigatória na Unicamp, quantos integrantes receberam o título). A IA registrou cada divergência e como o site resolveu (por exemplo: usar só o ano de lançamento, e "mais de 500 mil" nas vendas). Também registrou uma visão crítica ao título da Unicamp que não entrou no site, por ser uma homenagem.

**Minha revisão:** **[PREENCHER]** Escrever aqui, depois de olhar no navegador, se os resumos ficaram claros, se a biografia está como eu queria e o que mais precisou ajustar.

**O que foi ajustado:**
- Até o Prompt 6, os links `#faixas` e `#importa` do menu não levavam a lugar nenhum. Agora levam às seções.
- O Spotify só tem o link do álbum informado, então os cards levam ao álbum, não à faixa específica.
- A divisão dos singles por CD (CD 1 ou CD 2) foi deduzida da ordem das faixas. Isso está registrado como inferência em `pesquisas.md` e precisa ser conferido no encarte do álbum.

**Evidência:** `src/components/Singles.tsx`, `src/components/Importa.tsx`, `src/data/`, `docs/pesquisas.md`.

---

## Correção 4: Hero com texto sobre o título e título cortado
**Problema (visto no print que enviei):** o texto "RUA DE SÃO PAULO / VOZ DA PERIFERIA / ÁLBUM DUPLO DE 2002" ficava por cima do título "RACIONAIS", e o título saía cortado na borda direita da tela.
**Por que deu errado:** o título estava posicionado de forma absoluta, com 20% da largura da tela, e o parallax o empurrava para baixo, em direção ao texto. A IA não tinha testado no navegador (ver Prompt 4).
**Como a IA corrigiu:**
- O título passou a ficar no fluxo normal da página, acima do texto. Assim o texto nunca sobe sobre ele, em nenhuma largura de tela.
- O tamanho do título caiu de 20% para 16% da largura da tela, para não ser cortado.
- O parallax passou a subir o título (afasta do texto) em vez de descer.
- Só a capa sobe um pouco por cima do final do título, como o dente cobre parte do título na referência. Esse é o único cruzamento que sobrou, e é proposital.
**Como foi conferido:** teste automatizado em navegador, em 16 larguras de 320 a 1920 px. Em nenhuma o texto toca o título, o título cabe inteiro e não há rolagem horizontal. Refeito na auditoria final sobre o .zip (ver `checklist-requisitos.md`).
**Aprendizado:** mandar o print do problema foi mais rápido e preciso do que descrever. E "gerou o código" não quer dizer "está certo": só o teste no navegador mostrou o defeito.
**Evidência:** `docs/referencias/correcoes/hero-ANTES-bug-sobreposicao.png`, `hero-DEPOIS-1366.png` e `hero-DEPOIS-celular-390.png`.

---

## Correção 5: defeitos que a IA achou nos próprios testes
Depois do Prompt 7, a IA rodou o site em um navegador automatizado, em vez de só compilar, e achou estes defeitos antes de eu os ver:

| Defeito | Causa | Ajuste |
|---|---|---|
| O título "INTEGRANTES" estourava a largura do celular | tamanho de fonte fixo para uma palavra longa | tamanho escalável com a tela (`text-[11vw]` no celular, maiores a partir de `sm`) |
| Os 4 blocos de importância estouravam em telas de ~1024 px | 4 colunas cedo demais | 4 colunas só a partir de `xl` |
| "VIDA LOKA, PT." ficava com o "1" sozinho na linha de baixo | quebra de linha ruim | `text-balance` no título |
| A seção Singles era mais estreita que as outras | contêiner diferente | `max-w-7xl`, igual ao resto |
| Aspas retas nos textos | digitação | aspas tipográficas (“ ”) |
| Frase do honoris causa gramaticalmente torta | redação | reescrita ("cujos integrantes foram reconhecidos como…") |

## Correção 6: aviso `EBUSY` no `npm install` (Windows)
**Problema:** ao rodar `npm install` no último .zip, o npm mostrou `npm warn cleanup Failed to remove some directories ... EBUSY: resource busy or locked` para a pasta `@oxlint\binding-linux-arm-musleabihf`.
**Causa:** é um aviso, não um erro. O npm baixa o arquivo nativo do lint de vários sistemas e depois remove os que não servem ao meu. No Windows, a pasta ficou bloqueada por um instante (antivírus ou indexador de arquivos) e o npm não conseguiu apagá-la.
**Como confirmei que não era problema:** a instalação terminou com `added 44 packages` e `found 0 vulnerabilities`. Colei a mensagem inteira para a IA, que identificou que o aviso é inofensivo e que a pasta não é usada no Windows.
**O que foi ajustado:** nada no código. Segui para `npm run dev`. Se o erro voltar, a solução é apagar `node_modules` e rodar `npm install` de novo (mesma solução da Correção 3).
**Aprendizado:** nem toda mensagem em amarelo (`warn`) é erro. Antes de mexer em qualquer coisa, vale ver se a instalação terminou com sucesso.

**Aprendizado:** pedir à IA que teste, e não só que gere, achou seis defeitos que eu veria só depois.

---

## Prompt 8: auditoria final e este registro
**Meu pedido (literal):** "Agora quero que você faça uma verificação profunda se nesse ultimo arquivo .zip mandado todos os requisitos que a atividade pede estão realizados e coloque o porque e o que foi ajustado em cada prompt para que a professora avalie bem a minha atividade."

**Por que pedi assim:** a atividade avalia o processo, e o `prompts.md` anterior resumia as etapas sem mostrar o porquê de cada decisão. Pedi uma checagem independente, sobre o zip como entregue, para ter certeza de que nada ficou faltando antes de entregar.

**Resultado da IA:** extraiu o .zip em uma pasta limpa, instalou do zero e testou. Resultados completos em `checklist-requisitos.md`.
- Build e TypeScript: sem erros. Lint: sem avisos.
- Teste no navegador: sem erros no console, sem rolagem horizontal em 16 larguras, âncoras do menu válidas, "Ouvir agora" e os 5 cards apontam para o álbum certo, as 21 faixas aparecem (11 no CD 1 e 10 no CD 2).
- Paleta: nenhum código de cor fora das 9 cores da capa. As 9 existem na capa (conferido por pixels).
- Acessibilidade básica: 1 título principal, imagens todas com texto alternativo, links e botões todos com nome, links externos com `noopener`.

**O que foi ajustado:** a auditoria não achou defeito no site. Os ajustes foram na documentação:
- `prompts.md` reescrito, com "por que pedi assim", "o que foi ajustado" e evidência em cada etapa.
- Novo `checklist-requisitos.md`, que liga cada requisito à prova.
- Novas evidências: `docs/referencias/paleta-vs-capa.png` e `docs/ferramentas/conferir-paleta.py` (conferem a paleta contra a capa) e os prints antes/depois do Hero.
- Pendências que dependem de mim estão marcadas com **[PREENCHER]**.