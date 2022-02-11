export const modalImg = () => {
    const docContainer = document.querySelector('#documents');
    const modal = document.createElement('div');
    const imgBig = document.createElement('img');
    modal.setAttribute('id', 'myModal');
    modal.classList.add('modal');
    modal.innerHTML = '<span class="close">X</span>'
    imgBig.classList.add('modal-content');

    docContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.sertificate-document')) {
            const link = e.target.closest('.sertificate-document').href;
            imgBig.src = link;
            docContainer.appendChild(modal);
            modal.appendChild(imgBig);
            modal.style.display = "block";
            console.log(modal);
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close')) {
            modal.style.display = "none";
        }
    });
}
