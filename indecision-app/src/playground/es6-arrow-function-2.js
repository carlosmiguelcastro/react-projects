const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiplyBy() {
       return this.numbers.map((number) => this.multiplyBy * number);
    }
}