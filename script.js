document.addEventListener("DOMContentLoaded", function(){
    const userList = document.getElementById("user-list").getElementsByTagName("li");
    
    const lastUser = userList[0].innerText;
    document.getElementById("last-user").innerText += " "+lastUser;
})