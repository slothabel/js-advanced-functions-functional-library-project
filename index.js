function myEach(col, fn){
    //col => [1,2,3,4]
    if(Array.isArray(col)){
        //if its an array, iterate and call each arr elmnt to the fn
        for (let i = 0; i < col.length; i++){
             fn(col[i])
            }
        } 
        //else, its an obj so you have to isolate the elmnt's .values
    else{
        // col =  { one: 1, two: 2, three: 3, four: 4 }
        let vals = Object.values(col)
        // vals = [1, 2, 3, 4]
        for (let i = 0; i < vals.length; i++){
            fn(vals[i])
        }
        // for (let i = 0; i < Object.keys(col).length; i++)
            //since col is now an object and not an array, .length alone wont work anymore 
            //so the code after the < returns the count of elements in col (which is 4)
            // this wasnt used because i couldnt actually work with the object how i needed to, but its good to know how to get an objects length
    }
    return col
    //return original col
}

function myMap(col, fn){
    let newArr = []
    if(Array.isArray(col))
    {for (let i = 0; i < col.length; i++){
        newArr.push(fn(col[i]))
    }}
    else{
        let vals = Object.values(col)
        for (let i = 0; i < vals.length; i++){
            newArr.push(fn(vals[i]))
        }
    }
    return(newArr)
}

function myReduce(col, fn, startVal){
    // let total = 0
    for(let i = 0; i < col.length; i++){
        // (startVal += col[i])
        // fn(startVal, col[i], col)
        
         reduced = fn(startVal, col[i], col)
    }
    return reduced
    // col => [ 1, 2, 3, 4 ]
    // startVal => 10
}