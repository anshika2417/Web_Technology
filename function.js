function sum(num1,num2)
{
    return num1+num2;
}

let result=sum(3,5);
console.log("Result: ",result)

function login(username="Kishan")
{
    if(username == undefined)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(login("Anshika"))



//if don't know how many arguments will come
//multiple value pass
function calculateCartPrice(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPrice(200,400,500))


//Object pass in function
const user={
    username:"Anshika",
    age:21
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`)
}

// handleObject(user)
handleObject({
    username:"Anshika",
    age:22
})



//Passing array in function
const newArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,123,543]))