# English do Lorenzo

Site de aulas de inglês do Lorenzo (GitHub Pages): https://engenheiroleonardofaria-bit.github.io/english-lorenzo/

## Como está organizado

- `index.html` — o app (jogo, microfone, relatório, envio do progresso para a planilha).
- `lessons.js` — o conteúdo das aulas. **Só este arquivo muda quando um mês novo é liberado.**
- O progresso fica no navegador do PC do Lorenzo e é enviado para uma planilha Google privada do pai. Nada pessoal (foto, progresso) fica neste repositório público.

## Como liberar um mês novo

1. Avaliar o mês concluído (acerto de 1ª, pronúncia de 1ª, minutos por aula, palavras erradas).
2. Regra de nível:
   - acerto ≥ 90%, pronúncia ≥ 85% e aulas rápidas → sobe o nível (frases mais longas, menos dicas, mais escrita e fala);
   - entre 75% e 90% → mantém o plano, com revisão das palavras erradas;
   - abaixo de 75% → reforço dos pontos fracos antes de avançar.
3. Em `lessons.js`, antes do marcador `/* @@NOVOS_MESES@@ */`, acrescentar `addMonth(N,[ ...28 linhas... ]);` e trocar `MONTHS_OPEN` para N.
   - 28 linhas = 4 semanas × 7; as aulas 7, 14, 21 e 28 de cada mês são revisão (`null` no lugar das palavras).
   - Linha: `["Title","Título pt","emoji","Word|Palavra|emoji;... (6 palavras)",["Pergunta","Pergunta pt",["certa","errada","errada"]],"frase modelo com _ (opcional)"]`
4. Atualizar o texto do mês no `ROADMAP` do `index.html`, se necessário.
5. Commit na branch `main`. O site atualiza em 1–2 minutos.
