let makeCase = function(input, casingStyle) {

  // convert casingStyle to an array
  let casingStyleArray = [];
  if (typeof casingStyle === "string") {
    casingStyleArray = casingStyle.split();
  } else {
    casingStyleArray = casingStyle;
  }

  // loop over all values of casingStyleArray and apply casing styles
  for (let i = 0; i < casingStyleArray.length; i++) {
    if (casingStyleArray[i] === 'camel') {
      // camelCase
      input = input.replace(/^(\w{1})/, x => x.toLowerCase());
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/[-_ ]/g, '');
    } else if (casingStyleArray[i] === 'pascal') {
      // PascalCase
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/^(\w{1})/, x => x.toUpperCase());
      input = input.replace(/[-_ ]/g, '');
    } else if (casingStyleArray[i] === 'snake') {
      // snake_case
      input = input.replace(/[- ]/g, '_');
    } else if (casingStyleArray[i] === 'kebab') {
      // kebab-case
      input = input.replace(/[_ ]/g, '-');
    } else if (casingStyleArray[i] === 'title') {
      // Title Case
      input = input.replace(/[-_ ](\w{1})/g, x => x.toUpperCase());
      input = input.replace(/^(\w{1})/, x => x.toUpperCase());
    } else if (casingStyleArray[i] === 'vowel') {
      // vOwEl cAsE
      input = input.replace(/[^aeiou]/ig, x => x.toLowerCase());
      input = input.replace(/[aeiou]/g, x => x.toUpperCase());
    } else if (casingStyleArray[i] === 'consonant') {
      // CoNSoNaNT CaSe
      input = input.replace(/[aeiou]/ig, x => x.toLowerCase());
      input = input.replace(/[^aeiou]/g, x => x.toUpperCase());
    } else if (casingStyleArray[i] === 'upper') {
      // UPPERCASE
      input = input.replace(/\w/g, x => x.toUpperCase());
    } else if (casingStyleArray[i] === 'lower') {
      // lowercase
      input = input.replace(/\w/g, x => x.toLowerCase());
    }
  }

  // return converted input string
  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// Expected output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

// Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

// Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower
// Our function should be able to handle all of these cases


// SECOND OPTION

/*
  there's probably a more efficient way to accomplish this,
  but I wanted to try and make this able to handle a larger
  array of rules than any of the examples provided
*/

const makeCase = function(input, rules) {
  // ensure string is lowercase before processing
  input = input.toLowerCase();
  if (typeof rules === 'string') {
    return applyRule(input, rules);
  }
  let output = input;
  // highest priority
  for (let rule of rules) {
    switch (rule) {
      case 'camel':
      case 'pascal':
      case 'snake':
      case 'kebab':
      case 'title':
        output = applyRule(output, rule);
        break;
    }
  }
  // second priority
  for (let rule of rules) {
    switch (rule) {
      case 'vowel':
      case 'consonant':
        output = applyRule(output, rule);
        break;
    }
  }
  // third priority
  for (let rule of rules) {
    switch (rule) {
      case 'upper':
      case 'lower':
        output = applyRule(output, rule);
        break;
    }
  }
  return output;
};

const applyRule = function(input, rule) {
  // don't bother iterating over the string if the rule is simple
  if (rule === 'upper') {
    return input.toUpperCase();
  } else if (rule === 'lower') {
    return input.toLowerCase();
  }
  // otherwise build the output one character at a time
  let output = '';
  let capitalizeNext = false;
  for (let i = 0; i < input.length; i++) {
    // capitalise first letter for pascal and title
    if ((rule === 'pascal' || rule === 'title') && output.length === 0 && input[i] !== ' ') {
      output += input[i].toUpperCase();
      continue;
    }
    // determine capitalisation based on current letter and rule
    switch (input[i]) {
      // handle spaces
      case ' ':
      case '-':
      case "_":
        switch (rule) {
          case 'camel':
            if (output.length > 1) {
              capitalizeNext = true;
            }
            break;
          case 'pascal':
            capitalizeNext = true;
            break;
          case 'snake':
            output += '_';
            break;
          case 'kebab':
            output += '-';
            break;
          case 'title':
            capitalizeNext = true;
            output += ' ';
            break;
          default:
            output += ' ';
            break;
        }
        break;
      // handle vowels
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        if (capitalizeNext || rule === 'vowel') {
          output += input[i].toUpperCase();
          capitalizeNext = false;
        } else {
          output += input[i];
        }
        break;
      // handle consonants/everything else
      default:
        if (capitalizeNext || rule === 'consonant') {
          output += input[i].toUpperCase();
          capitalizeNext = false;
        } else {
          output += input[i];
        }
        break;
    }
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));