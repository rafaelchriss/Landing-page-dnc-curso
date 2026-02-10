var leonardo = document.getElementById("leonardo")
var samantha = document.getElementById("samantha")
var bruna = document.getElementById("bruna")
var setadireita = document.getElementById("seta-direita")
var setaesquerda = document.getElementById("seta-esquerda") 

function RolarParaDireita(){
    leonardo.style.display = "none"
    bruna.style.display = "block"

    setadireita.style.display = "none"
    setaesquerda.style.display = "block"
}

function RolarParaEsquerda(){
    leonardo.style.display = "block"
    bruna.style.display = "none"

    setadireita.style.display = "block"
    setaesquerda.style.display = "none"
}
