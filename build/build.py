import fontforge
font = fontforge.open("../src/digital-numbers.sfd")
for glyph in font.glyphs():
    glyph.round()
    glyph.correctDirection()
    glyph.removeOverlap()
    glyph.addExtrema()
    glyph.simplify()
formats = ['../dist/sa-digital-number.ttf', '../dist/sa-digital-number.svg', '../dist/sa-digital-number.woff', '../dist/sa-digital-number.eot']
for file in formats:
    font.generate(file, flags=("round", "dummy-dsig"))