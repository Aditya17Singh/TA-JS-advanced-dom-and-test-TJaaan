const moment = require("moment");
const lodash = require("lodash");

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));
var date = moment("2020-01-01");
console.log(date.isValid());
console.log(moment("2020-14-01"));
console.log(date.isValid());
var new_date = moment().add(7, 'days');
console.log(new_date);
var new_month = moment().add(7, 'months');
console.log(new_month);
var new_years = moment().add(7, 'years');
console.log(new_years);
var sub_date = moment().subtract(7, 'days');
console.log(sub_date);
var a = moment([2014,11,11]);
var b = moment([2015,09,11]);
var diff = a.diff(b, 'days');
console.log(diff);
var oneDate = moment('01-01-2020', 'DD-MM-YYYY');
var twoDate = moment('01-01-2018', 'DD-MM-YYYY');

var dDiff = oneDate.diff(twoDate);
if (dDiff < 0) {
    console.log('Date is future date');
}else{
    console.log('Date is not future date');
}


console.log(moment().isLeapYear(2019));
console.log(moment().isLeapYear(2020));
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();



