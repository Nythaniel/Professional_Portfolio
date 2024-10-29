document.getElementById("Button1").addEventListener("click", function(){

    alert("Button 1 was clicked!")
})
document.getElementById("Button2").addEventListener("click", function(){

    alert("Button 2 was clicked!")
})
document.getElementById("Button3").addEventListener("click",function(){
    document.getElementById("Para").textContent = "Hello World!"
    
})
document.getElementById("Button4").addEventListener("click", function(){
    document.getElementById("Para").textContent = "Change Me!"

})

document.getElementById("Submit").addEventListener("click", function(){
    let input = document.getElementById("userInput").value 
    document.getElementById("display").textContent = input
    let lname = document.getElementById("lName").value
    document.getElementById("display2").textContent = lname
   
})
document.getElementById("Delete").addEventListener("click",function(){
    document.getElementById("Para").textContent = ""
} )