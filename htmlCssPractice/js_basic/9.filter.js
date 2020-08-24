const arr = [{
    name: "신윤수",
    city:"서울",
    country:"korea",
    gender:'male'

},{
    name: "신민수",
    city:"울산",
    country:"korea",
    gender:'male'
},{
    name: "judy",
    city:"Sanfrancisco",
    country:"USA",
    gender:'female'
}];

const arr2 = arr.filter(function(elem) {
    if(elem.gender ==='male'){
        return true
    }else{
        return false
    }
    }
);

console.log(arr);
console.log('----');
console.log(arr2);

const arr3 = arr.filter(
    (elem) => (elem.gender === 'male'? true : false)
)

console.log(arr3);