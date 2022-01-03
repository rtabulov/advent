import { binary } from './data/3';

const LENGTH = 12;
const INPUT_LENGTH = 1000;

const onesMap = new Array(LENGTH).fill(0);

binary.forEach((bits) => {
  bits.split('').forEach((bit, position) => {
    if (bit === '1') {
      onesMap[position] += 1;
    }
  });
});

let oxygen = [...binary];
let co2 = [...binary];
let bitPosition = 0;
while (co2.length > 1 || oxygen.length > 1) {
  const most = onesMap[bitPosition] >= 500 ? '1' : '0';
  const least = onesMap[bitPosition] <= 500 ? '1' : '0';
  if (oxygen.length > 1) {
    oxygen = oxygen.filter((z) => z[bitPosition] === most);
  }
  if (co2.length > 1) {
    co2 = co2.filter((z) => z[bitPosition] === least);
  }
  bitPosition++;
}

console.log(oxygen);
console.log(co2);
console.log({ result: parseInt(oxygen[0], 2) * parseInt(co2[0], 2) });
