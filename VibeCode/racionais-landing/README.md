# Racionais MC's: Nada Como um Dia Após o Outro Dia

Landing page de homenagem ao Racionais MC's e ao álbum duplo "Nada Como um Dia Após o Outro Dia, Vol. 1 & 2" (2002). Atividade de Vibecode (FIAP).

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4.

## Como rodar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Problemas comuns no Windows

- **"A execução de scripts foi desabilitada" no PowerShell:** use o Prompt de Comando (CMD) ou `npm.cmd install`.
- **"Cannot find native binding" ao rodar `npm run dev`:** apague a pasta `node_modules` (e o `package-lock.json`, se existir) e rode `npm install` de novo.

## Estrutura

```
docs/                  registros da atividade
  checklist-requisitos.md  requisitos da atividade, resultados da auditoria e pendências
  prompts.md           prompts, por quê, resultados, correções e evidências
  pesquisas.md         pesquisas, fontes, divergências e créditos das fotos
  decisoes-design.md   decisões de design
  paleta.md            paleta extraída da capa
  ferramentas/         script que confere a paleta contra a capa
  referencias/         prints do Behance, capa, fotos, paleta e prints antes/depois do Hero
src/
  components/          Navbar, Hero, Marquee, Numeros, Singles, Importa, Integrantes, Reveal
  hooks/               useScrollY (parallax), useReveal (animação ao rolar)
  data/                faixas, singles, importancia, integrantes, links
  assets/              capa e fotos dos integrantes
  index.css            tokens de cor, fontes e animações
```

## Onde mudar o conteúdo

- Link do Spotify: `src/data/links.ts`
- Resumos dos singles: `src/data/singles.ts`
- Lista das 21 faixas: `src/data/faixas.ts`
- Biografia, linha do tempo e importância: `src/data/importancia.ts`
- Integrantes: `src/data/integrantes.ts`

## Status

Feitas: Navbar, Hero, Faixa em movimento, Números, Singles (com lista das 21 faixas), Por que importa, Integrantes.
Auditoria final feita (ver `docs/checklist-requisitos.md`). Falta o autor preencher o que está marcado com **[PREENCHER]** em `docs/prompts.md` e `docs/pesquisas.md` (créditos das fotos).
Opcional: rodapé com créditos das fotos.
