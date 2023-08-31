const fs = require('fs')
const replaceThis = "bhavy"
const replaceWith = "BHAVY"
const preview = true
const folder = __dirname

try{
    const data = fs.readdir(folder, (err,data)=>{
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile=path.join(folder,item)
            let newFile =path.join(folder ,item.replaceAll(replaceThis,replaceWith))

            if(!preview){
                fs.rename(oldFile,newFile,()=>{
                    console .log("rename Successfuly");
                } )
            }
            else{
                if("data/"+item !== newFile)
                console.log("/data"+ item + "will be renamed to "+ newFile)
            }
            
        }

    })
}catch(err){
    console.log(err);
}
