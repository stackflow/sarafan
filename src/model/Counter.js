class Counter {
  
  constructor() {
    this.count = 0;
    setInterval(() => this.tick(), 1000);
  }
  
  tick() {
    console.log(++this.count)
  }
}

export default Counter;
