const Queue = require('queue-fifo');

//Jono taulukon alkoioista
function makeQueue(arr) {
  const myqueue = new Queue();
  arr.forEach((ele) => {
    myqueue.enqueue(ele);
  });
  return myqueue;
}

function checkQueue(myqueue, stopper) {
  while (myqueue.size() > 0 && myqueue.peek() < stopper) {
    myqueue.dequeue();
  }
  return myqueue;
}

function clearQueue(queue) {
  const arr1 = [];
  while (queue.size() > 0) {
    arr1.push(queue.dequeue());
  }
  console.log(arr1);
  return arr1;
}
const arr = [2, 1, 9, 15, 6, 2, 7, 5, 6];

const newq = makeQueue(arr);

console.log(newq);

module.exports = { makeQueue, checkQueue, clearQueue };
