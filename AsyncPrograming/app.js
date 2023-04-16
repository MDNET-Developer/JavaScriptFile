function getData(data,addtional){

    return new Promise(function(resolve,reject){
       
        setTimeout(function(){
         if(typeof data === "number"){
            resolve(data+addtional);
         }
         else{
            reject(new Error("Rəqəm tipində verilən daxil edin."));
         }

        },5000)

    });
}

// getData(123).then(function(response){

//     console.log("Gələn mesaj: " + response);
// }).catch(function(errorMessage){
//     console.error(errorMessage)
// })

getData(45,5)
.then(response=> 
    {console.log("Gələn mesaj: "+ response);
    return response+2;
})
.then(otherResponse=>{console.log("Cavab: "+ otherResponse)})
.catch(error=> console.error(error))