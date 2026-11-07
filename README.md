# Habit Tracker Expo

**Disciplina:** Desenvolvimento Mobile (2026.2.DM) — CESAR School
**Branch:** `feature/01_aula_intro`

## Sobre o projeto

Rastreador de Micro-hábitos e Condicionamento Físico: um aplicativo voltado para rotina e bem-estar, onde o usuário registra pequenos hábitos diários e monitora suas atividades físicas e treinos.

Este projeto é usado nas atividades guiadas e aplicadas da disciplina ao longo do semestre. Cada aula adiciona uma camada nova por cima da anterior — o histórico de commits desta branch é, em si, um registro do progresso.

## Estado atual — Aula 1

Scaffold do Expo (`create-expo-app`, template `blank-typescript`) mais os **esqueletos** das atividades da Aula 1. Nenhuma modelagem de domínio está implementada: os arquivos existem com comentários `TODO` no lugar do código que é sua tarefa escrever.

| Onde | O que é | Referência em `exercises.md` |
|---|---|---|
| `exercicios/ex03.ts` … `ex06.ts` | Exercícios guiados, TypeScript puro, fora do app | Exercícios 3 a 6 |
| `src/types/habito.ts` | Modelagem do domínio | Atividade 1 · TODO A1.1 – A1.5 |
| `src/services/habitoService.ts` | Camada de dados falsa | Atividade 1 · TODO A1.6 – A1.9 |
| `App.tsx` | Tela do hábito do dia | Atividade 1 · TODO A1.10 – A1.14 |

> ⏳ **Ordem sugerida.** Os TODO **A1.1 a A1.9** são TypeScript puro e podem ser feitos logo após a Aula 1. O `App.tsx` (**A1.10 a A1.14**) usa componentes de React Native, apresentados na **Aula 2** — deixe para depois dela.

## Como rodar

```bash
npm install
npx expo start
```

Abra o app **Expo Go** no celular e escaneie o QR code (ou use um emulador). Requisito: **Node.js 22.11+**.

Para verificar os tipos do app:

```bash
npx tsc --noEmit
```

Para verificar os exercícios guiados (que têm `tsconfig.json` próprio, fora do app):

```bash
npx tsc --noEmit -p exercicios
```

Nos dois casos, o estado inicial passa limpo. Conforme você substitui os `never` pelos tipos de verdade, o compilador passa a cobrar as implementações que faltam — é assim que ele guia a atividade.

## Como funciona o esqueleto

- Onde houver `never` com o comentário `← substitua`, é sua vez de escrever.
- Onde houver `throw new Error('TODO ...')`, substitua o corpo inteiro da função.
- Blocos marcados como **VERIFICAÇÃO** não devem ser apagados. Vêm comentados: descomente uma linha de cada vez e confirme o comportamento descrito ao lado. Parte delas **precisa dar erro de compilação** — quando o compilador reclama, o exercício está certo.

## Próximos passos

Resolva os `TODO` na ordem em que aparecem e mantenha **um commit por exercício** (ou por bloco), para que o histórico da branch sirva de evidência de progresso.

O conteúdo da Aula 2 (Core Components, props tipadas, `CardHabito`, `Cabecalho`) vive na branch `feature/02_aula_react_native`.

## Estado atual — Aula 3

Esqueletos da **Atividade 1** de `exercises.md` (Core Components — domínio `Habito`): sistema de tokens, um componente `Card` reutilizável e um formulário de criar/editar hábito. Os TODOs seguem a numeração do enunciado (1 a 24, contínua entre os três arquivos).

| Onde | O que é | Referência em `exercises.md` |
|---|---|---|
| `src/theme.ts` | Tokens de cor, espaço e tipografia | Atividade 1 · TODO 1 – 4 |
| `src/components/Card.tsx` | Card genérico reutilizável, com variante `destacado` | Atividade 1 · TODO 5 – 10 |
| `src/screens/HabitoForm.tsx` | Formulário de criar/editar `Habito` | Atividade 1 · TODO 11 – 24 |

Notas sobre o esqueleto desta aula:

- `Card.tsx` (o componente genérico do tema) é diferente de `CardHabito.tsx` (o card específico do domínio, da Aula 2) — os dois convivem no projeto, com responsabilidades diferentes.
- `HabitoForm.tsx` ainda não está ligado a nenhuma navegação — a Aula 3 não cobre isso. O próprio arquivo explica, em comentário, como pré-visualizá-lo temporariamente a partir de `App.tsx`.
- O estado inicial compila limpo (`npx tsc --noEmit`), mas está incompleto: `theme.ts` começa com tokens vazios de propósito, então não referencie `cores`/`espaco`/`tipografia` em código real antes de completá-los — só nos comentários `TODO`, como já está no esqueleto.
- A Atividade 2 (auditoria de estilo) é um relatório em Markdown, não código — não tem esqueleto neste repositório.

