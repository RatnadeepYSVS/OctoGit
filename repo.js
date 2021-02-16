const user = localStorage.getItem('name')
let title = document.querySelector('title')
let Body= document.body
Body.style.backgroundColor='#1C2024'
Body.style.fontFamily='Lato'
Body.style.color='white'
url = 'https://api.github.com'
const getData = async ()=>{
    const userdata = await fetch(`${url}/users/${user}`)
    const repodata = await userdata.json()
        const pa = document.createElement('img')
        title.innerHTML=`OctoGit - ${user.trim()}.`
        pa.src=repodata.avatar_url
        pa.style.width='20%';
        pa.style.height='20%';
        pa.style.borderRadius='50%'
        pa.style.display='block';
        pa.style.margin='20px auto'
        Body.append(pa)
        const h1 = document.createElement('h1')
        h1.innerHTML=`@${user}`;
        h1.style.textAlign='center';
        h1.addEventListener('click',()=>window.location.href=`https://github.com/${user}`)
        h1.style.cursor='pointer'
        Body.append(h1)
        const dataArray= [`Followers:-${repodata.followers}`,`Following:-${repodata.following}`]
        dataArray.map(i=>{
            const para = document.createElement('p')
            para.innerHTML=i
            para.style.textAlign='center'
            Body.append(para)
        })
        const h11 = document.createElement('h1')
        h11.innerHTML=`USER STATS`
        h11.style.textAlign='center'
        Body.append(h11)
        const imgdata = document.createElement('img')
        imgdata.src=`https://github-readme-stats.vercel.app/api?username=${user}&&show_icons=true&title_color=ffffff&icon_color=bb2acf&text_color=daf7dc&bg_color=151515`
        imgdata.style.display='block'
        imgdata.style.margin='20px auto'
        Body.append(imgdata)
        const h23 = document.createElement('h1')
        h23.innerHTML=`CONTRIBUTIONS MADE`
        h23.style.textAlign='center'
        Body.append(h23)
        const imgssdata = document.createElement('img')
        imgssdata.src=`https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=nightowl`
        imgssdata.style.width='50%'
        imgssdata.style.display='block'
        imgssdata.style.margin='20px auto'
        Body.append(imgssdata)
        const h22 = document.createElement('h1')
        h22.innerHTML=`TOP LANGUAGE STATS`
        h22.style.textAlign='center'
        Body.append(h22)
        const imgsdata = document.createElement('img')
        imgsdata.src=`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact`
        imgsdata.style.width='50%'
        imgsdata.style.display='block'
        imgsdata.style.margin='20px auto'
        Body.append(imgsdata)
        const heading = document.createElement('h1')
        heading.innerHTML=`Repos of ${user}`
        heading.style.textAlign='center'
        Body.append(heading)
        const arr= async ()=>{
            const data = await fetch(`${url}/users/${user}/repos`)
            const fetchedData = await data.json()
            const divo = document.createElement('div')
            divo.classList='reposdiv'
            fetchedData.map(i=>{
                const fetchData = [`Name:-${i.name}`,`Size:-${i.size}KB`,`Language:-${i.language}`]
                const chdiv = document.createElement('div')
                chdiv.classList='repodiv'
                fetchData.map(j=>{
                    const repopara = document.createElement('p')
                    repopara.innerHTML = j
                    repopara.style.color='black'
                    chdiv.append(repopara)
                })
                chdiv.style.textAlign='center'
                chdiv.style.margin='10px'
                chdiv.style.padding='10px'
                chdiv.style.width='250px'
                chdiv.style.background='white'
                divo.append(chdiv)
            })
            divo.style.display='flex'
            divo.style.flexWrap='wrap'
            divo.style.marginLeft='15vw'
            Body.append(divo)
        }
        arr()
}
getData()
