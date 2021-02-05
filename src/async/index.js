const doSomethinAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve('Do Somenthing Async'), 3000)
            :reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethinAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');

//como capturar errores

const anotherFunction = async () =>{
    try {
        const something = await doSomethinAsync();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}

console.log('before 2');
anotherFunction();
console.log('after 2');