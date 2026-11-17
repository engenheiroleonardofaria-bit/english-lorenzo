#!/usr/bin/env python3
"""Gera o one page report (HTML 1080x1350) do mês concluído do Lorenzo.

Uso: python3 relatorio_mes.py estado.json N saida.html
  estado.json = JSON devolvido pela planilha: {"state": {"log": [...], "prizes": [...]}, ...}
                (também aceita o objeto state direto)
Depois: google-chrome --headless=new --no-sandbox --hide-scrollbars --window-size=1080,1350 \
        --screenshot=saida.png file:///caminho/saida.html
"""
import json, sys, datetime as dt
from html import escape as e

raw = json.load(open(sys.argv[1]))
S = raw.get("state", raw)
N = int(sys.argv[2]); out = sys.argv[3]
POR_MES = 28
MODULOS = [("🏝️", "Ilha das Palavras"), ("🏡", "Vila da Casa"), ("🏫", "Cidade da Escola"), ("🍦", "Vale dos Gostos"),
           ("⚽", "Campo da Ação"), ("❓", "Floresta das Perguntas"), ("📖", "Torre da Leitura"), ("🌦️", "Montanha do Clima"),
           ("🐉", "Reino das Histórias"), ("⏳", "Caverna do Tempo"), ("✈️", "Porto das Viagens"), ("👑", "Castelo Final")]
MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]

lo, hi = (N - 1) * POR_MES + 1, N * POR_MES
log = [l for l in S.get("log", []) if lo <= l["lesson"] <= hi]
feitas = len({l["lesson"] for l in log})
qok = sum(l["qOk"] for l in log); qtot = sum(l["qTot"] for l in log)
acerto = round(qok / qtot * 100) if qtot else None
fala = [x for l in log for x in l.get("speak", []) if x.get("verified")]
pron = round(sum(1 for x in fala if x.get("tries") == 1) / len(fala) * 100) if fala else None
minutos = sum(l["ms"] for l in log) / 60000
mpa = minutos / max(1, len(log))
estrelas = sum(l["stars"] for l in log)
datas = sorted({l["date"] for l in log})
d0, d1 = (dt.date.fromisoformat(datas[0]), dt.date.fromisoformat(datas[-1])) if datas else (None, None)
def fmt(d): return f"{d.day:02d}/{MESES[d.month-1]}"
periodo = (fmt(d0) if d0 == d1 else f"{fmt(d0)} a {fmt(d1)}") if d0 else "–"

# acerto por semana
semanas = []
for w in range(4):
    a, b = lo + w * 7, lo + w * 7 + 6
    ls = [l for l in log if a <= l["lesson"] <= b]
    t = sum(l["qTot"] for l in ls)
    semanas.append(round(sum(l["qOk"] for l in ls) / t * 100) if t else None)

# palavras para treinar
erros = {}
for l in log:
    for k, v in l.get("misses", {}).items():
        k = k.split(": ", 1)[1] if ": " in k else k
        if len(k) > 22: continue
        erros[k] = erros.get(k, 0) + v
treinar = sorted(erros.items(), key=lambda t: -t[1])[:6]
palavras_mes = 24 * 6
dominadas = max(0, palavras_mes - len(erros))

# decisão para o próximo mês (mesma regra da tarefa)
if acerto is not None and acerto >= 90 and (pron is None or pron >= 85):
    dec, dec_c, dec_t = "SOBE O NÍVEL", "#2BB673", "Frases mais longas, menos dicas, mais escrita e fala."
elif acerto is not None and acerto >= 75:
    dec, dec_c, dec_t = "MANTÉM O RITMO", "#2F80ED", "Segue o plano, com revisão das palavras que ele errou."
else:
    dec, dec_c, dec_t = "REFORÇO", "#FF8A3D", "Revisa os pontos fracos antes de avançar."

premios = S.get("prizes") or []
premio = premios[N - 1]["t"] if N - 1 < len(premios) and isinstance(premios[N - 1], dict) else (premios[N - 1] if N - 1 < len(premios) else "Prêmio do mês")
ico, mod = MODULOS[N - 1] if N <= 12 else ("⭐", "Mês extra")
prox = MODULOS[N] if N < 12 else ("🎉", "Fim da trilha")

# leitura para os pais (2 pontos, gerados pelos números)
obs = []
if datas and len(datas) <= 3 and feitas >= 21:
    obs.append(f"Fez {feitas} aulas em {len(datas)} dia{'s' if len(datas) > 1 else ''}: o ritmo é ótimo, mas 2 a 3 aulas por dia fixam melhor do que maratonas.")
