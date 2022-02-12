export const calculator = () => {
    const calcBlock = document.querySelector('#calc');
    const selectType = document.querySelector('#calc-type');
    const selectTypeMaterial = document.querySelector('#calc-type-material');
    const calcInput = document.querySelector('#calc-input');
    const calcTotal = document.querySelector('#calc-total');

    const noVal = (element) => {
        element.style.border = '5px solid red';
        setTimeout(() => {
            element.style.border = '';
        }, 2000);
    }
    const success = (element) => {
        element.style.border = '5px solid green';
        setTimeout(() => {
            element.style.border = '';
        }, 2000);
    }

    const makeCalc = () => {
        if (+selectType.options[selectType.selectedIndex].value &&
            +selectTypeMaterial.options[selectType.selectedIndex].value &&
            +calcInput.value !== 0) {
            let totalValue = +calcInput.value * +selectType.options[selectType.selectedIndex].value *
                selectTypeMaterial.options[selectTypeMaterial.selectedIndex].value;
            calcTotal.value = Math.round(totalValue * 1000);
            success(calcTotal);

        } else {
            if (!+selectType.options[selectType.selectedIndex].value) noVal(selectType);
            if (!+selectTypeMaterial.options[selectTypeMaterial.selectedIndex].value) noVal(selectTypeMaterial);
            if (+calcInput.value === 0) noVal(calcInput);
            calcTotal.value = '';
        }
    }

    function debounce(f, t) {
        return function (args) {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= t)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => f(args), t);
        };
    }

    calcBlock.addEventListener('input', debounce((e) => {
        if (e.target === selectType || e.target === selectTypeMaterial ||
            e.target === calcInput) {
            makeCalc();
        }
    }, 500));

    const validationSquare = (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    }

    calcInput.addEventListener('input', validationSquare);

}