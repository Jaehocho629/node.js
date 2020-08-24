//js에서 function을 만드는 두 가지 방법

// function func1(){func
//     console.log("This is Function1");
// }

// func1();

// const func2 = ()=>{
//     console.log("This is Function2")
// }
// func2();

function func1(elem){
    if (elem.city === 'Seoul'){
        return true
    }else{
        return false
    }
}

const func2 = (elem)=>{
    if (elem.city === 'Seoul'){
        return true
    }else{
        return false
    }
}

//삼향연산자

const func3 = (elem)=> (elem.city==='Seoul'? true : false);

//elem.city ? true : false
//==
// if (elem.city === 'Seoul'){
//     return true
// }else{
//     return false
// }


const profile = [{
    name : '신윤수',
    city : 'Seoul'
}]

console.log(func1(profile[0]))
console.log(func2(profile[0]))
console.log(func3(profile[0]))