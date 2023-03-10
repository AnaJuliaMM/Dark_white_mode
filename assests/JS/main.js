btChange = document.getElementById('btChange');
btChange.addEventListener("click", changeTheme);
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const button = document.getElementsByTagName('button')[0];
const footer = document.getElementsByTagName('footer')[0];


function changeTheme(){
    body.classList.toggle('.darkMode');
    footer.classList.add('.darkMode');
    h1.innerText='aaaaaaaaa';

}
//mUDAR ESCRITA H1
//mUDAR ESCRUTA BUTTON
//Mudar cores(classList)
