
// <!-- DISPLAYING USER DATA
// Task:
// Create an HTML file with a button labeled "Fetch Users".
// Upon clicking the button, use the fetch() function to retrieve user data from the Reqres API.
// Display the user data in a visually appealing manner on the webpage.
// Use CSS to style the user information.
// Guidelines:
// Create a JavaScript file index.js to write the logic for fetching and displaying user data.
// Use the Reqres API to fetch user data.
// The displayed information should include at least the user's name, email, and avatar. -->


function usersData(){

    let container=document.getElementById("container")
    fetch(`https://reqres.in/api/users?page=2`)
    .then( (res)=> res.json())
    
    .then( function(rs){
        container.innerHTML=" "
        displayData(rs.data)
    })
    
    function displayData(data){
        data.forEach((item)=>{
            let div=document.createElement("div");
    
            let userImg=document.createElement("img")
        userImg.src=item.avatar;
    
           
    
            let userName=document.createElement("p");
            userName.textContent= item.first_name +" "+ item.last_name;
    
            let userEmail=document.createElement('p');
            userEmail.textContent="Email"+item.email;

            div.append(userImg,userName,userEmail);
    
            container.appendChild(div)
    
        })
    }
}