## Estado atual — Aula 4

Esqueletos da Aula 4 (**Pressable, FlatList e SectionList** — domínio `Habito`): os
exercícios guiados da Parte 1 e a **Atividade 1**, que transforma a tela da Aula 3 numa
lista de produto. Como na Aula 3, os TODOs seguem uma **numeração contínua entre todos os
arquivos** — de 1 a 82, na ordem em que se resolve.

| Onde | O que é | Referência em `exercises.md` | TODOs |
|---|---|---|---|
| `exercicios/aula-04/` | Exercícios guiados 1 a 7 (sandbox, fora do build do app) | Parte 1 | 1 – 42 |
| `src/data/habitos.ts` | O mock da lista — 20+ itens | Atividade 1 · esqueleto 1 | 43 |
| `src/lib/agrupar.ts` | `agrupar` e `filtrarPorTitulo` — funções puras, sem JSX | Atividade 1 · esqueleto 2 | 44 – 47 |
| `src/components/botao-acao.tsx` | O `BotaoAcao` reutilizável (o do Exercício 3) | Atividade 1 · item 5 | 48 – 50 |
| `src/components/item-habito.tsx` | O item tocável: toque curto alterna, longo remove | Atividade 1 · esqueleto 3 | 51 – 56 |
| `src/components/lista-vazia.tsx` | Os **dois** estados vazios, com textos diferentes | Atividade 1 · esqueleto 4 | 57 – 58 |
| `src/screens/tela-habitos.tsx` | A tela principal com `SectionList` e os quatro estados | Atividade 1 · esqueleto 5 | 59 – 70 |
| `README.md` (aqui, abaixo) | A seção "Decisões da Aula 4" | Atividade 1 · item 6 | 71 – 73 |
| `auditoria-lista.md` | Auditoria de lista em código alheio | Atividade 2 | 74 – 79 |
| `diff.md` | Refazer a lista da Aula 3 *(bônus, opcional)* | Atividade 3 | 80 – 82 |

Notas sobre o esqueleto desta aula:

- **Os exercícios guiados ficam fora do app.** `exercicios/aula-04/` tem `tsconfig.json`
  próprio e não entra no build do Expo — o enunciado pede um sandbox descartável, e é isso
  que ele é. A entrega avaliada é a Atividade 1, em `src/`.
- **Os arquivos da Aula 4 usam `kebab-case`**, como no enunciado (`item-habito.tsx`,
  `lista-vazia.tsx`). Os da Aula 2 e 3 estão em `PascalCase` — os dois convivem; não
  renomeie o que já existe só por consistência.
- **Nada foi ligado ao `App.tsx`.** `tela-habitos.tsx`, como o `HabitoForm.tsx` da Aula 3,
  ainda não tem navegação (isso é Aula 6). Cada arquivo explica em comentário como
  pré-visualizá-lo temporariamente.
- **O estado inicial compila limpo** (`npx tsc --noEmit` e
  `npx tsc --noEmit -p exercicios/aula-04`) e **roda**: onde falta implementação há um
  valor de espera (`null`, `[]`, o array devolvido sem mudança). Compila e roda, mas não
  faz o que o exercício pede — é isso que os TODOs cobram.
- `src/components/item-habito.tsx` é mais um card de hábito no projeto, ao lado de
  `CardHabito.tsx` (Aula 2) e `Card.tsx` (Aula 3). Ele não substitui nenhum dos dois: o
  TODO 55 pede justamente que o `Card` da Aula 3 seja reaproveitado por dentro dele.

## Decisões da Aula 4

> Seção exigida pela Atividade 1 (item 6). Responda **em texto corrido**, com critério —
> "porque é melhor" não é resposta.

**Por que `SectionList` e não `FlatList` neste caso?**

O critério de agrupamento é o **status** (`Pendentes` → `Concluídos` → `Pulados`, em
`src/lib/agrupar.ts`). Numa lista plana os três estados ficam embaralhados e o usuário
precisa ler o rótulo de cada item para saber o que ainda falta fazer; com as seções, "o
que falta" é um bloco inteiro no topo da tela, visível sem leitura item a item. O
cabeçalho fixo (`stickySectionHeadersEnabled`) mantém essa resposta na tela mesmo depois
de rolar — é isso que a `FlatList` não daria.

