const addOrd = (n) => {
  let ords = ['st', 'nd', 'rd'];
  let m = n % 100;
  return n + ((m > 10 && m < 14) ? 'th' : ords[m % 10] || 'th');
};

const talkingCalendar = function(date) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  let e = new Date(date);

  e.setDate(e.getDate());
  return months[e.getMonth()] + " " + addOrd(e.getDate()) + ', ' + e.getFullYear();
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


// Output
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987
