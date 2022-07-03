
 let row = document.getElementById('poster');

 let name = document.getElementById('name');
 let email = document.getElementById('email');
 let phone = document.getElementById('phone');
 let age = document.getElementById('age');
 let password = document.getElementById('password');
 let rePassword = document.getElementById('rePassword');

 let alertName = document.getElementById('namealert');
 let alertEmail = document.getElementById('emailalert');
 let alertPhone = document.getElementById('phonealert');
 let alertAge = document.getElementById('agealert');
 let alertPassword = document.getElementById('passwordalert');
 let alertRePassword = document.getElementById('repasswordalert');



async function myApi(type) {

    let my_api = "";
    if (type == "trending/all/day") {
        my_api = "https://api.themoviedb.org/3/trending/all/day?api_key=fdb6890df882cd2cb3c7bf239aa555d7"
    } else {
        my_api = "https://api.themoviedb.org/3/movie/" + type + "?api_key=fdb6890df882cd2cb3c7bf239aa555d7&language=en-US&page=1"

    }
    var myresponse = await fetch(my_api);

    var mydata = await myresponse.json();
    console.log(mydata.results[0]);
    return mydata.results;
}

//var x =  myApi();
var divs = "";




async function getData(type) {
   
    var data = await myApi(type);
    console.log(data);


    for (var i = 0; i < data.length; i++) {
        let img_path = "https://image.tmdb.org/t/p/w500" + data[i].poster_path;
        let name;
        let date = "";


        if (data[i].name == null) {
            name = data[i].title
        } else { name = data[i].name }

        if (data[i].first_air_date != null) {
            date = data[i].first_air_date
        }

        divs += `<div class="col-lg-4 col-md-6 col-sm-12 my">

        <div class="my-widget shadow rounded position-relative">
            <div class="post">
                <img class="img-fluid rounded" src= '${img_path}' alt="">
                <div class="layer d-flex align-items-center p-3">
                    <div class="info p-0">
                        <h2>${name}</h2>
                        <p>${data[i].overview}</p>
                        <p>Rate: ${data[i].vote_average}</p>
                        <p>${date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 `;
    }
    row.innerHTML = divs;
    divs = "";
}


getData("now_playing");

let links = document.querySelectorAll(".nav-bt");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click",  function(){
         console.log(links[i].title);
         getData(links[i].title);
    });
}


////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////


//console.log(position);
let width = $('.side-bar').outerWidth();
$('.slide-menu').css({
    left: `-${width}px`,
    
});


$('.side-menu-btn').click(function () {
    let position = $('.slide-menu').offset().left;
    let width = $('.side-bar').outerWidth();

    $('.slide-menu').css({
        left: position ==0? `-${width}px` :`0px`,
        transition: 'all 1s'
    });
})

//////////////////////////////////////////////////////////////////////

function vaildName(){
    let nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if(nameRegex.test(name.value) == true){
        alertName.classList.add('d-none');
        alertName.classList.remove('d-block');
    }else{
        alertName.classList.add('d-block');
        alertName.classList.remove('d-none');
    }

}

name.addEventListener('blur', function(){
    vaildName();
});

function vaildEmail(){
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*.com$/;

    if(emailRegex.test(email.value) == true){
        alertEmail.classList.add('d-none');
        alertEmail.classList.remove('d-block');
    }else{
        alertEmail.classList.add('d-block');
        alertEmail.classList.remove('d-none');
    }

}

email.addEventListener('blur', function(){
    vaildEmail();
});

function vaildPhone(){
    let phoneRegex = /^01[0125][0-9]{8}$/;

    if(phoneRegex.test(phone.value) == true){
        alertPhone.classList.add('d-none');
        alertPhone.classList.remove('d-block');
    }else{
        alertPhone.classList.add('d-block');
        alertPhone.classList.remove('d-none');
    }

}

phone.addEventListener('blur', function(){
    vaildPhone();
});



function vaildAge(){
    let ageRegex = /^[1-9]?\d$/; //0-99

    if(ageRegex.test(age.value) == true){
        alertAge.classList.add('d-none');
        alertAge.classList.remove('d-block');
    }else{
        alertAge.classList.add('d-block');
        alertAge.classList.remove('d-none');
    }

}

age.addEventListener('blur', function(){
    vaildAge();
});


function vaildPassword(){
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(passwordRegex.test(password.value) == true){
        alertPassword.classList.add('d-none');
        alertPassword.classList.remove('d-block');
    }else{
        alertPassword.classList.add('d-block');
        alertPassword.classList.remove('d-none');
    }

}

password.addEventListener('blur', function(){
    vaildPassword();
});


function vaildRePassword(){
    let pass = password.value;

    if(pass === rePassword.value){
        alertRePassword.classList.add('d-none');
        alertRePassword.classList.remove('d-block');
    }else{
        alertRePassword.classList.add('d-block');
        alertRePassword.classList.remove('d-none');
    }

}

rePassword.addEventListener('blur', function(){
    vaildRePassword();
});