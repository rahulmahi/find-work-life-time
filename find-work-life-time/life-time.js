let select = document.querySelector('#selectBox');

select.setAttribute('onchange', 'only2(this.value)');

for (let i = 1972; i <= 2006; i++) {
    let option = document.createElement('option');

    option.setAttribute('value', i);

    option.textContent = i;
    select.append(option);
    console.log(select);
}
let month = document.querySelector('#month');

let days = document.querySelector('#days');

var val;
function only2(y) {
    val = parseInt(y);
    console.log(val);
}
var x;
function only(month) {
  x = month;
    console.log(x);

    if (x == '4' || x == '6' || x == '9' || x == '11') {
        days.innerHTML = '';
        for (let i = 1; i <= 30; i++) {
            let option1 = document.createElement('option');
            option1.setAttribute('value', i);
            option1.textContent = i;
            days.appendChild(option1);
        }
    }
    else if (x == '1' || x == '3' || x == '5' || x == '7' || x == '8' || x == '10' || x == '12') {
        days.innerHTML = '';
        for (let i = 1; i <= 31; i++) {
            let option1 = document.createElement('option');
            option1.setAttribute('value', i);
            option1.textContent = i;
            days.appendChild(option1);
        }
    }
    else if (x == '2') {
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

var day_option = document.createElement('option');

days.setAttribute('onchange', 'day_val(this.value)');

var day_store;

function day_val(e) {
    day_store = e;
    console.log(day_store);
}

var retirmentAge = document.querySelector('#rt_age');

for (var i = 45; i <= 55; i++) {
    var rt_opt = document.createElement('option');
    rt_opt.value = i;
    rt_opt.innerHTML = i;
    retirmentAge.append(rt_opt); 
}
console.log(retirmentAge);
retirmentAge.setAttribute('onchange','get_val(this.value)');

var rt_year;
function get_val(r)
{
   rt_year = parseInt(r);
   console.log(rt_year);
}

var second_div = document.querySelector('.part-2');
var butn = document.createElement('button');

butn.textContent = 'GO';

butn.setAttribute('id','butn');
second_div.append(butn);
document.body.append(second_div);

butn.addEventListener('click',main_fun);

function main_fun()
{
 var getFullYear = new Date(val,x,day_store);
 
 var fullYear = val + rt_year;

 var new_date = new Date();

 var current_year = new_date.getFullYear();

 var green_box = fullYear-current_year;
 var red_box = current_year-val;

 var divi = document.createElement('div');
 divi.className = 'parent_div';
 divi.innerHTML='';
 for(let i = 1;i<=red_box;i++)
 {
    var red = document.createElement('p');
    red.className = 'p_red';
    divi.append(red);
    document.body.append(divi);
 }
 
 for(let i =1;i<=green_box;i++)
 {
     var green = document.createElement('p');

     green.setAttribute('class','gb');

     divi.append(green);   
     document.body.append(divi);
 }
}
