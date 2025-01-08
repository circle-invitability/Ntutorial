const { error } = require('console');
const {readFile, writeFile} = require('fs');




readFile('./content/first.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;

        }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
            if(err){
                console.log(err);
                return;
        
            }
            const second = result; 
            writeFile(
                './content/result-async.txt',
                `here is the result: ${first}, ${second}`,
                (err, result) => {
                    if (err){
                        console.log(`an error occured: $(err)`);
                    }
                    console.log(result);
                }
            )
    
        });
    
    })
        

    

