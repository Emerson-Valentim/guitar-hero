arq = open('ordem.txt', 'r')
arq2 = open('lista.txt', 'w')
anterior = 0
lista = []
lista2 = []

for linhas in arq:
    lista = linhas.split(';')

for linhas in lista:
    if linhas == '':
        continue
    if linhas == anterior:
        continue
    anterior = linhas
    lista2.append(linhas)
arq2.write(str(lista2))