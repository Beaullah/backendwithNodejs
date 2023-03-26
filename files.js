const fs = require('fs')
// reading files
// fs.readFile("./docs/blog.txt", (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data. toString())
// })


// writting files

// fs.writeFile("./docs/blog.txt", "hello world", () =>{
//     console.log('file was written')
// })
// fs.writeFile("./docs/blog1.txt", "hello world", () =>{
//     console.log('file was written')
// })              // creates a new file if there isnt any





// directories
if (!fs.existsSync("./assets")) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    }
    ) 
    
} else {
    fs.rmdir("./assets", (err) =>{
        if (err) {
            console.log(err)
        }
        console.log("folder deleted")
    })
}
// code above creates and deletes files

// deleting files
if(fs.existsSync("./deleteMe.txt")){
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('file  deleted')
    })
}