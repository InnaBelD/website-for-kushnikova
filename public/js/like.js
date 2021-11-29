let likeButtons = document.getElementsByClassName('like1');

function likeChange(event){
    let likedButton = event.target;

    if (likedButton.style.color == 'black'){
        likedButton.style.color = 'white';
    }
    else{
        likedButton.style.color = 'black';
    }
}

for (let i=0;i<likeButtons.length;i++){
    likeButtons[i].addEventListener('click', likeChange);
}

