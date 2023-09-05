const { error } = require('console')
const fs = require('fs')

const callbackFn = (err, data)=>{
    if(err){
        error("not available")
    }
    else{
        console.log(data)
    }
}


fs.readFile('file.txt','utf8',callbackFn)