async function asyncFunction(){
    console.log("asyncFunction Start")

    await setTimeout(()=> {},3000);
    const result = a+b;
    console.log("asyncFunction End")
    return result;
}

function main(){
    console.log("task1");
    console.log("task2");

    const a = asyncFunction(1,2).then(result =>{
        console.log(result)
    });
    console.log(a)
    console.log("task3");
    console.log("task4");
}
main()