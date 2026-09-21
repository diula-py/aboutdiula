"""
把源泉圓體縮成網站用的 woff2：只保留 index.html / script.js / style.css 用到的字。

完整字檔一個 15MB，直接放上網站會載很久，所以只挑網頁上出現過的字。
改了網頁文字、新增沒用過的中文字後，要重跑一次，否則新字會變成系統字體：

    pip install fonttools brotli
    python3 fonts/subset-fonts.py 源字體.zip
"""
import io
import string
import sys
import zipfile
from pathlib import Path

from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTCollection

ROOT = Path(__file__).resolve().parent.parent
WEIGHTS = {"R": 400, "M": 500, "B": 700}

text = "".join((ROOT / f).read_text(encoding="utf-8") for f in ("index.html", "script.js", "style.css"))
chars = set(text) | set(string.printable) | set("，。、；：？！「」『』（）《》〈〉—…·～＋－＝％＃＆＠．")
chars = {c for c in chars if c.isprintable() and c != "\x7f"}

with zipfile.ZipFile(sys.argv[1] if len(sys.argv) > 1 else ROOT / "源字體.zip") as z:
    for name, weight in WEIGHTS.items():
        font = TTCollection(io.BytesIO(z.read(f"GenSenRounded-{name}.ttc"))).fonts[0]  # 0 = TW 版
        opts = Options()
        opts.flavor = "woff2"
        opts.layout_features = ["*"]
        sub = Subsetter(opts)
        sub.populate(text="".join(chars))
        sub.subset(font)
        out = ROOT / "fonts" / f"GenSenRounded-{weight}.woff2"
        font.flavor = "woff2"
        font.save(out)
        print(f"{out.name}: {out.stat().st_size // 1024} KB")
