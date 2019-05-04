




module.exports.giveItBackLater = function (value, callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 1000)
}





module.exports.promiseToGiveItBackLater = function (value) {
        return new Promise((resolve, reject) => {
            function loadComplete() {

                if(value){
                    resolve(value)
                } else{
                    reject(new Error('ERROR'))
                }
            }
            setTimeout(loadComplete, 1000)        
        })
    }

    
module.exports.addSomePromises = function (somePromise) {
    somePromise("foo")
        
    /*return new Promise((resolve, reject) => {
        function loadComplete() {

            if(somePromise){
                resolve("foo")
            } else{
                reject(new Error("bar"))
            }
        }
        setTimeout(loadComplete, 1000)  }      
   )*/
    .then(result =>  console.log(result + result))
    .catch(error => console.log(error))
}