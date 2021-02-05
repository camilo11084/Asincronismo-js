const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey resolvimos la promesa');
        }else{
            reject('Ups no resolvimos');
        }
    });
;}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true');
            }, 2000)
        } else{
            const error = new Error('Whoop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//correr varias promesas al mismo tiempo con promise ALL

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results',response);
    })
    .catch(err => {
        console.error(err);
    })