function FizzBuzz() {
  this.isDivisibleByThree = function(num) {
    if (num % 3 === 0) return true;
    else return false;
  };
  this.isDivisibleByFive = function(num) {
    if (num % 5 === 0) return true;
    else return false;
  };
}
