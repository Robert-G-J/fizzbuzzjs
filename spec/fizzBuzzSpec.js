describe('FizzBuzz', function() {

  var fizzBuzz;
  //
  // beforeEach(function() {
  //   fizzBuzz = new FizzBuzz();
  // });

  it("checks multiples of 3", function() {
    fizzBuzz = new FizzBuzz();
    expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    expect(fizzBuzz.isDivisibleByThree(4)).toBe(false);
  });

});
