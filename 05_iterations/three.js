// For Each loop

let coding = ["js", "cpp", "java", "python"]

coding.forEach(function (item){
    console.log(item);
})

// With arrow functions
coding.forEach((item)=>{
    console.log(item);
})

// It also has index and the whole array with it that we can access
coding.forEach((item, index, arr)=>
{
    console.log(item, index, arr);  
})

// We can create a separate function and can use it as a callback func

function myFun(item)
{
    console.log(item);
}

coding.forEach(myFun)

// It is easy to traverse array of objects using for each

let myLanguages =[
    {langageName:"javascript", languageExt:"js"},
    {langageName:"python", languageExt:"py"},
    {langageName:"C++", languageExt:"cpp"},
]

myLanguages.forEach((obj)=>{
    console.log(`Language:${obj.langageName}, \nExtension:${obj.languageExt}`);
})
