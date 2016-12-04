$(document).ready(function() {
    var bottomDiv = document.getElementById('bottom');
    
    var submitBut = document.getElementById("submit");
    
    var userRegEx = /^[a-zA-Z0-9]{8,15}$/;
    var imgRegEx = /\.(jpg|png|gif)$/;
    var movieRegEx = /^[a-zA-Z ]{1,}$/;
    var commentRegEx = /^[a-zA-Z0-9 /.?!]{1,100}$/;
    
    var username = document.getElementById('username');
    var img = document.getElementById('img');
    var movie = document.getElementById('movie');
    var comment = document.getElementById('comment');
    
    onkeyup = function(){
        if((commentRegEx.test(comment.value) == true) && (movieRegEx.test(movie.value) == true) && (imgRegEx.test(img.value) == true) && (userRegEx.test(username.value) == true)){
            console.log('works');
            submitBut.style.display = 'block';
        }
    }

    username.onkeyup = function() {
        console.log('Username being inputed');
        console.log(userRegEx.test(username.value), username.value)
        if(userRegEx.test(username.value) == true){
            username.style.color = '#0F0';
        }
        else{
            username.style.color = '#F00';
        }
    }
    
    img.onkeyup = function() {
        console.log('Image link being inputed');
        console.log(imgRegEx.test(img.value), img.value)
        if(imgRegEx.test(img.value) == true){
            img.style.color = '#0F0';
        }
        else{
            img.style.color = '#F00';
        }
    }
    
    movie.onkeyup = function() {
        console.log('Movie title being inputed');
        console.log(movieRegEx.test(movie.value), movie.value)
        if(movieRegEx.test(movie.value) == true){
            movie.style.color = '#0F0';
        }
        else{
            movie.style.color = '#F00';
        }
    }
    
    comment.onkeyup = function() {
        console.log('Comment being written');
        console.log(commentRegEx.test(comment.value), comment.value)
        if(commentRegEx.test(comment.value) == true){
            comment.style.color = '#0F0';
        }
        else{
            comment.style.color = '#F00';
        }
    }
    
    submitBut.onclick = function() {
        if((commentRegEx.test(comment.value) == true) && (movieRegEx.test(movie.value) == true) && (imgRegEx.test(img.value) == true) && (userRegEx.test(username.value) == true)){
            var holder = document.createElement('div');
            var createdImg = document.createElement('div');
            var commentDiv = document.createElement('div');
            var usernameDiv = document.createElement('div');
            var utxt = document.createElement('p');
            var ctxt = document.createElement('p');

            createdImg.style.backgroundImage = 'url('+img.value+')';
            ctxt.innerHTML = comment.value;
            utxt.innerHTML = username.value;

            createdImg.className = 'imgdiv';
            commentDiv.className = 'commentdiv';
            ctxt.className = 'ctxt';
            usernameDiv.className = 'usernamediv';
            utxt.className = 'utxt';
            holder.className = 'holder';

            commentDiv.appendChild(ctxt);
            usernameDiv.appendChild(utxt);

            $.ajax({
                url: 'http://www.omdbapi.com/?t='+movie.value, 
                dataType: 'jsonp',
                success: function(resp){
                    console.log(resp);

                    var picture = document.createElement('div');

                    picture.style.backgroundImage = 'url('+resp.Poster+')';

                    picture.className = 'moviediv';

                    holder.appendChild(picture);
                }
            });

            holder.appendChild(createdImg);
            holder.appendChild(commentDiv);
            holder.appendChild(usernameDiv);

            bottomDiv.appendChild(holder);

            bottomDiv.appendChild(holder);
        }
    }
});