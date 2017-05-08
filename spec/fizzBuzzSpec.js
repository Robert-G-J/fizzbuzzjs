describe('FizzBuzz', function() {

  var fizzBuzz;

   beforeEach(function() {
     fizzBuzz = new FizzBuzz();
   });

  it("checks multiples of 3", function() {
    expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    expect(fizzBuzz.isDivisibleByThree(4)).toBe(false);
  });

  it("checks multiples of 5", function() {
    expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    expect(fizzBuzz.isDivisibleByFive(7)).toBe(false);
  });

  it("checks multiples of 3 and 5", function() {
    expect(fizzBuzz.isDivisibleByfifteen(15)).toBe(true);
    expect(fizzBuzz.isDivisibleByfifteen(17)).toBe(false);
  });

});
