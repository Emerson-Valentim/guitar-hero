import pyautogui as ptg
import time as tm

def compararCor(pix):
    return 0 <= pix[0] <= 84  \
           and 0 <= pix[1] <= 84 \
           and 0 <= pix[2] <= 84

def validarCor(pix):
    cor = compararCor(pix)
    return not cor

def rotacionarPixel(i):
    pixelX = [514, 627, 718, 826, 929]
    pixelY = [815]
    pixel = ptg.pixel(pixelX[i], pixelY[0])
    return pixel

posicao1 = [565, 1063]
i = 0
arq = open('ordem.txt', 'w')
ptg.click(posicao1[0], posicao1[1])
ptg.keyDown('space')
cores = ['verde','vermelho','amarelo','azul','laranja']
index = 0
tm.sleep(5)
while i < 953:
    while index < len(cores):
        if(validarCor(rotacionarPixel(index))):
            arq.write(str(index))
        index+= 1
    i+= 1
    index = 0
    arq.write(";")
    tm.sleep(.3)

ptg.keyDown('space')
arq.close()
ptg.click(450, posicao1[1])

