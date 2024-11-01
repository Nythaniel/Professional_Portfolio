function add()
{
    document.getElementById("Submit").addEventListener("click", function(){
        let input = document.getElementById("userInput").value 
        let des = document.getElementById("userDescription").value
        let text; 
        if (input == "" || des == "") {
            text = "Input not valid";
            document.getElementById("validate").textContent = text;
        } else {
            document.getElementById("display").textContent = input
            document.getElementById("Description").textContent = des  
            text = "";
            document.getElementById("validate").textContent = text; 

        }
        
        
    })
}
document.getElementById("Delete").addEventListener("click",function(){
    document.getElementById("display").textContent = ""
    document.getElementById("Description").textContent = ""
    document.getElementById("displayImage").style.display = "none"
} )

document.getElementById("imageInput").addEventListener("change", function(event){
   document.getElementById("Submit").addEventListener("click", function(){

       const file = event.target.files[0];
       const reader = new FileReader;
       reader.onload = function(e){
           document.getElementById("displayImage").src = e.target.result;
           document.getElementById("displayImage").style.display = "block"
           
        };
        reader.readAsDataURL(file); 
    });
});