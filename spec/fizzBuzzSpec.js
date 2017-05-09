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

  it('returns fizzbuzz for multiples of 3 and 5', function() {
    expect(fizzBuzz.play(15)).toBe('FizzBuzz');
    expect(fizzBuzz.play(30)).toBe('FizzBuzz');
  });

  it('returns the number', function() {
    expect(fizzBuzz.play(17)).toBe(17);
    expect(fizzBuzz.play(22)).toBe(22);
  });

});
