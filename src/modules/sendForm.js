export const sendForm = (formName, total) => {
    const form = document.querySelector(formName);
    const statusBlock = document.createElement('div');
    statusBlock.textContent = 'Спасибо! Мы скоро Вам позвоним';
    let price;

    if (total) {
        price = document.querySelector(total);
    }

    function noValid(element) {
        element.style.border = '5px solid red';
        setTimeout(() => {
            element.style.border = '';
        }, 2000);
    }

    const validate = (list) => {
        let success = true;
        let pattern;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name === 'phone') {
                pattern = /^[\+\d]{1,16}$/;
                if (!pattern.test(list[i].value)) {
                    noValid(list[i]);
                    success = false;
                    break;
                }
            }
            else if (list[i].name === 'fio') {
                pattern = /^[а-яА-ЯЁ-ёA-Za-z]{1,}$/;
                if (!pattern.test(list[i].value)) {
                    noValid(list[i]);
                    success = false;
                    break;
                }
            }
        }
        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };



    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                formElements.forEach(element => {
                    element.value = '';
                });
            }).then(data => {
                formElements.forEach(element => {
                    element.value = '';
                });
            })
                .catch(error => {
                    console.log('Data-Form-Error', error);
                });
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
}