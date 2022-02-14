export const sendForm = (formName) => {
    const form = document.querySelector(formName);
    const modalHeader = document.querySelector('.header-modal');
    const modalServices = document.querySelector('.services-modal');
    const overlay = document.querySelector('.overlay');

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
        console.log(formElements);
        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (formBody.page == 'Балконы') {
            const calcTotal = document.querySelector('#calc-total');
            if (calcTotal.value) {
                formBody.calcPrice = calcTotal.value;
            } else {
                const calcBlock = document.querySelector('#calc');
                calcBlock.scrollIntoView({ behavior: "smooth" });
                alert('Воспользуйтесь калькулятором!')
                return;
            }
        }

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                formElements.forEach(element => {
                    if (element.name == 'fio' || element.name == 'phone') {
                        element.value = '';
                    }
                });
            }).then(data => {
                modalHeader.style.display = 'none';
                modalServices.style.display = 'none';
                overlay.style.display = 'none';
            }).catch(error => {
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
            console.log(event);
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
}