const str: string = 1;

const int: number = "wrong type";

const str3: string = "";

const arr = [];

Array.from({ length: 10 }, (_, index) => {
  return index;
}).forEach((item) => {
  arr.push(item);
});

//
//
// update code to bot review. we can config to bot review after PR created
