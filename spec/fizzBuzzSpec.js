describe("FizzBuzz", function() {

  var fizzBuzz = new FizzBuzz();

  it("checks divisibilty by 3", function() {
    expect(fizzBuzz.isDivByThree(3)).toBe(true);
  });

  it("checks that a number is not divisible by 3", function() {
    expect(fizzBuzz.isDivByThree(1)).toBe(false);
  });

  it("checks a number is a divisor of 5", function() {
    expect(fizzBuzz.isDivByFive(5)).toBe(true);
    expect(fizzBuzz.isDivByFive(11)).toBe(false);
  });

});
