//tiny expect library
const myExpect = assertion => ({
  toBe: value => {
    if (assertion === value) return true;
    throw assertion + " is not equal to " + value;
  },
  toThrow: () => {
    try {
      assertion();
    } catch (e) {
      return true;
    }
    throw "A throw error was expected";
  }
});

const LAST_DIGIT_NUMBER = 4;

const getNoise = number => "*".repeat(number);

const getLastDigits = string => string.slice(string.length - LAST_DIGIT_NUMBER);

const masker = number => {
  if (number.length < 6) return number;
  if (isNaN(number)) throw "the number is incorrect";
  const [head, ...tail] = number.split("");
  return (
    head + getNoise(tail.length - LAST_DIGIT_NUMBER) + getLastDigits(number)
  );
};

//masker should mask a string of numbers
myExpect(masker("000000000")).toBe("0****0000");

//masker should not mask less than 6 characters
myExpect(masker("000")).toBe("000");

//masker should not mask alfa-chars
myExpect(() => masker("00000abc")).toThrow();

//getNoise Should return a string of number lenght
myExpect(getNoise(5)).toBe("*****");

//getLastDigits should return a # last digits string
myExpect(getLastDigits("12345")).toBe("2345");
