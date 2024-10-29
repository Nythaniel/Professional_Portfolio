document.getElementById("MainHeading").textContent = "welcome To Javascript";
document.getElementById("myText").textContent = "This is my text";
document.getElementById("colorDiv").style.backgroundColor = "Green"; 
document.getElementById("textPara").style.fontSize = "50px"
document.getElementById("buttonClk").addEventListener("Click", function(){
    this.textContent = "ButtonClicked"});  

    document.getElementById("clickBg").addEventListener("click", function(){
        document.body.style.backgroundColor = "purple"
    }) 

    document.getElementById("clickParaColor").addEventListener("click", function(){

        document.getElementById("colorDiv").style.backgroundColor = "purple"
    })
    
    document.getElementById("Add").addEventListener("click", function(){

        let newItem = document.createElement("li");
        newItem.textContent = "Item 3"; 
        document.getElementById("myList").appendChild(newItem); 
        
    })


    let newHeading = document.createElement("h3"); 
    newHeading.textContent = "End header"
    document.getElementById("endHead").appendChild(newHeading)  

    let firstItem = document.getElementById("myList").children[0];
    firstItem.remove(); 