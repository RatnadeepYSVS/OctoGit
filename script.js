let gitimg = document.createElement('img')
gitimg.src='https://i.pinimg.com/originals/11/8e/6f/118e6f39fac9344d6589c84d5ee9e667.png'
gitimg.style.width='20%'
gitimg.style.height='20%'
document.body.append(gitimg)
let h3 = document.createElement('h1')
h3.innerHTML='OctoGit - Find GitHub Profiles Instantly.'
document.body.append(h3)
h3.style.color='white'
document.body.style.fontFamily='Lato'
document.body.style.textAlign='center'
let input = document.createElement('input')
input.style.border='none';
input.style.outline='none';
input.style.fontFamily='Lato'
input.style.width='20%'
input.style.padding='1.2%'
input.style.color='#79B8FF'
input.style.background='#26303C'
let btn = document.createElement('a')
btn.href='/repo.html'
btn.style.textDecoration='none'
input.placeholder='Search Users...'
document.body.append(input)
btn.innerHTML='&#x1F50D;'
document.body.append(btn)
btn.style.background='red'
btn.style.padding='1%'
btn.style.border='3px solid white'
btn.style.marginLeft='20px'
document.body.style.background='#1C2024'
btn.addEventListener('click',()=>{
    localStorage.setItem('name',input.value)
})