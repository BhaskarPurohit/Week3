const { error } = require('console')
const fs = require('fs')

const callbackFn = (err, data)=>{
    if(err){
        error("not available")
    }
    else{
        return data
    }
}


fs.readFile('file.txt','utf8',callbackFn)