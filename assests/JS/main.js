const btChange = document.getElementById('btChange');
const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const h1 = document.getElementsByTagName('h1')[0];
const footer = document.getElementsByTagName('footer')[0];
const p = document.getElementsByTagName('p')[0];

btChange.addEventListener('click', changeTheme)
main.addEventListener('dblclick', changeFormationClasses)

function changeTheme(){
    changeClasses()
    changeText()
}
function changeClasses(){
    body.classList.toggle('darkMode');
    btChange.classList.toggle('darkMode');
    footer.classList.toggle('darkMode');
}
function changeText(){
    if(body.classList.contains('darkMode')){
        h1.innerHTML='Dark Mode: <b>ON</b>'
        btChange.innerHTML='Light Mode'
    }else{
        h1.innerHTML='Light Mode: <b>ON</b>'
        btChange.innerHTML='Dark Mode'
    }
}
function changeFormationClasses(){
    body.classList.toggle('dbClick')
    main.classList.toggle('dbClick')
    footer.classList.toggle('dbClick')
    p.classList.toggle('dbClick')

}