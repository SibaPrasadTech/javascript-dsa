let arr = [1,1,2,3,4,4,4,5]

Array.prototype.removeDuplicates = function () {
    let writeIndex = 1;
    for(let i=1;i<this.length;i++){
        if(arr[i] !== arr[i-1]) {
            this[writeIndex] = this[i]
            writeIndex++;
        }
    }
    return writeIndex; 
}

console.log(arr.removeDuplicates());
console.log(arr);