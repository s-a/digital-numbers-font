#!/bin/bash
fontforge -lang=py -script ./build.py
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.ttf
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.svg
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.woff
# fontforge -script script.pe ../src/digital-numbers.sfd ../dist/sa-digital-number.eot
cp ../dist/sa-digital-number.* ../demo/fonts/

mv  ../dist/sa-digital-number.eot  ../dist/DigitalNumbers-Regular.eot
mv  ../dist/sa-digital-number.svg  ../dist/DigitalNumbers-Regular.svg
mv  ../dist/sa-digital-number.ttf  ../dist/DigitalNumbers-Regular.ttf
mv  ../dist/sa-digital-number.woff  ../dist/DigitalNumbers-Regular.woff
