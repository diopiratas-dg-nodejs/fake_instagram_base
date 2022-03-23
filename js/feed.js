let seeMore = document.getElementById('more')
window.addEventListener('load', function(){
    if (sessionStorage.getItem('username') != null){
        let userLogged = sessionStorage.getItem('username');
        let divUser = document.querySelector('.avatar-content')
        let bUserName = divUser.getElementsByTagName('b')[0]  
        bUserName.innerText = userLogged
    }
})

seeMore.addEventListener('click', function() {
    let divCont = document.getElementsByTagName('main')[0]
    let divCard = document.createElement('div')
    divCard.className = "card"
    divCard.innerHTML = '<div class="card" id="card2"><div class=\"card-header\"><div><img class=\"avatar\" src=\"/img/avatar-example_1.png\"><b>paulovieira.oficial</b></div><img src=\"/img/icons/more-vertical.svg\"></div><div class=\"card-img\"><img src=\"/img/publication_example_1.jpg\"></div><div class=\"card-body\"><div class=\"card-itens\"><div class=\"likes\">  <img src=\"/img/icons/heart.svg\" width=\"24px\">  <b>1 likes</b></div><b>Postado no dia: 09/03/2022</b></div><div class=\"card-comments\"><p><b>paulovieira.oficial</b> Hoje tem BIG TERAPIA com @jadepicon no @bbb! ✨  </p></div></div><form class=\"form-comments\" action=\"/comentar\" method=\"post\"><input type=\"text\" hidden name=\"postId\" value=\"\"><input type=\"text\" placeholder=\"Adicione um comentário...\" name=\"description\"><button type=\"submit\">Comentar</button></form></div>';

    let seeM = document.getElementById('more')
    divCont.removeChild(seeM)

    let more = document.createElement('button')
    more.setAttribute('id','more')
    more.innerText = 'Ver Mais'
    
    divCont.appendChild(divCard)    
    divCont.appendChild(more)
})

seeMore.addEventListener('mouseover', function() {
    seeMore.style.cssText = 'cursor: pointer;'
})

let btnLike = document.querySelector('.likes')

btnLike.ondblclick =  function() {
    let img = btnLike.getElementsByTagName('img')[0]    
    
    if (img.getAttribute('src') === '/img/icons/heart.svg'){
        img.setAttribute('src','/img/icons/red-heart.png')
        let b = btnLike.getElementsByTagName('b')[0]
        b.innerText = '2 Likes'
    }else{
        img.setAttribute('src','/img/icons/heart.svg')
        let b = btnLike.getElementsByTagName('b')[0]
        b.innerText = '1 Likes'
    }    
}

document.querySelector('.search').onmouseover = function () {
    document.querySelector('.busca').style.cssText = 'box-shadow: 0px 1px 3px black';   
}