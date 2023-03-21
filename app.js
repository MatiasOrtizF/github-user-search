const mode = document.querySelector(".mode");
const modeStatus = document.getElementById("mode-status");
const imageMode = document.getElementById("image-mode");
mode.addEventListener("click", e=> {
    if(modeStatus.innerHTML=="light") {
        modeStatus.innerHTML="dark";
        imageMode.src = "img/icon-moon.svg";
    } else {
        modeStatus.innerHTML="light";
        imageMode.src = "img/icon-sun.svg";
    }
})

const userName = document.getElementById("user-name");
const button = document.getElementById("button");


const avatar = document.getElementById("avatar");
const nameComplete = document.getElementById("name");
const login = document.getElementById("login");
const join = document.getElementById("join");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const local = document.getElementById("location");
const blog = document.getElementById("blog");
const userTwitter = document.getElementById("user_twitter");
const company = document.getElementById("company");

button.addEventListener("click", e=> {
    cargarApi();
})

function cargarApi() {
    fetch ('https://api.github.com/users/'+userName.value)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        avatar.src = data.avatar_url;
        nameComplete.innerHTML = data.name;
        login.innerHTML = "@" + data.login ;
        let dataCreated = data.created_at.slice(0,-10) ;
        var fecha = new Date(dataCreated);
        var dia = fecha.getDate();
        var meses = ["Jan","Feb","Mar","Ap","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        var mes = meses[fecha.getMonth()];
        var anio = fecha.getFullYear();

        var nuevaFecha = dia + " " + mes + " " + anio;
        join.innerHTML = "Joined " +  nuevaFecha;
        bio.innerHTML = data.bio ;
        repos.innerHTML = data.public_repos ;
        followers.innerHTML = data.followers ;
        following.innerHTML = data.following ;
        if(data.location==null) {
            data.location = "Not Available";
        }
        if(data.blog=="") {
            data.blog = "Not Available";
        }
        if(data.twitter_username==null) {
            userTwitter.innerHTML = "Not Available";
        } else {
            userTwitter.innerHTML = "@" + data.twitter_username;
        }
        if(data.company==null) {
            data.company = "Not Available";
        }
        local.innerHTML = data.location ;
        blog.innerHTML = data.blog ;
        company.innerHTML = data.company ;
    })
}


