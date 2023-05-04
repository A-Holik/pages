
class Counter {
  constructor(delay) {
      this.delay = delay || 50;
  }
  runCounter(objID, start, finish) {
     
      const obj = document.getElementById(objID);
      let number = start;
      let delay = this.delay;
      let timer = function() {
          if (number <= finish) {
              obj.innerHTML = number;
              number += 1;
              setTimeout(timer, delay);
          }
      }
      timer();
  }
}

// you can set as many counters in different delay as you want

let counter1 = new Counter(1300);
counter1.runCounter("counter-1", 0, 5);
let counter2 = new Counter(100);
counter2.runCounter("counter-2", 5, 78);
let counter3 = new Counter(60);
counter3.runCounter("counter-3", 30, 135);
counter1.runCounter("counter-4", 0, 4);