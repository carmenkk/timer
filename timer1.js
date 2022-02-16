const args = process.argv;
let arr = args.slice(2);
arr.sort();

for (let num of arr) {
  if(num >0) {
  setTimeout(() => {
    process.stdout.write('\x07');
  },num * 1000);
}
}