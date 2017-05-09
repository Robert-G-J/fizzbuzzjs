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

  it("checks a number is a divisor of both 3 and 5", function() {
    expect(fizzBuzz.isDivByThreeAndFive(15)).toBe(true);
    expect(fizzBuzz.isDivByThreeAndFive(14)).toBe(false);
  });

  it('returns fizz for multiples of 3', function() {
    expect(fizzBuzz.play(3)).toBe('Fizz');
    expect(fizzBuzz.play(9)).toBe('Fizz');
  });

  it('returns buzz for multiples of 5', function() {
    expect(fizzBuzz.play(5)).toBe('Buzz');
    expect(fizzBuzz.play(10)).toBe('Buzz');
  });

});