**Onde vocês agrupam os dados, e por que não é dentro do JSX?**

O agrupamento mora em `src/lib/agrupar.ts`, em funções puras, e não dentro do JSX: JSX é
para descrever tela, e uma função que só transforma dado pode ser lida, testada e trocada
sem abrir um componente. Dentro do render ela também recalcularia tudo a cada toque.

A ordem é **filtrar e depois agrupar** — `agrupar(filtrarPorTitulo(habitos, busca))`. Ela
importa por dois motivos: agrupar antes significaria montar seções para itens que a busca
vai descartar (trabalho jogado fora), e, pior, as seções ficariam com a contagem errada —
apareceria um cabeçalho "Concluídos" sem nenhum item embaixo, que é exatamente o ruído que
o descarte de grupos vazios existe para evitar.

**O que acontece com o cabeçalho de seção em cada plataforma, e o que vocês decidiram?**

O default da `SectionList` difere por plataforma: no **iOS** o cabeçalho de seção fica
**fixo** no topo enquanto a seção rola (`stickySectionHeadersEnabled` é `true`), e no
**Android** ele **rola junto** com os itens (`false`). Fixamos `stickySectionHeadersEnabled`
explicitamente no código, ligado nas duas plataformas.

Deixar no default seria terceirizar uma decisão de produto para o sistema operacional: o
mesmo app responderia "em que grupo eu estou?" de dois jeitos diferentes conforme o
aparelho, sem que ninguém tivesse decidido isso. Como o agrupamento é por status e a lista
é longa, saber em que bloco se está enquanto rola é justamente o valor da seção — então o
comportamento fixo é o certo, e ele é o certo nos dois lugares.

## Estado atual — Aula 5

Esqueletos da Aula 5 (**sensores, GPS e câmera** — `expo-location`, `expo-sensors`,
`expo-camera`, `expo-image`): os exercícios guiados da Parte 1, a **Atividade 1** (a tela
"Registrar hábito"), a **Atividade 2** (auditoria) e a **Atividade 3** (bônus).

Os TODOs dos **exercícios guiados** seguem a numeração do enunciado (**1 a 25**). Os das
**atividades aplicadas** usam o prefixo da aula (**5.1 a 5.33**), como na Aula 4.

> 🔴 **Precisa de aparelho físico.** O iOS Simulator não tem câmera, acelerômetro nem
> giroscópio. O Android Emulator tem sensores virtuais e uma câmera de cena virtual —
> serve para testar o fluxo, não a experiência. Traga o celular carregado, com o Expo Go
> instalado e o cabo.

| Onde | O que é | Referência em `exercises.md` | TODOs |
|---|---|---|---|
| `exercicios/aula-05/respostas/ex-01-associacao.md` | Qual pacote e qual função, 14 situações | Exercício 1 | tabela em branco |
| `exercicios/aula-05/respostas/ex-02-caca-ao-erro.md` | Os 7 problemas da tela de câmera de 2023 | Exercício 2 | 7 lacunas |
| `exercicios/aula-05/ex-03-onde-eu-estou.tsx` | GPS com os três caminhos de falha | Exercício 3 | 1 – 6 |
| `exercicios/aula-05/ex-04-chacoalhada.tsx` | Acelerômetro e magnitude do vetor | Exercício 4 | 7 – 11 |
| `exercicios/aula-05/ex-05-camera-previa.tsx` | `CameraView` e os três estados de permissão | Exercício 5 | 12 – 18 |
| `exercicios/aula-05/ex-06-giroscopio.tsx` | Giroscópio *(casa)* | Exercício 6 | 19 – 23 |
| `exercicios/aula-05/ex-07-galeria-que-pisca.tsx` | Os 4 defeitos de imagem *(casa)* | Exercício 7 | 24 – 25 |
| `src/types/habito.ts` | `LocalHabito` + os campos opcionais `local` e `fotoUri` | Atividade 1 · esqueleto 1 | — (dado) |
| `src/components/CardHabito.tsx` | Miniatura da foto e o local no card | Atividade 1 · esqueleto 2 | 5.1 |
| `src/lib/formatar-local.ts` | `formatarLocal()` — função pura, sem JSX e sem sensor | Atividade 1 · item 1 | 5.2 |
| `src/services/localizacao.ts` | A camada que fala com o GPS e devolve a falha exata | Atividade 1 · itens 1 e 4 | 5.3 – 5.8 |
| `src/components/camera-habito.tsx` | A câmera, com os três estados de permissão | Atividade 1 · item 2 | 5.9 – 5.14 |
| `src/screens/tela-registrar-habito.tsx` | A tela "Registrar hábito" | Atividade 1 | 5.15 – 5.20 |
| `src/screens/tela-habitos.tsx` | Abre o registro por condicional e recebe o hábito novo | Atividade 1 · item 3 | 5.21 – 5.22 |
| `src/components/item-habito.tsx` | Repassa foto, local e `recyclingKey` ao card | Atividade 1 · item 3 | 5.23 |
| `README.md` (aqui, abaixo) | A seção "Decisões da Aula 5" | Atividade 1 · critérios | 5.24 – 5.27 |
| `auditoria-aula5.md` | Auditoria da `TelaTreino` | Atividade 2 | esqueleto do relatório |
| `src/screens/tela-nivel-bolha.tsx` | O nível de bolha *(bônus, opcional)* | Atividade 3 | 5.28 – 5.33 |

