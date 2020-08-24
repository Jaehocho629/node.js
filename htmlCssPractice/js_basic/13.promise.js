// setInterval(function(){
//     console.log("something!")
// },2000)

// const arr = [1,2,3,4,5];
// for (let i of arr){
//     setTimeout(function(){
//         console.log(i);
//     },2000);
//     console.log(i*10);
// }

function longTimeTask(delay = 10000){
    console.log("---longTimeTask 시작 ----");
    let now = new Date().getTime();
    // let delay = 10000;

    while(new Date().getTime() < now + delay){}
    console.log("---longTimeTask 종료 ----");
}
function simpleTask(name){
    console.log(`simpleTask ${name} 시작`)
    console.log(`simpleTask ${name} 종료`)
}
// task1 -> task2 ->(longTimeTask -> task3 -> task4) -> task5

function main(){
    simpleTask(1)
    simpleTask(2)
    // longTimeTask()
    const a = setTimeout(longTimeTask, 1).then(()=>{
        simpleTask(3)
        simpleTask(4)
    })
    console.log(a)
    // const a = asyncLongTimeTask()
    simpleTask(3)
    simpleTask(4)
    simpleTask(5)

}
function asyncLongTimeTask(){
    return new Promise((resolve,reject)=>{
        return resolve("success");
    })
}

main()