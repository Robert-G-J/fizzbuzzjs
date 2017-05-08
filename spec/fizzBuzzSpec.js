describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("lists numbers 1-100", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

});