Notas sobre o esqueleto desta aula:

- **Os exercícios guiados ficam fora do app.** `exercicios/aula-05/` tem `tsconfig.json`
  próprio e não entra no build do Expo (`npx tsc --noEmit -p exercicios/aula-05`). Cada um
  pode ser pré-visualizado descomentando a linha correspondente em `App.tsx`.
- **Os Exercícios 1 e 2 são no papel**, e por isso viram Markdown em
  `exercicios/aula-05/respostas/` — mesma convenção da Aula 4.
- **O estado inicial compila limpo e roda**, mas não faz o que o exercício pede: onde
  falta implementação há um valor de espera (uma string vazia, um `return` de falha, uma
  posição fixa da bolha). É isso que os TODOs cobram.
- **`app.json` já tem as descrições de permissão** (`infoPlist` do iOS, `permissions` do
  Android) e os plugins de `expo-location`, `expo-camera` e `expo-sensors`. No Expo Go elas
  não são obrigatórias; num build de verdade, a ausência delas reprova na App Store.
- **O contrato de três tempos aparece em branco** no topo de cada arquivo que usa sensor.
  Preenchê-lo vale 25% da nota da Atividade 1 — não é comentário decorativo.

## Decisões da Aula 5

> Seção exigida pela Atividade 1 (critérios "Uso correto das APIs" e "Honestidade
> técnica"). Responda **em texto corrido**, com critério — "porque é melhor" não é
> resposta.

**Qual `Accuracy` vocês escolheram, e por quê?**

Usamos **`Location.Accuracy.Balanced`** (~100 m) em `src/services/localizacao.ts`. A
pergunta que o campo precisa responder é "em que academia o treino aconteceu", e uma
academia ocupa um quarteirão: 100 m distinguem bairros e endereços, que é toda a precisão
que a tela consome.

O nível acima, `High` (~10 m), liga o GPS em potência cheia e normalmente leva vários
segundos a mais para fixar sinal — bateria e espera pagos por uma precisão que nenhuma
parte do app usa; `BestForNavigation` é mais caro ainda e existe para desenhar o trajeto de
quem está em movimento. O nível abaixo, `Low` (~1 km), é o mais barato dos três, mas a essa
escala duas academias do mesmo bairro viram o mesmo ponto, que é exatamente o erro que não
podemos cometer.

O `accuracy` devolvido **não é descartado**: ele vira o campo `precisaoMetros` do
`LocalHabito` e aparece na tela como **raio**, escrito por `formatarLocal()` —
`📍 -8.0632, -34.8711 · precisão de ± 87 m`. Como `coords.accuracy` é `number | null`, há um
`?? 0` na leitura. A coordenada é arredondada em 4 casas decimais (~11 m) porque mais casas
seriam inventar uma certeza que o aparelho não tem.

**Os cinco estados de falha: qual mensagem cada um mostra, e o que o usuário faz depois?**

São cinco situações, cinco mensagens e — o ponto todo — **cinco ações diferentes**:

| Situação | Onde é decidida | O que a mensagem diz | Ação do usuário |
|---|---|---|---|
| Localização **negada** (`status !== 'granted'`, `canAskAgain: true`) | `services/localizacao.ts` → `'permissao-negada'` | "Sem a localização não dá para registrar onde o treino aconteceu. Toque em *Usar minha localização* de novo e escolha *Permitir*." | Tocar no botão de novo e aceitar o diálogo |
| Localização **bloqueada** (`canAskAgain: false`) | `services/localizacao.ts` → `'permissao-bloqueada'` | "A permissão está bloqueada… o diálogo não vai mais aparecer sozinho." | Sair do app e abrir Configurações → Habit Tracker → Localização |
| **Serviço** de localização desligado (`hasServicesEnabledAsync()` false) | `services/localizacao.ts` → `'servico-desligado'` | "A localização do aparelho está desligada." | Ligar o GPS nas configurações rápidas — não mexer em permissão nenhuma |
| **Câmera negada** | `components/camera-habito.tsx` | Explica para que serve a câmera e onde a foto fica; botão "Permitir câmera" quando `canAskAgain`, texto de Configurações quando não | Tocar em "Permitir câmera" — ou "Salvar sem foto", que é a saída oferecida na mesma tela |
| **Hardware indisponível** (GPS que não responde; acelerômetro ausente) | `localizacao.ts` → `'hardware-indisponivel'`; `isAvailableAsync()` no nível de bolha | "Não foi possível ler o GPS deste aparelho. Você pode salvar o hábito sem o local." | Nenhuma configuração resolve: a ação é seguir sem o recurso |

Note que nenhuma das cinco pede a mesma coisa. "Tocar de novo" e "abrir as Configurações"
parecem próximas, mas são opostas: no segundo caso o botão nunca mais vai funcionar, e
mandar o usuário tocar nele seria mentir.

**O que o app faz quando o usuário nega tudo?**

Nada quebra, e nada fica pela metade.

Na **tela de registro**, os dois blocos ("Onde foi" e "Como foi") continuam funcionando
como blocos opcionais: sem local nem falha, o texto diz "Opcional. Sem localização o hábito
é salvo do mesmo jeito"; sem foto, ele diz que é opcional e **onde a foto vai parar** (cache
do app, nem galeria nem internet). O botão "Salvar hábito" depende **só do título** — nunca
de permissão. Na tela da câmera negada há um botão "Salvar sem foto" que fecha a câmera e
devolve o usuário ao formulário.

