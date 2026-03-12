let matrix = []
let sor = 3
let oszlop = 3

for (let index = 0; index < sor; index++) {
    let matrixSor = []
    for (let j= 0; j < oszlop; j++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        matrixSor.push(randomNumber)
    }
    matrix.push(matrixSor)

}

console.log(matrix);

let matrixKiiras = ''
for (const sor of matrix) {
    for (const element of sor) {
        matrixKiiras += element + " "
    }
    matrixKiiras += "\n"
}

console.log(matrixKiiras)

let matrixKiirasFor = ''
for (let i = 0; i < matrix.length; index++) {
    for (let j = 0; j < matrix[i]; j++) {
        matrixKiirasFor += matrix[i][j] + " "

    }
    matrixKiirasFor += "\n"


}

console.log(matrixKiirasFor);

let sorOsszegek = []
for (const sor of matrix) {
    let sorOsszeg = 0
    for (const element of sor) {
        sorOsszeg += element
    }
    console.log(sorOsszeg)
    matrixKiiras += "\n"
}