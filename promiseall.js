const a = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve([1,2,3,4,5,6,7,8,9,10])
        } else {
            reject("ERROR")    
        }
    },1000)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


Promise.all([a,promiseFour])
.then((data)=>{
    console.log(data);    
})
.catch((error)=>{
    console.log(error);
    
})