Na **lista**, o `CardHabito` reserva o mesmo espaço da miniatura com uma moldura tracejada
quando `fotoUri` é `undefined`, para que os cards não fiquem com alturas diferentes, e
simplesmente não renderiza a linha de local quando `local` é `undefined`. O
`accessibilityLabel` do item diz "sem foto" e "sem localização" em palavras, porque o leitor
de tela não enxerga a moldura vazia.

Os dois campos são **opcionais no tipo** (`local?`, `fotoUri?`) porque é o tipo que decide
se o app pode funcionar para quem disse "não". Se `Habito` exigisse os dois, seria
impossível *construir* o objeto sem as permissões — o erro subiria do TypeScript para o
runtime e o app quebraria justamente para o usuário mais cuidadoso. Por isso também eles
entram no objeto por espalhamento condicional (`...(local ? { local } : {})`): o campo fica
**ausente**, e não `null` fingindo ser um dado.

**Limitações assumidas**

**1. Assinaturas de sensor.** Três arquivos abrem uma torneira com `addListener`:
`exercicios/aula-05/ex-04-chacoalhada.tsx`, `exercicios/aula-05/ex-06-giroscopio.tsx` e
`src/screens/tela-nivel-bolha.tsx` (Atividade 3). Os três têm um `remove()` no mesmo
arquivo, ligado a um botão "Desligar". Mas, declarando com todas as letras: **esta
assinatura não é encerrada ao sair da tela, porque a ferramenta para isso é assunto da Aula
6.** Quem sair com o sensor ligado o deixa ligado, consumindo bateria e disparando
`setState` numa tela que ninguém está vendo. O botão "Desligar" existe exatamente porque a
limpeza automática ainda não existe para nós. A **Atividade 1** (a entrega principal) não
tem esse problema: ela não usa `watchPositionAsync` nem `addListener` — só leituras
pontuais.

**2. Onde a foto vive.** A foto fica no **cache do app** (`takePictureAsync` devolve um
`file://` dentro do diretório de cache), não na galeria. Consequência: se o sistema limpar o
cache por falta de espaço, ou se o app for reinstalado, o `fotoUri` guardado no estado
aponta para um arquivo que não existe mais e a miniatura fica vazia. Não salvamos na galeria
de propósito — o enunciado proíbe, e o pacote para isso não está no catálogo da disciplina.

**3. Nada é persistido.** A lista inteira vive em `useState`. Fechou o app, perdeu tudo,
inclusive os hábitos que custaram duas permissões ao usuário. Persistência é assunto de
outra aula.

