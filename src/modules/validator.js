export const validator = () => {

    const nameForm1 = document.querySelector('.order-form form[name=action-form]').querySelector('input[name=fio]');
    const phoneForm1 = document.querySelector('.order-form form[name=action-form]').querySelector('input[name=phone]');
    const nameForm2 = document.querySelector('.order-form form[name=action-form2]').querySelector('input[name=fio]');
    const phoneForm2 = document.querySelector('.order-form form[name=action-form2]').querySelector('input[name=phone]');
    const validationName = (e) => {
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^а-яА-ЯЁ-ёA-Za-z]/, '');
    };

    const validationPhone = (e) => {
        e.preventDefault();
        e.target.value = e.target.value.replace(/[^\+\d]/, '').substr(0, 16);
    }

    nameForm1.addEventListener('input', validationName);
    phoneForm1.addEventListener('input', validationPhone);
    nameForm2.addEventListener('input', validationName);
    phoneForm2.addEventListener('input', validationPhone);
}