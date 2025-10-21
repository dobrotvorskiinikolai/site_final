function check_result() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const result = document.getElementById('result');

    // if (a < b && b < c) {
    //     result.value = "Верно! Выполняется неравенство A < B < C";
    // } else if (a < b && b > c) {
    //     result.value = "Верно! Выполняется неравенство A < B > C";
    // } else {
    //     result.value = "Неверно! Ни одно из неравенств не выполняется";
    // }
    // тест
    let dicsr = b ** 2 - 4 * a * c;
    console.log('discr', dicsr)
    if (dicsr > 0) {
        const x1 = ((-b + dicsr ** 0.5) / (2 * a))
        const x2 = ((b + dicsr ** 0.5) / (2 * a))
        result.value = 'x1' + '=' + x1 + ';' + ' ' + 'x2' + '=' + x2
    } else if (dicsr == 0){
        result.value = 'x' + '=' + ((b + dicsr ** 0.5) / (2 * a))
    } else {
        result.value = 'Уравнение не имеет действительных корней'
    }

}

const check_button = document.getElementById("check_result_button");
check_button.addEventListener("click", check_result);