**4. O "puxar para atualizar" é um meio-termo.** `recarregar()` restaura o mock mas
**preserva** os hábitos criados na sessão (os que não estão em `HABITOS`), em vez de
descartá-los como fazia antes. É uma decisão de produto tomada dentro de uma limitação, não
uma sincronização de verdade — sem backend, "atualizar" não tem o que buscar.

**5. Sem reverse geocoding.** A tela mostra coordenada arredondada e raio, não "Boa Viagem,
Recife". `reverseGeocodeAsync()` existe e resolveria, mas é uma chamada cara, com limite de
frequência — e, do jeito que a tela está, ela não traria informação que mude alguma decisão
do usuário.

**6. O limiar de chacoalhada é empírico.** `LIMIAR_G = 1.8` foi calibrado num aparelho só.
Parado, a magnitude fica em ≈ 1 g (a gravidade); 1.8 exige quase o dobro. Em outro aparelho
pode ser preciso subir para 2.2 ou descer para 1.5.

### Aula 5 — Giroscópio x acelerômetro *(resposta escrita do Exercício 6)*

Parado na mesa, o **giroscópio** marca ≈ 0 nos três eixos: ele mede **velocidade angular**,
e nada está girando. O **acelerômetro**, no mesmo teste, marca magnitude ≈ **1 g**: ele mede
aceleração linear **somada à gravidade**, e a gravidade não desliga. Isso não é ruído nem
defeito de calibração — é um sinal real, constante e útil; confundir os dois é o que leva a
filtrar fora justamente a informação que serve.

A consequência prática é que o acelerômetro permite descobrir **inclinação com o aparelho
parado**: aquele vetor de 1 g aponta sempre para baixo, e a forma como ele se reparte entre
`x`, `y` e `z` revela a orientação do aparelho. É exatamente disso que vive o nível de bolha
da Atividade 3. O giroscópio não consegue fazer isso — parado, ele não tem nada a informar.
Em compensação, ele responde muito melhor a **rotação rápida**, que o acelerômetro só
detecta de forma indireta.

## Estado atual — Aula 6

Scaffolds e resoluções da Aula 6 (**`expo-image-picker`** e **Expo Router**).

A aula é dividida em duas partes:
- **Parte 1 — Exercícios Guiados:** para prática e demonstração no `sandbox-aula6`, organizados em `exercicios/aula-06/guiados/` contendo pastas separadas para `scaffolds/` (esqueletos para o aluno completar) e `resolucoes/` (gabarito completo rodando).
- **Parte 2 — Atividades Aplicadas:** no projeto `habit-tracker-expo` (branch `feature/aula_06_navigation`), com os scaffolds e `// TODO` presentes diretamente em `src/app/` e `src/components/` (e uma cópia de referência em `exercicios/aula-06/aplicados/scaffolds/`).

### Parte 1 — Exercícios Guiados (`exercicios/aula-06/guiados/`)

| Onde (em `scaffolds/` e `resolucoes/`) | O que é | Referência em `exercises.md` |
|---|---|---|
| `registrar-foto.tsx` | "Escolher da galeria": `canceled`, `assets[0]`, prévia com `expo-image`, Concluir | Exercício 1 |
| `galeria.tsx` | Seleção múltipla em `FlatList` de 3 colunas *(casa)* | Exercício 2 |
| `foto-camera.tsx` | Câmera com negada/bloqueada distintas e galeria como saída *(casa - aparelho físico)* | Exercício 3 |
| `_layout.tsx` | `Stack`, `Stack.Screen`, títulos e `headerTintColor` | Exercício 4 |
| `sobre.tsx` | Tela de apoio `/sobre` para o Exercício 4 | Apoio Ex 4 |
| `index.tsx` | Tela inicial para navegar entre os exercícios guiados no sandbox | Apoio Sandbox |

Para demonstrar os guiados em um sandbox:
```bash
npx create-expo-app@latest sandbox-aula6
cd sandbox-aula6
npm run reset-project            # responda "n"
npx expo install expo-image-picker expo-image
# Copie os scaffolds (para fazer ao vivo) ou as resoluções (para demonstrar):
cp ../habit-tracker-expo/exercicios/aula-06/guiados/resolucoes/*.tsx src/app/
npx expo start
```

### Parte 2 — Atividades Aplicadas (`habit-tracker-expo`)

Implementação concluída das **Atividades 1 e 2** da Aula 6:

