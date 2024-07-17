let arr = [2,3,-5,2,9,-7,1];
let window = 3;

function maxSubArraySum(arr, window) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let dequeue = []
    for(let i=0;i<arr.length;i++){
        if(dequeue.length < window){
            sum+=arr[i]
            dequeue.push(arr[i]);
        }
        else{
            sum > maxSum ? maxSum = sum : null;
            sum= sum - dequeue[0];
            dequeue.shift()
            dequeue.push(arr[i])
            sum= sum + arr[i]
        }
    }
    return maxSum;
}

console.log(maxSubArraySum(arr,window));
