let select = document.querySelector('#selectBox');

select.setAttribute('onchange', 'only2(this.value)');

for (let i = 1972; i <= 2006; i++) {
    let option = document.createElement('option');

    option.setAttribute('value', i);

    option.textContent = i;
    select.append(option);
}
let month = document.querySelector('#month');

let days = document.querySelector('#days');

var val;
function only2(y) {
    val = y;
    console.log(val);
}

function only(x) {
    console.log(x);

    if (x == 'Apr' || x == 'Jun' || x == 'Sep' || x == 'Nov') {
        days.innerHTML = '';
        for (let i = 1; i <= 30; i++) {
            let option1 = document.createElement('option');
            option1.setAttribute('value', i);
            option1.textContent = i;
            days.appendChild(option1);
        }
    }
    else if (x == 'Jan' || x == 'Mar' || x == 'May' || x == 'Jul' || x == 'Aug' || x == 'Oct' || x == 'Dec') {
        days.innerHTML = '';
        for (let i = 1; i <= 31; i++) {
            let option1 = document.createElement('option');
            option1.setAttribute('value', i);
            option1.textContent = i;
            days.appendChild(option1);
        }
    }
    else if (x == 'Feb') {
        if (val % 4 == 0) {
            days.innerHTML = '';
            for (let i = 1; i <= 29; i++) {
                let option1 = document.createElement('option');
                option1.setAttribute('value', i);
                option1.textContent = i;
                days.appendChild(option1);
            } 
        } 
        else {
            days.innerHTML = '';
            for (let i = 1; i <= 28; i++) {
                let option1 = document.createElement('option');
                option1.setAttribute('value', i);
                option1.textContent = i;
                days.appendChild(option1);
            }
        }
    }
}