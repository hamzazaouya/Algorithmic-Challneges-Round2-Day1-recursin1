/*gobal console*/

let input = document.getElementById('input');
let button = document.getElementById('button');
let output = document.getElementById('output')

button.onclick = function () {
    'use strict';

    output.innerHTML  = "It Will Take: " + collutz(input.value) + " Step" ;

}

function collutz(n) {

    'use strict';

    if (n === 1) {
        return 0;
    }
    else if ((n % 2) === 0) {
        return 1 + collutz(n / 2);
    }
    else {
            return 1 + collutz(n * 3 + 1);
        }
}