| Arquivo | O que foi implementado | Atividade |
|---|---|---|
| `src/app/_layout.tsx` | Moldura com `Stack`, `headerTintColor: '#f26522'` e títulos configurados para `/`, `/registrar-foto`, `/sobre` e `/galeria` | Atividade 1 e 2 |
| `src/app/index.tsx` | Rota inicial apontando para `../screens/tela-habitos`, com navegação via `Link` (`/galeria` e `/sobre`) e `router.push` (`/registrar-foto`) | Atividade 1 e 2 |
| `src/app/registrar-foto.tsx` | Contrato de três tempos no topo, escolha da galeria ou captura via câmera com tratamento de cancelamento, câmera negada e câmera bloqueada, prévia em `expo-image` e botão Concluir (`router.back()`) | Atividade 1 |
| `src/app/sobre.tsx` | Tela sobre com nome do app, versão da aula e declaração da limitação técnica | Atividade 1 |
| `src/app/galeria.tsx` | Galeria de até 6 fotos de progresso em grade de 3 colunas (`FlatList`), estado vazio e comentário explicando por que seleção múltipla e recorte não convivem | Atividade 2 |
| `src/components/miniatura-foto.tsx` | Componente `MiniaturaFoto` com `expo-image`, `recyclingKey` e `maxWidth: '33%'`, isolado fora de `src/app/` | Atividade 2 |
| `app.json` | Configuração de `scheme: "habittracker"`, plugin `expo-router` e `expo-image-picker` com textos de permissão claros e `microphonePermission: false` | Atividade 1 |

> ⚠️ **Limitação declarada das rotas (Restrições):**
> A foto escolhida ou capturada em `/registrar-foto` (ou na `/galeria`) **não volta para a lista** — levar dados e estados entre diferentes telas é o conteúdo da Aula 7. Reconhecer e documentar essa fronteira faz parte da entrega da aula.

## Estado atual — Aula 7

Resoluções das Partes 1 e 2 da Aula 7 (**Navegação avançada com Expo Router: Rotas dinâmicas, Tabs, Drawer** e **Push Notifications locais com `expo-notifications`**).

### Parte 1 — Exercícios Guiados (`exercicios/`)

| Arquivo | O que é | Referência em `exercises.md` |
|---|---|---|
| `exercicios/habit/[id].tsx` | Rota dinâmica lendo `id` via `useLocalSearchParams<{ id: string }>()` e exibindo `Hábito ID: {id}` | Exercício 1 |
| `exercicios/(tabs)/_layout.tsx` | Layout de abas (`<Tabs>`) com Home e Stats, ícones `Feather` e `tabBarActiveTintColor: '#007AFF'` | Exercício 2 |
| `exercicios/(tabs)/index.tsx` | Aba Home com navegação imperativa para `/habit/[id]` (`id: '5'`) e atalho para notificações | Exercício 1 e 2 |
| `exercicios/(tabs)/stats.tsx` | Aba Stats de estatísticas | Exercício 2 |
| `exercicios/_layout.tsx` | Layout raiz com `<Drawer>` (`expo-router/drawer`) e 3 itens (`(tabs)`, `about`, `settings`) com `MaterialIcons` | Exercício 3 |
| `exercicios/about.tsx` | Tela Sobre do Drawer | Exercício 3 |
| `exercicios/settings.tsx` | Tela Configurações do Drawer | Exercício 3 |
| `exercicios/notificacoes.tsx` | Fluxo completo de notificação local (`setNotificationHandler`, `requestPermissionsAsync`, listeners e agendamento em 5s) | Exercício 4 |

### Parte 2 — Atividade Aplicada (`src/app/` e `src/screens/tela-habitos.tsx`)

| Arquivo | O que foi implementado |
|---|---|
| `src/app/_layout.tsx` | `<Drawer>` com os 3 itens principais (`(tabs)` Home, `about` Sobre, `settings` Configurações) usando `MaterialIcons` |
| `src/app/(tabs)/_layout.tsx` | `<Tabs>` com 2 abas (`index` Home e `stats` Stats) usando `Feather` e `tabBarActiveTintColor: '#007AFF'` |
| `src/app/(tabs)/index.tsx` | Rota da aba Home apontando para `TelaHabitos` |
| `src/app/(tabs)/stats.tsx` | Aba de estatísticas dos hábitos da lista |
| `src/app/habit/[id].tsx` | Rota dinâmica de detalhe do hábito com `useLocalSearchParams<{ id: string }>()`, exibição de `Hábito ID: {id}` e retorno à lista |
| `src/app/about.tsx` | Tela Sobre acessível pelo menu lateral (Drawer) |
| `src/app/settings.tsx` | Tela de Configurações acessível pelo menu lateral (Drawer) |
| `src/screens/tela-habitos.tsx` | Integração de notificações locais (`setNotificationHandler`, permissão, listeners imprimindo `"Notificação recebida"` e `"Notificação tocada"`, agendamento para 5s e navegação automática ao tocar na notificação ou em um hábito da lista) |

