//statusBlock.classList.add('sk-pulse');

export const comments = () => {
    const commentsContainer = document.querySelector('#reviews').querySelector('.comments-container');
    const status = document.createElement('div');
    let counter = 0;
    status.classList.add('sk-pulse');
    commentsContainer.appendChild(status);

    const render = (comments) => {
        commentsContainer.innerHTML = '';
        commentsContainer.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comment-item">
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="images/users/${comments[0].image ? comments[0].image : 'user_none.png'}" alt="" class="img-responsive avatar">
							</div>
						</div>
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-green review-arrow review-arrow-left">
								<p class="text-normal">${comments[0].author}</p>
								<p>${comments[0].comment}</p>
							</div>
						</div>
					</div>
					<div class="review-margin-bottom row comment-item">
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-gray review-arrow review-arrow-right">
								<p class="text-normal">${comments[1].author}</p>
								<p>${comments[1].comment}</p>
							</div>
						</div>
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="images/users/${comments[1].image ? comments[1].image : 'user_none.png'}" alt="" class="img-responsive avatar">
							</div>
						</div>
					</div>
					<div class="row comment-item">
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="images/users/${comments[2].image ? comments[2].image : 'user_none.png'}" alt="" class="img-responsive avatar">
							</div>
						</div>
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-orange review-arrow review-arrow-left">
								<p class="text-normal">${comments[2].author}</p>
								<p>${comments[2].comment}</p>
							</div>
						</div>
					</div>
        `);
    }



    const slicer = (arr) => {
        render(arr.slice(counter, counter + 3));
        if (counter + 3 < arr.length) {
            counter++;
        } else {
            counter = 0;
        }

    }

    const getComments = () => {
        return fetch('./comments.json').then(res => res.json());
    }
    getComments().then(data => {
        render(data.comments.slice(counter, counter + 3))
        counter = 1;
        let timerId = setInterval(() => slicer(data.comments), 20000);
    });
}