elif datas and len(datas) >= 12:
    obs.append(f"Estudou em {len(datas)} dias diferentes: constância é o que mais faz o inglês fixar.")
vs = [v for v in semanas if v is not None]
if len(vs) >= 2 and vs[-1] < max(vs) - 8:
    obs.append(f"O acerto caiu na última semana ({vs[-1]}%): o conteúdo ficou mais difícil. Vale revisar as palavras para treinar.")
if pron is not None and pron < 80:
    obs.append("Pronúncia abaixo de 80%: pedir para ele repetir em voz alta as frases do dia ajuda bastante.")
if acerto is not None and acerto >= 90 and len(obs) < 2:
    obs.append("Acerto alto: o próximo mês vem mais desafiador, com frases e escrita.")
if not obs:
    obs.append("Desempenho equilibrado. Elogie o esforço: a motivação dele é o motor do curso.")
obs = obs[:2]

def pct(v): return "–" if v is None else f"{v}%"
def cor(v): return "#9AA7BD" if v is None else "#2BB673" if v >= 90 else "#FFB627" if v >= 75 else "#FF5D73"
def kpi(icon, val, lab, c="#FFFFFF"):
    return (f'<div class="k"><div class="ki">{icon}</div><div class="kv" style="color:{c}">{val}</div><div class="kl">{lab}</div></div>')

barras = ""
for i, v in enumerate(semanas):
    h = 0 if v is None else max(6, round(v * 1.25))
    barras += (f'<div class="bw"><div class="bv">{pct(v)}</div><div class="bar" style="height:{h}px;background:{cor(v)}"></div>'
               f'<div class="bl">Semana {i+1}</div></div>')

chips = "".join(f'<span class="chip">{e(k)}{" ×"+str(v) if v > 1 else ""}</span>' for k, v in treinar) or '<span class="chip ok">Nenhum erro no mês!</span>'
nota_pron = "" if pron is not None else '<div class="mini">Pronúncia medida pelo headset a partir do Mês 2.</div>'

