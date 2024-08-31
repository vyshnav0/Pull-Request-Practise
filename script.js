document.addEventListener("DOMContentLoaded", function(){
    const userList = document.getElementById("user-list").getElementsByTagName("li");
    const lastUser = userList[0].innerText;
    document.getElementById("last-user").innerText += " "+lastUser;

    const links = document.querySelectorAll("#user-list a");
    links.forEach(link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

});