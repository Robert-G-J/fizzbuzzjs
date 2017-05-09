function FizzBuzz() {

  this.isDivByThree = function(number) {
    if (number % 3 === 0) return true;
    else return false;
  };

  this.isDivByFive = function(number) {
    if (number % 5 === 0) return true;
    else return false;
  };

  this.isDivByThreeAndFive = function(number){
    if (this.isDivByThree(number) && this.isDivByFive(number)) return true;
    else return false;
  };

  this.play = function(number){
    if (number % 3 === 0) return 'Fizz';
    else if (number % 5 === 0) return 'Buzz';
  };

}
