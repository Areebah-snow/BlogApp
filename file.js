const fs = require("fs")

//reading file
// fs.readFile("C:\\Users\\mudat\\Documents\\MIT daft.txt", (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// });


//writing file

// fs.writeFile("C:\\Users\\mudat\\Documents\\MIT daft.txt", "I like ice cream",()=>{
//     console.log("Action successful")
 
// })

//directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("folder created successfully")
})
}else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })
}


//deleting file

if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("File deleted")
    })
}


// const love = require('love')

// if(love.existsSync('./heart/love')){
//     love. unlink('./heart/love')
    
// }