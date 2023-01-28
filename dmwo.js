const array = [ 3, +0, 3, 3, 3 ]

function findUniq(arr) {
    // Сортируем массив по возростанию, т.к если все элементы одниаковые кроме одного, 
    // следоватеьно нужный нам элимент будет либо в конце, либо в начале
    const sorted = arr.sort((a, b) => {
        return a - b
    })
    const trueOrFalse = sorted[0] === sorted[1] //[1]
    if(trueOrFalse === true){
        return sorted.pop()
    }else{
        return sorted[0]
    }
}

console.log(findUniq(array))