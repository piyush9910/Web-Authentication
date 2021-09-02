
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email.slice(0,6);
    }
})


function logout(){
    firebase.auth().signOut()
}
