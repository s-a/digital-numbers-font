#!/bin/bash
fontforge -lang=py -script ./build.py
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.ttf
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.svg
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.woff
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.eot
cp ../dist/sa-digital-number.* ../demo/fonts/