html = f"""<!doctype html><html><head><meta charset="utf-8"><style>
*{{box-sizing:border-box;margin:0;padding:0}}
body{{width:1080px;height:1350px;font-family:Inter,'Noto Color Emoji',sans-serif;background:linear-gradient(180deg,#5DB2FF 0%,#9FD3FF 55%,#E6F4FF 100%);color:#1B2B44;overflow:hidden;position:relative}}
.pix{{position:absolute;width:18px;height:18px;background:#fff;opacity:.55}}
.wrap{{position:absolute;inset:34px 50px}}
.top{{background:#16233A;border:6px solid #0B1424;border-radius:28px;padding:30px 36px;color:#fff;box-shadow:0 10px 0 #0B1424;display:flex;align-items:center;gap:28px}}
.ava{{width:120px;height:120px;border:6px solid #FFB627;border-radius:16px;background:#2F80ED;display:flex;align-items:center;justify-content:center;font-size:70px;flex:none}}
.p1{{font-size:20px;letter-spacing:3px;color:#FFB627;font-weight:800}}
.nm{{font-size:64px;font-weight:900;letter-spacing:2px;line-height:1.05}}
.sub{{font-size:24px;color:#BFD2EE;margin-top:6px;font-weight:600}}
.seal{{margin-left:auto;text-align:center;background:#2BB673;border:5px solid #1E8A55;border-radius:22px;padding:14px 18px;box-shadow:0 6px 0 #1E8A55;flex:none}}
.seal b{{display:block;font-size:44px;line-height:1}}.seal span{{font-size:17px;font-weight:800;letter-spacing:1px}}
.grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:20px}}
.k{{background:#1F3A60;border-radius:22px;padding:12px 14px 12px;text-align:center;box-shadow:0 7px 0 #142843}}
.ki{{font-size:30px}}.kv{{font-size:42px;font-weight:900;line-height:1.1;margin-top:4px}}.kl{{font-size:18px;color:#BFD2EE;font-weight:600;margin-top:2px}}
.row{{display:flex;gap:16px;margin-top:20px}}
.card{{background:#fff;border-radius:24px;padding:18px 24px;box-shadow:0 7px 0 #B9D5F0;flex:1}}
.ct{{font-size:18px;font-weight:900;letter-spacing:2px;color:#2F80ED;margin-bottom:12px}}
.chart{{display:flex;align-items:flex-end;justify-content:space-around;height:180px;border-bottom:4px solid #E3ECF7;padding-bottom:0}}
.bw{{display:flex;flex-direction:column;align-items:center;width:22%}}.bar{{width:70%;border-radius:10px 10px 0 0}}
.bv{{font-size:22px;font-weight:900;margin-bottom:6px}}.bl{{font-size:16px;color:#5B6B84;font-weight:700;margin-top:8px;position:relative;top:4px}}
.chip{{display:inline-block;background:#FFF1D6;color:#B86E00;font-weight:800;font-size:21px;padding:8px 14px;border-radius:14px;margin:0 8px 10px 0}}
.chip.ok{{background:#E2F6EC;color:#1E8A55}}
.mini{{font-size:16px;color:#5B6B84;margin-top:6px}}
.big{{font-size:52px;font-weight:900;color:#1B2B44;line-height:1}}
.prize{{display:flex;align-items:center;gap:18px;background:#FFF7E3;border:4px solid #FFB627;border-radius:24px;padding:14px 22px;margin-top:20px;box-shadow:0 7px 0 #E09A10}}
.prize .g{{font-size:64px}}.prize b{{font-size:30px;display:block}}.prize span{{font-size:20px;color:#7A5A12;font-weight:600}}
.dec{{display:inline-block;color:#fff;font-weight:900;font-size:22px;letter-spacing:1px;padding:8px 14px;border-radius:12px;background:{dec_c}}}
.foot{{margin-top:16px;text-align:center;font-size:18px;color:#3E5577;font-weight:700}}
</style></head><body>
<div class="pix" style="top:120px;left:20px"></div><div class="pix" style="top:300px;right:16px"></div><div class="pix" style="top:640px;left:14px;width:12px;height:12px"></div>
<div class="wrap">
 <div class="top">
  <div class="ava">🧒</div>
  <div><div class="p1">PLAYER 1 · RELATÓRIO DO MÊS {N}</div><div class="nm">LORENZO</div>
   <div class="sub">{ico} {e(mod)} · {periodo}</div></div>
  <div class="seal"><b>{feitas}/28</b><span>{"MÊS COMPLETO!" if feitas >= POR_MES else "AULAS"}</span></div>
 </div>
 <div class="grid">
  {kpi("🎯", pct(acerto), "acerto de primeira", cor(acerto))}
  {kpi("🎤", pct(pron), "pronúncia de primeira", cor(pron))}
  {kpi("⭐", f"{estrelas}", f"estrelas de {len(log)*3}")}
  {kpi("⏱️", f"{round(minutos)} min", "tempo total de estudo")}
  {kpi("⚡", f"{mpa:.1f} min".replace(".", ","), "por aula, em média")}
  {kpi("🔥", f"{len(datas)}", "dia" + ("" if len(datas) == 1 else "s") + " de estudo")}
 </div>
 <div class="row">
  <div class="card" style="flex:1.25"><div class="ct">ACERTO POR SEMANA</div><div class="chart">{barras}</div></div>
  <div class="card"><div class="ct">PALAVRAS</div><div class="big">{dominadas}</div><div class="mini" style="font-size:19px;margin-bottom:14px">de {palavras_mes} aprendidas sem errar</div>
   <div class="ct" style="margin-bottom:8px">PARA TREINAR</div>{chips}{nota_pron}</div>
 </div>
 <div class="prize"><div class="g">🎁</div><div><b>Baú do Mês {N} aberto!</b><span>Prêmio: {e(premio)}</span></div>
  <div style="margin-left:auto;text-align:right"><div class="dec">{dec}</div><div style="font-size:18px;color:#5B4A1A;font-weight:600;margin-top:8px;max-width:330px">Próximo: {prox[0]} {e(prox[1])}<br>{e(dec_t)}</div></div></div>
 <div class="card" style="margin-top:20px;flex:none"><div class="ct">OLHAR DO PAPAI E DA MAMÃE</div>{"".join(f'<div style="font-size:19px;font-weight:600;line-height:1.3;margin-top:4px">• {e(o)}</div>' for o in obs)}</div>
 <div class="foot">English do Lorenzo · {dt.date.today().strftime('%d/%m/%Y')} · Parabéns, campeão! 🏆</div>
</div></body></html>"""
open(out, "w", encoding="utf-8").write(html)
print(json.dumps({"mes": N, "feitas": feitas, "acerto": acerto, "pronuncia": pron, "minutos": round(minutos), "dias": len(datas), "decisao": dec, "treinar": treinar}, ensure_ascii=False))
