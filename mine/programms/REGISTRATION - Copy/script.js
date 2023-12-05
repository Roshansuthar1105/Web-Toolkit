const signupbutton = document.getElementById('signUp');
const signipbutton = document.getElementById('signIn');
const main = document.getElementById('main');
signupbutton.addEventListener( 'click' ,()=>{
    main.classList.add("right-panel-active");
} );
signipbutton.addEventListener( 'click' ,()=>{
    main.classList.remove("right-panel-active");
} );