## Estado atual — Aula 8

Resolução dos Exercícios 1 a 5 e da Atividade Aplicada da Aula 8 (**Hooks (`useState`, `useEffect`, `useContext`), Estado Global com `zustand` e Persistência Local em Disco (`AsyncStorage`, middleware `persist` e `expo-sqlite`)**).

### Exercícios Guiados (`src/`)

| Arquivo | O que foi implementado | Referência em `exercises.md` |
|---|---|---|
| `src/screens/tela-habitos-rapidos.tsx` (`src/app/quick-habits.tsx`) | `QuickHabitsScreen`: adição com spread (`[...prev, novo]`), alternância de `done` com `.map()`, remoção com `.filter()` e contador `totalClicks` com atualização funcional | Exercício 1 |
| `src/components/focus-timer.tsx` | `FocusTimer`: sai cedo quando pausado, `setInterval` de 1000 ms com `prev => prev + 1`, cleanup com `clearInterval` e dependência `[isRunning]` | Exercício 2 |
| `src/context/theme-context.tsx` | `ThemeContext`, `ThemeProvider` com `isDark`/`toggleTheme` e `useTheme()`, que lança erro se usado fora do Provider | Exercício 3 |
| `src/screens/tela-configuracoes.tsx` (`src/app/settings.tsx`) | `<Switch>` ligado a `isDark` e `toggleTheme`; fundo e texto mudam com o tema | Exercício 3 |
| `src/store/use-habit-store.ts` | `useHabitStore` tipada com `addHabit`, `toggleHabit` e `removeHabit` imutáveis, envolvida em `persist` + `createJSONStorage(() => AsyncStorage)` com a chave `@habits:store` | Exercícios 4 e 5 (Parte A) |
| `src/screens/tela-estatisticas.tsx` (`src/app/(tabs)/stats.tsx`) | Total, concluídos, pendentes e porcentagem calculados a partir do seletor `useHabitStore((state) => state.habits)` | Exercício 4 |
| `src/services/focus-db.ts` | Tabela `focus_logs` (`execAsync`), `saveFocusSession` com `runAsync` e placeholders `(?, ?)`, `listFocusSessions` com `getAllAsync<FocusLog>` | Exercício 5 (Parte B) |

### Atividade Aplicada (`src/`)

| Arquivo | O que foi implementado | Requisito |
|---|---|---|
| `src/app/_layout.tsx` | `<ThemeProvider>` envolvendo o `<Drawer>` raiz | 1 |
| `src/context/theme-context.tsx` | Carrega o tema com `AsyncStorage.getItem` no `useEffect(..., [])` e salva com `AsyncStorage.setItem` ao alternar (chave `@habits:theme`) | 1 |
| `src/store/use-habit-store.ts` | Store global persistida em disco | 2 |
| `src/screens/tela-habitos.tsx` (`src/app/(tabs)/index.tsx`) | `useState` só para o texto do input; lista vinda da store; checkbox chama `toggleHabit`; título navega para `/habit/[id]` | 3 |
| `src/screens/tela-estatisticas.tsx` (`src/app/(tabs)/stats.tsx`) | Contadores em tempo real e `<Switch>` do tema | 4 |
| `src/screens/tela-detalhe-habito.tsx` (`src/app/habit/[id].tsx`) | Hábito buscado por seletor a partir do `id`; todos os hooks antes do `if (!habit)`; concluir/desmarcar; excluir + `router.back()`; cronômetro de foco | 5 |

### Limitações conhecidas

- **Hidratação assíncrona.** O `AsyncStorage` responde depois do primeiro render. Ao abrir o app, a tela aparece por um instante no tema claro e com os 2 hábitos iniciais, até os dados salvos carregarem.
- **Ids com `Date.now()`.** Dois hábitos criados no mesmo milissegundo teriam o mesmo id. Num app de um usuário isso é improvável.
- **Exclusão na tela de detalhe.** `removeHabit` roda antes de `router.back()`, então a tela pode mostrar "Hábito não encontrado" por um frame antes de voltar.
- **Telas antigas sem tema.** O tema escuro foi aplicado às telas da atividade (Home, Stats, Detalhe, Configurações). As telas de aulas anteriores (Sobre, Galeria, Registrar foto) continuam no tema claro.

O uso de IA nesta aula está declarado em [`RELATORIO_IA.md`](RELATORIO_IA.md).
