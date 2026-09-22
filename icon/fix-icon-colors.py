"""
把 icon 圖片的顏色校正成品牌色票，並把圖案內部的透明破洞填成米白。

圖檔是從設計稿匯出的，白色的地方（問號、笑臉）在網頁上會跟背景撞色，
顏色也跟色票差一兩階。這支程式會就地修正 icon/ 裡的 PNG，重複跑不會壞：

    pip install pillow
    python3 icon/fix-icon-colors.py
"""
from collections import deque
from pathlib import Path

from PIL import Image

CREAM = (243, 240, 225)   # --brand-bg  #f3f0e1
BLUE = (205, 220, 240)    # --brand-blue #cddcf0
BROWN = (73, 44, 19)      # --brand-brown #492c13
YELLOW = (252, 230, 183)  # --brand-yellow #fce6b7

# 圖檔裡的顏色 → 要換成的品牌色；容許誤差內的近似色也一起換
SNAP = [((255, 255, 255), CREAM), ((203, 217, 236), BLUE), ((72, 43, 18), BROWN), ((248, 226, 182), YELLOW)]
TOLERANCE = 10

FILES = ["咖啡色放大鏡", "雨傘＿遺失物", "鑰匙＿遺失物", "紅綠燈", "星星", "DiuLa! logo去背2"]


def fill_holes(px, w, h):
    """圖案內部的透明區域填米白；外圍和邊緣柔邊保持透明，才不會多出米白外框。"""
    outside = bytearray(w * h)
    q = deque()

    def push(x, y):
        if not outside[y * w + x] and px[x, y][3] < 250:
            outside[y * w + x] = 1
            q.append((x, y))

    for x in range(w):
        push(x, 0)
        push(x, h - 1)
    for y in range(h):
        push(0, y)
        push(w - 1, y)
    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                push(nx, ny)

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 255 and not outside[y * w + x]:
                k = a / 255
                px[x, y] = tuple(round(c * k + bg * (1 - k)) for c, bg in zip((r, g, b), CREAM)) + (255,)


def snap_colors(px, w, h):
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 200:
                continue
            for src, dst in SNAP:
                if abs(r - src[0]) + abs(g - src[1]) + abs(b - src[2]) <= TOLERANCE:
                    px[x, y] = dst + (a,)
                    break


for name in FILES:
    path = Path(__file__).resolve().parent / f"{name}.png"
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    px = im.load()
    fill_holes(px, w, h)
    snap_colors(px, w, h)
    im.save(path)
    print(f"{path.name} 已校正")
