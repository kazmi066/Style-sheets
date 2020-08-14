let register = document.querySelector('#register');
let signin = document.querySelector('#signin');
let signBtns = document.querySelector('.sign-btns');

signBtns.addEventListener('click',signSection);



function signSection(e){

    // remove Active class from Both
    let btns = document.querySelectorAll('.sign-btns .sign');
    btns.forEach(btn => {
        btn.classList.remove('active');
    })

    e.target.classList.add('active');

    if(e.target.classList.contains('signin')){
        signin.style.display = 'initial';
        register.style.display = 'none';
    }
    else{
        signin.style.display = 'none';
        register.style.display = 'initial';
    }

}