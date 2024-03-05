// EXAMPLE 1 - Get the Start and End of the Day in UTC

// ✅ In UTC (international time standard)
//          - keeps code consistent across time zones
const startOfDay = new Date();
startOfDay.setUTCHours(0, 0, 0, 0);
console.log(startOfDay);

const endOfDay = new Date();
endOfDay.setUTCHours(23, 59, 59, 999);
console.log(endOfDay);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Start and End of the Day in Local time

// // ✅ In Local Time (the time zone the visitor's computer is in)
// //             - will differ for users with different GEOs
// const start = new Date();
// start.setHours(0, 0, 0, 0);
// console.log(start);

// const end = new Date();
// end.setHours(23, 59, 59, 999);
// console.log(end);
