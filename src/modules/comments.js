//statusBlock.classList.add('sk-pulse');

export const comments = () => {
	const commentsContainer = document.querySelector('#reviews').querySelector('.comments-container');
	const status = document.createElement('div');
	let counter = 0;
	status.classList.add('sk-pulse');
	commentsContainer.appendChild(status);

	const render = (comm1, comm2, comm3) => {
		commentsContainer.innerHTML = '';
		commentsContainer.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comment-item">
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="images/users/${comm1.image ? comm1.image : 'user_none.png'}" alt="" class="img-responsive avatar">
							</div>
						</div>
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-green review-arrow review-arrow-left">
								<p class="text-normal">${comm1.author}</p>
								<p>${comm1.comment}</p>
							</div>
						</div>
					</div>
					<div class="review-margin-bottom row comment-item">
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-gray review-arrow review-arrow-right">
								<p class="text-normal">${comm2.author}</p>
								<p>${comm2.comment}</p>
							</div>
						</div>
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="images/users/${comm2.image ? comm2.image : 'user_none.png'}" alt="" class="img-responsive avatar">
							</div>
						</div>
					</div>
					<div class="row comment-item">
						<div class="col-xs-3 col-sm-2">
							<div class="review-user">
								<img src="images/users/${comm3.image ? comm3.image : 'user_none.png'}" alt="" class="img-responsive avatar">
							</div>
						</div>
						<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-orange review-arrow review-arrow-left">
								<p class="text-normal">${comm3.author}</p>
								<p>${comm3.comment}</p>
							</div>
						</div>
					</div>
        `);
	}



	const slicer = (arr) => {
		if (!arr[counter + 1]) {
			render(arr[counter], arr[0], arr[1]);
			counter++;
		} else if (!arr[counter + 2]) {
			render(arr[counter], arr[counter + 1], arr[0]);
			counter++;
		} else {
			render(arr[counter], arr[counter + 1], arr[counter + 2]);
			counter++;
		}
		if (counter >= arr.length) counter = 0;
	}

	const getComments = () => {
		return fetch('./comments.json').then(res => res.json());
	}
	getComments().then(data => {
		render(data.comments[counter], data.comments[counter + 1], data.comments[counter + 2]);
		counter = 1;
		let timerId = setInterval(() => slicer(data.comments), 3000);
	});
}