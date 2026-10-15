"""Confere se cada cor da paleta do site existe na capa do álbum.

Uso (na raiz do projeto):  python docs/ferramentas/conferir-paleta.py
Precisa de:  pip install pillow numpy

Para cada cor, mostra a porcentagem de pixels da capa que estão "perto" dela
(distância RGB <= 25) e gera docs/referencias/paleta-vs-capa.png.
"""
from PIL import Image, ImageDraw, ImageFont
import numpy as np

CAPA = "docs/referencias/capa-album.png"
SAIDA = "docs/referencias/paleta-vs-capa.png"
PALETA = {
    "preto": "252222", "azul": "1C72BA", "azul-claro": "44A3DA",
    "creme": "FCEEB5", "branco-quente": "F8F8E1", "vinho": "9B352C",
    "laranja": "874832", "areia": "B98B53", "asfalto": "3E2A28",
}

capa = Image.open(CAPA).convert("RGB")
pix = np.asarray(capa).reshape(-1, 3).astype(float)

def rgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))

linhas = []
for nome, h in PALETA.items():
    d = np.sqrt(((pix - np.array(rgb(h), float)) ** 2).sum(1))
    linhas.append((nome, h, 100 * (d <= 25).mean(), d.min()))
    print(f"{nome:14s} #{h}  pixels parecidos: {100 * (d <= 25).mean():5.2f}%  menor distância: {d.min():.1f}")

# imagem: capa à esquerda + amostras da paleta à direita
L, A = 640, 640
fonte = ImageFont.load_default()
img = Image.new("RGB", (L + 520, A), "white")
img.paste(capa.resize((L, A)), (0, 0))
dr = ImageDraw.Draw(img)
alt = A // len(linhas)
for i, (nome, h, pct, dmin) in enumerate(linhas):
    y = i * alt
    dr.rectangle([L, y, L + 200, y + alt], fill=rgb(h))
    dr.rectangle([L + 200, y, L + 520, y + alt], fill="white")
    dr.text((L + 215, y + 14), f"{nome}  #{h}", fill="black", font=fonte)
    dr.text((L + 215, y + 34), f"{pct:.1f}% da capa a <=25 de distancia", fill="black", font=fonte)
img.save(SAIDA)
print("gerado:", SAIDA)
