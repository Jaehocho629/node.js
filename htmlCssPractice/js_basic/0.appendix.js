// //객체 전개 연산자.(...)

// const arr = [1,2];
// const [sample1, sample2] = arr;
// console.log(sample1);
// console.log(sample2);

const arr = [1,2,3,4];
const[sample1, ...rest] = arr;
console.log(sample1);
console.log(rest);

const newArr = [5,rest];
console.log(newArr);
console.log(newArr.length);
const newArr2 =[5,...rest];
console.log(newArr2);
console.log(newArr2.length);

console.log('-----------------------');
const profile = {
    name:"신윤수",
    city:"seoul",
    country:"korea"
}
// const {name,city,country}=profile;
// console.log(name);
// console.log(city);
// console.log(country);

const {name,kk,...restObj}=profile;
console.log(name);
console.log(kk);
console.log(restObj)

const newObj = {
    ...profile,
    endTime: '6:00'
}
console.log(newObj);