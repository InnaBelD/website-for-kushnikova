function deleteDa(event){
    let callerId = event.target.dataset.bsOk;
    let caller = document.querySelector(callerId);
    let modal = bootstrap.Modal.getInstance(event.target.parentNode.parentNode.parentNode.parentNode);
    deleteRow(caller);
    modal.hide();
}

function deleteRow(tablElement) {
    let row = tablElement.parentNode.parentNode;
    row.parentNode.removeChild(row);

}

function yesID(event){
    for (let i=0;i<document.getElementsByClassName('del').length;i++){
       document.getElementsByClassName('del')[i].dataset.bsOk = '#'+this.id;
    }
}

document.querySelector('.del').addEventListener('click', deleteDa);

for (let i=0;i<document.getElementsByClassName('delete').length;i++){
    document.getElementsByClassName('delete')[i].addEventListener('click', yesID);
}