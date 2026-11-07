# Relatório de uso de IA — Aula 8 (Hooks + Zustand)

## Declaração

Declaro que utilizei a(s) ferramenta(s) de Inteligência Artificial **Claude Code (CLI da Anthropic), com o modelo Claude Opus 5.5** nesta atividade, com a finalidade de gerar um rascunho sobre **a implementação dos TODOs da Aula 8 — `useState`, `useEffect`, `useContext`, store global com `zustand` e persistência local com `AsyncStorage` e `expo-sqlite`**, sobre o qual realizei análise crítica (curadoria) das informações apresentadas. Não tratei dados pessoais no uso desta ferramenta. Revisei criticamente o conteúdo gerado, identificando seus acertos e eventuais imprecisões, e assumo a responsabilidade integral pela versão final apresentada.

## Ferramenta e forma de uso

| Item | Detalhe |
|---|---|
| Ferramenta | Claude Code (agente de linha de comando) |
| Modelo (LLM) | Claude Opus 5.5 (`claude-opus-5-5`) |
| Skills / Agents | Nenhuma skill ou subagente usado. Um único agente fez todo o trabalho. |
| Entrada fornecida | Enunciado da atividade e link do `exercises.md`. Nenhum dado pessoal. |
| Etapas em que a IA atuou | Leitura do enunciado, localização dos TODOs, rascunho do código, checagem de tipos e build, rascunho deste relatório. |

O agente fez estes passos:

1. Baixou o `exercises.md` e criou a branch `feature/aula_08_hooks_zustand` a partir do repositório do professor.
2. Listou os TODOs com `grep`. Separou os da Aula 8 (`TODO Ex …` e `TODO Atividade Aplicada …`) dos TODOs antigos da Aula 5 (localização e câmera), que ficaram fora do escopo.
3. Escreveu o código de cada TODO.
4. Rodou `tsc --noEmit` (sem erros) e `expo export --platform android` (bundle gerado sem erros).

## O que foi implementado

| Exercício | Arquivo | Resumo |
|---|---|---|
| Ex 1 — `useState` | `src/screens/tela-habitos-rapidos.tsx` | Adição com spread, alternância com `.map()`, remoção com `.filter()`, contador com `prev => prev + 1`. |
| Ex 2 — `useEffect` | `src/components/focus-timer.tsx` | Sai cedo se pausado, `setInterval` de 1 s, cleanup com `clearInterval`, dependência `[isRunning]`. |
| Ex 3 — `useContext` | `src/context/theme-context.tsx`, `src/screens/tela-configuracoes.tsx` | Contexto, Provider, `useTheme()` que lança erro fora do Provider, `Switch` ligado ao tema. |
| Ex 4 — `zustand` | `src/store/use-habit-store.ts`, `src/screens/tela-estatisticas.tsx` | Ações imutáveis e estatísticas (total, concluídos, pendentes, %) via seletor. |
| Ex 5 — persistência | `src/store/use-habit-store.ts`, `src/services/focus-db.ts` | `persist` + `createJSONStorage(() => AsyncStorage)` com a chave `@habits:store`. Tabela `focus_logs` no SQLite com `execAsync`, `runAsync` e `getAllAsync`. |
| Atividade aplicada | `tela-habitos.tsx`, `tela-detalhe-habito.tsx` | Home ligada à store, detalhe com concluir/excluir + `router.back()` e cronômetro de foco, tema escuro nas telas da atividade. |

## Análise crítica do código gerado

### Acertos

- **Imutabilidade.** Nenhuma lista usa `.push()` ou `.splice()`. Todas as atualizações criam um novo array.
- **Cleanup do timer.** O `return () => clearInterval(intervalId)` cobre os dois casos: pausar (`isRunning` muda) e sair da tela (desmontagem).
- **Regras dos Hooks.** Na tela de detalhe, todos os hooks vêm antes do `if (!habit) return …`.
- **Seletores no Zustand.** Cada tela assina só o pedaço da store que usa. Isso evita renderizações extras.
- **SQL seguro.** `runAsync` usa placeholders `(?, ?)`, sem concatenar valores na query.
- **`useTheme()` lança erro.** O código inicial devolvia um tema falso fora do Provider. A IA trocou por um `throw`, como o enunciado pede. Isso mostra o erro logo, em vez de esconder o bug.

### Imprecisões e pontos discutíveis

1. **`toggleTheme` mistura dois estilos.** Ele usa `setIsDark(prev => !prev)`, mas calcula o valor salvo no disco com `!isDark`, lido do closure. Em uso normal os dois valores coincidem. Com dois toques no mesmo frame, o disco pode ficar diferente da tela. Uma versão mais sólida salvaria o tema num `useEffect` que observa `isDark`, pulando a primeira renderização.
2. **Piscada no tema e na lista.** O `AsyncStorage` é assíncrono. Ao abrir o app, a tela aparece no tema claro e com os 2 hábitos iniciais, e só depois carrega os dados salvos. O código não trata isso (por exemplo, com `useHabitStore.persist.hasHydrated()` ou um estado `carregando`).
3. **Ids com `Date.now()`.** Dois hábitos criados no mesmo milissegundo teriam o mesmo id. É raro num app com um usuário, mas `crypto.randomUUID()` ou um contador seria mais seguro.
4. **Escopo a mais, que eu removi.** O primeiro rascunho da IA trazia coisas que o enunciado não pede: `partialize` no `persist`, prop `onFinish` no `FocusTimer` para salvar a sessão no SQLite, botão "Excluir" e estado vazio na Home, uma paleta escura em `theme.ts` e cache da conexão com o SQLite. Pedi para tirar tudo isso e manter o código simples e fiel ao código de partida.
5. **Tela "Hábito não encontrado" por um instante.** Ao excluir, `removeHabit` roda antes de `router.back()`. Por um frame, a tela pode mostrar "Hábito não encontrado" antes de voltar.
6. **Validação limitada.** A IA só checou tipos e gerou o bundle. Ela não rodou o app num aparelho ou emulador. Os itens do checklist (persistir ao fechar o app, atualizar a aba Stats na hora, etc.) precisaram de teste manual meu no Expo Go.

### Grau de acerto

O código compilou de primeira e atende aos requisitos do enunciado. Os erros encontrados são de robustez (itens 1, 2, 3 e 5) e de escopo (item 4, já corrigido), não de funcionamento básico. Avalio o acerto como **alto para os exercícios guiados (Ex 1 a 5)** e **bom para a atividade aplicada**, que exigiu revisar as decisões extras e testar no aparelho.

## Checklist de entrega (conferido manualmente)

- [ ] Adicionar um hábito na Home faz o contador da aba Estatísticas subir na hora
- [ ] Marcar como concluído em `/habit/[id]` e voltar atualiza o ícone na Home
- [ ] Excluir em `/habit/[id]` remove o item e volta (`router.back()`)
- [ ] Fechar e reabrir o app mantém hábitos e status
- [ ] O cronômetro inicia, pausa e limpa o `setInterval` no `return` do `useEffect`
- [ ] O tema escuro muda fundo e texto nas telas
- [ ] Nenhuma lista é mutada com `.push()` ou `.splice()`
