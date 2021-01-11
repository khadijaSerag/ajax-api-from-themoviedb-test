var posts = [];

var myRequest = new XMLHttpRequest();
// myRequest.open("Get","http://jsonplaceholder.typicode.com/posts");
myRequest.open("Get", "https://api.themoviedb.org/3/trending/movie/week?api_key=0138fc685877277eb0da116e4c6430aa");
myRequest.send();

myRequest.addEventListener("readystatechange", function () {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        posts = JSON.parse(myRequest.response).results// دى عشان احول الداتا اللى جات من استرنج لاراى عشان اعرف اتعامل معاها 
        // console.log(posts);
        displayPosts();
    }
});

function displayPosts() {
    var cartoona = ``;
    for (var i = 0; i < posts.length; i++) {
        cartoona += ` <div class="col-md-3">
        <div class="Trending">
            <img src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}" class="w-100 py-3">
            <h5>${posts[i].vote_average}</h5>
            <h4>${posts[i].original_title}</h4>
            <p>${posts[i].overview}</p>
        </div>
    </div>`
    }
    document.getElementById("myRow").innerHTML = cartoona;
}
