// let arr = [1,2,3,4];

// let arr2 = arr.push(5);
// console.log(arr);
// console.log(arr2);

// let arr3 = arr.pop();
// console.log(arr);
// console.log(arr3);

// // ........

// console.log('---------')
// let str1 = "a,b,c,d";
// let arr1= str1.split(',');
// console.log(arr1);

// arr2=['e','f','g'];
// let str2=arr2.join(',');
// console.log(str2);

// function sampleFunction(item){
//    return item -3;

// }

// let arr = [1,2,3,4,5,6];
// function makePower(item , fn){
//     fn(item)
//     return item**2;
// }
// makePower(item,sampleFunction);

// let arr2= arr.map(function(item){
//     return item**2;
// }) 
// console.log(arr);
// console.log(arr2);

let profileArr = [
    {
        name : '조재호',
        addr : '서울',
        gender: '남'
    },
    {
        name : '민수',
        addr : '서울',
        gender: undefined
    },
    {
        name: '영희',
        addr: '부산',
        gender:'여'
    }
];

let newProfiele = profileArr.map(function(profile){
    if(profile.gender=='남'){
        return{
            ...profile,
            genderId:1
        }
    }else if(profile.gender == '여'){
        return{
            ...profile,
            genderId:2
        }
    }else{
        return{
            ...profile,
            genderId:0
        }
    }
})

console.log(newProfiele)