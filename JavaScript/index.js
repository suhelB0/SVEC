
//Arrays
// let employee=["suhel","shaik","muhammed"]
// console.log(employee[1])

//Alerts

// alert("Registration is compelted successfully")

// let number=prompt("Enter numbser")
// console.log(number)

// confirm("Are you sure to exit?")

// console statements

// console.log("welcome")
// console.info("For Information")
// console.warn("check the code once")
// console.error("name is not is defined")

// spread operator

// let external=[23,33,54,44,32,33]
// let internal=[12,3,14,16,17]

// let results=[23,34,external]
// let fianl=[445,43,...external,...internal]
// console.log(results)
// console.log(fianl)

//Rest Parameter

// function addition(x,y,...remainData){
//     console.log(x)
//     console.log(y)
//     console.log(remainData)
//     console.log(typeof(remainData))
// }
// console.log(addition(2,3,21,34,56,78,90,2,33445,6,7,"suhel"))

// Destructuring of Array

// let employee=["sunil","Gopinath","Abdul","suhel"]

// let [name1,name2,...data]=employee
// console.log(name1)
// console.log(data)

// Function

// let demo=function(x,y){
//      return x+y
//     }
//     console.log(demo(3,4))

// (function(x,y){
//     return x*y
// })
// console.log((3,4))


// setTimeout(function(){
//     console.log("welcome")
// },5000)

// Arroow function

// let demo=(x,y)=>{
//     return x*y
// }
// console.log(demo(3,4))

// Annonymous functon

// (function(){
//     console.log("welcome")
// })()

let emp =["suhel","naveen","karthik"]
// for(let i=0;i<emp.length;i++)
// {
//     console.log(emp[i])
// }

// for-in
// for(let i in emp){
//     console.log(i)
// }

// for-of
// for(let i of emp)
// {
//     console.log(i)
// }

// emp.forEach(function(element,index){
//     console.log(element+" k "+index)
// })

// let result=emp.map(function(element,index){
//     return element+" k "+index
// })
// console.log(result)
// console.log(emp)

let result=emp.map((e,i)=>{
    return e+" k "+i
})
console.log(result)
console.log(emp)

