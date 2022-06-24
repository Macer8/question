
document.getElementById("three").innerText= sessionStorage.getItem('1');
document.getElementById("forName").innerText= sessionStorage.getItem('1');

function mainbutton_click(){
    document.getElementById("anketid").style.display="none";
    document.getElementById("contid").style.display="block";   
}

function formbutton_click(){
    document.getElementById("contid").style.display="none";
    document.getElementById("anketid").style.display="block";
    auth()   
}

function auth() {
    let userName = prompt('Как ваше имя?')
    sessionStorage.setItem('1', userName);
    document.getElementById("three").innerHTML = userName;
    document.getElementById("forName").innerHTML = userName;

    let date = new Date();
    let a=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля',
            'Августа','Сентября','Октября','Ноября','Декабря'];
     document.getElementById("forDate").innerText = `${date.getDate()} ${a[date.getMonth()]} ${date.getFullYear()}`;
}

function pra1First(){
    do {
        Putn = prompt('Кто президент мира?')
   switch (Putn) {
       case 'Путин':
           alert('Верно, живи спокойно')
           console.log('Верно, живи спокойно')
           break;
       case 'Байден':
           alert('ФСБ выехало. Прощай')
           console.log('ФСБ выехало. Прощай')
           break;
       case 'Королева Елизаветта':
           alert('Боже храни королеву. Но нет. Попробуй ещё>')
           console.log('Боже храни королеву. Но нет. Попробуй ещё')
           break;
       default:
           alert('Введено непонятно что')
           console.log('Введено непонятно что')
           break;    
   }
   } while (Putn!='Путин');
}

function pra1Second() {
    let OTVET
    const x = new Boolean(false);
    do{
        OTVET = prompt('Введите цифру больше чем 5')
        if (isNaN(OTVET) == false) {
            if (Number(OTVET) > 5) {
                confirm('Введена цифра больше чем 5. Молодец!')
                x = true
            }
            else confirm('Введена цифра меньше чем 5')
        } else {
            confirm('Введена не цифра')
        }
    } while (x == false)
}

function pra1Third() {
    let str = '" '
    for (let n = 8; n <= 20; n++) {
        if (n % 2 == 0) {
          str += n
          str += ' '
        }
    }
    str += '"'
    confirm(str)
}

function pra1Four() {
    let str = '" '
    for (let g = 1; g <= 7; g++) {
        if (g != 5){
            if (g % 2 != 0) {
                str += g
                str += ' '
            }
        }  
    }
    str += '"'
    alert(str)
}

function pra2FullDate() {
    let date = new Date()
    confirm(date)
}

function pra2ShortDate() {
    let date = new Date();
    let a=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля',
            'Августа','Сентября','Октября','Ноября','Декабря'];
    confirm(`${date.getDate()} ${a[date.getMonth()]} ${date.getFullYear()}`)
}

function pra2Arrays() {
    let arr = new Array(1,2,3,4,5,6,7,8,9)
    let arr2 = [2,4,6,8,10,12,14,16]
    let arrSum = arr.concat(arr2)
    let str = '" ' + arrSum + ' "'
    confirm('Массив 1:  ' + arr + '\n' + 'Массив2:  ' + arr2 + '\n' + 'Массив сумма: ' + arr.concat(arr2))
}