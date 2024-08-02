// let button1 = document.getElementsByClassName("first-button")[0]
let remove = document.getElementsByClassName("remove")[0]
let firstForm = document.getElementsByClassName("first-form")[0]
let userName = document.getElementsByClassName("username")[0]
let code = document.getElementsByClassName("code")[0]
let go1 = document.getElementsByClassName("go1")[0]








// button1.onclick = function () {
//     firstForm.style.display = "flex"
// }


remove.onclick = function () {
    firstForm.style.display = "none"
}



const validCredentials = {
    '1': 'password1',
    '2': 'mahmoud saad',
    '3': 'password3',
    '4': 'password4',
    '5': 'password5',
    '6': 'password6',
    '7': 'password7',
    '8': 'password8',
    '9': 'password9',
    '10': 'password10',
    '11': 'password1',
    '12': 'mahmoud saad',
    '13': 'password3',
    '14': 'password4',
    '15': 'password5',
    '16': 'password6',
    '17': 'password7',
    '18': 'password8',
    '19': 'password9',
    '20': 'password10',
    '21': 'password1',
    '22': 'mahmoud saad',
    '23': 'password3',
    '24': 'password4',
    '25': 'password5',
    '26': 'password6',
    '27': 'password7',
    '28': 'password8',
    '29': 'password9',
    '30': 'password10',
    '31': 'password1',
    '32': 'mahmoud saad',
    '33': 'password3',
    '34': 'password4',
    '35': 'password5',
    '36': 'password6',
    '37': 'password7',
    '38': 'password8',
    '39': 'password9',
    '40': 'password10',
    '41': 'password1',
    '42': 'mahmoud saad',
    '43': 'password3',
    '44': 'password4',
    '45': 'password5',
    '46': 'password6',
    '47': 'password7',
    '48': 'password8',
    '49': 'password9',
    '50': 'password10',
    '51': 'password1',
    '52': 'mahmoud saad',
    '53': 'password3',
    '54': 'password4',
    '55': 'password5',
    '56': 'password6',
    '57': 'password7',
    '58': 'password8',
    '59': 'password9',
    '60': 'password10',
    '61': 'password1',
    '62': 'mahmoud saad',
    '63': 'password3',
    '64': 'password4',
    '65': 'password5',
    '66': 'password6',
    '67': 'password7',
    '68': 'password8',
    '69': 'password9',
    '70': 'password10',
    '71': 'password1',
    '72': 'mahmoud saad',
    '73': 'password3',
    '74': 'password4',
    '75': 'password5',
    '76': 'password6',
    '77': 'password7',
    '78': 'password8',
    '79': 'password9',
    '80': 'password10',
    '81': 'password1',
    '82': 'mahmoud saad',
    '83': 'password3',
    '84': 'password4',
    '85': 'password5',
    '86': 'password6',
    '87': 'password7',
    '88': 'password8',
    '89': 'password9',
    '90': 'password10',
    '91': 'password1',
    '92': 'mahmoud saad',
    '93': 'password3',
    '94': 'password4',
    '95': 'password5',
    '96': 'password6',
    '97': 'password7',
    '98': 'password8',
    '99': 'password9',
    '100': 'password10'
};

go1.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials[userName.value] && validCredentials[userName.value] === code.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }
});


// go1.onclick = function (event) {

//     if (userName.value != "156.217.124.97" && userName.value != "156.217.35.218") {
//         event.preventDefault()
//     }
// }








document.addEventListener('DOMContentLoaded', function () {
    const userInput1 = document.getElementById("userInput1");
    const userInput2 = document.getElementById("userInput2");


    const myArray = Array.from({ length: 100 }, (_, i) => i + 1);

    function getRandomValue(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    function initializeUserInput() {
        let storedValue = localStorage.getItem("userInput1");

        if (!storedValue) {
            storedValue = getRandomValue(myArray);
            localStorage.setItem("userInput1", storedValue);
        }

        userInput1.value = storedValue;
    }

    function setNewRandomValue() {
        const newValue = getRandomValue(myArray);
        userInput1.value = newValue;
        localStorage.setItem("userInput1", newValue);
    }

    initializeUserInput();

    window.onload = function () {
        initializeUserInput()
    }
});