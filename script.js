let all = document.querySelectorAll(".card");
let btn = document.getElementsByClassName("btn")[0];
let input = document.getElementById("inp");

btn.onclick = function () {
    let filter = input.value.toLowerCase();

    all.forEach(function (card) {
        let h1 = card.querySelector("h1").innerHTML.toLowerCase();
        let p = card.querySelector("p").innerHTML.toLowerCase();

        if (h1.includes(filter) || p.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
};


let allCourses = document.getElementsByClassName("all-courses")[0]

allCourses.onclick = function () {

    all.forEach(function (a) {

        a.style.display = ""

    })
}


let first = document.getElementsByClassName("first")[0]

first.onclick = function () {

    all.forEach(function (i) {

        let p = i.querySelector("p").innerHTML.toLowerCase();

        if (p.includes(first.innerHTML)) {

            i.style.display = ""
        }

        else {
            i.style.display = "none"
        }

    })
}







let second = document.getElementsByClassName("second")[0]

second.onclick = function () {

    all.forEach(function (i) {

        let p = i.querySelector("p").innerHTML.toLowerCase();

        if (p.includes(second.innerHTML)) {

            i.style.display = ""
        }

        else {
            i.style.display = "none"
        }

    })
}




let third = document.getElementsByClassName("third")[0]

third.onclick = function () {

    all.forEach(function (i) {

        let p = i.querySelector("p").innerHTML.toLowerCase();

        if (p.includes(third.innerHTML)) {

            i.style.display = ""
        }

        else {
            i.style.display = "none"
        }

    })
}


let bars = document.getElementsByClassName("bars")[0]
let header = document.getElementsByClassName("nav")[0]

bars.onclick = function () {
    header.style.display = "flex"
}


let close = document.getElementsByClassName("close")[0]

close.onclick = function () {
    header.style.display = "none"
}




let button1 = document.getElementById("firstButton")
let remove = document.getElementsByClassName("remove")[0]
let firstForm = document.getElementsByClassName("first-form")[0]
let userName = document.getElementsByClassName("username")[0]
let code = document.getElementsByClassName("code")[0]
let go1 = document.getElementsByClassName("go1")[0]








button1.onclick = function () {
    firstForm.style.display = "flex"
}


remove.onclick = function () {
    firstForm.style.display = "none"
}



const validCredentials = {

    '1': '1924',
    '2': '4622',
    '3': '4742',
    '4': '6531',
    '5': '8361',
    '6': '9143',
    '7': '5651',
    '8': '2538',
    '9': '5449',
    '10': '7591',
    '11': '3027',
    '12': '8476',
    '13': '6955',
    '14': '5948',
    '15': '9423',
    '16': '3347',
    '17': '2384',
    '18': '1735',
    '19': '2962',
    '20': '8394',
    '21': '1146',
    '22': '2958',
    '23': '4492',
    '24': '7343',
    '25': '6429',
    '26': '4436',
    '27': '8654',
    '28': '2639',
    '29': '7881',
    '30': '3796',
    '31': '4929',
    '32': '6802',
    '33': '8394',
    '34': '6103',
    '35': '2048',
    '36': '3025',
    '37': '1391',
    '38': '6234',
    '39': '8137',
    '40': '5446',
    '41': '9842',
    '42': '1538',
    '43': '2536',
    '44': '8655',
    '45': '9458',
    '46': '6227',
    '47': '3445',
    '48': '3829',
    '49': '4563',
    '50': '7592',
    '51': '8849',
    '52': '5091',
    '53': '1028',
    '54': '7905',
    '55': '9482',
    '56': '4931',
    '57': '6224',
    '58': '1824',
    '59': '9067',
    '60': '2174',
    '61': '9746',
    '62': '1194',
    '63': '0172',
    '64': '5463',
    '65': '5628',
    '66': '1847',
    '67': '6301',
    '68': '1346',
    '69': '8562',
    '70': '1718',
    '71': '5238',
    '72': '6144',
    '73': '6447',
    '74': '8292',
    '75': '4361',
    '76': '7354',
    '77': '3248',
    '78': '5143',
    '79': '6738',
    '80': '2509',
    '81': '8517',
    '82': '2031',
    '83': '2617',
    '84': '2583',
    '85': '1448',
    '86': '6201',
    '87': '4766',
    '88': '9301',
    '89': '7125',
    '90': '6112',
    '91': '8794',
    '92': '6018',
    '93': '3516',
    '94': '8441',
    '95': '6184',
    '96': '0587',
    '97': '1348',
    '98': '4923',
    '99': '0824',
    '100': '1173'


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


    localStorage.setItem("code", code.value)
    code.value = localStorage.getItem("code")
});




let button2 = document.getElementById("secondButton")
let remove1 = document.getElementsByClassName("remove1")[0]
let secondForm = document.getElementsByClassName("second-form")[0]
let userName1 = document.getElementsByClassName("username1")[0]
let code1 = document.getElementsByClassName("code1")[0]
let go2 = document.getElementsByClassName("go2")[0]



button2.onclick = function () {
    secondForm.style.display = "flex"
}


remove1.onclick = function () {
    secondForm.style.display = "none"
}




const validCredentials1 = {
    '1': '0837',
    '2': '9201',
    '3': '3548',
    '4': '3006',
    '5': '5819',
    '6': '7261',
    '7': '0032',
    '8': '5874',
    '9': '8956',
    '10': '6389',
    '11': '4991',
    '12': '7690',
    '13': '2089',
    '14': '9883',
    '15': '1826',
    '16': '5197',
    '17': '7325',
    '18': '8304',
    '19': '2759',
    '20': '6871',
    '21': '1034',
    '22': '5068',
    '23': '8393',
    '24': '4795',
    '25': '9144',
    '26': '5317',
    '27': '7589',
    '28': '5802',
    '29': '1557',
    '30': '9402',
    '31': '4209',
    '32': '3026',
    '33': '5420',
    '34': '6403',
    '35': '2584',
    '36': '8135',
    '37': '7539',
    '38': '4593',
    '39': '9398',
    '40': '2639',
    '41': '9820',
    '42': '1349',
    '43': '9810',
    '44': '6507',
    '45': '7435',
    '46': '5580',
    '47': '3170',
    '48': '9092',
    '49': '6308',
    '50': '2549',
    '51': '8463',
    '52': '5400',
    '53': '1298',
    '54': '1835',
    '55': '6031',
    '56': '8970',
    '57': '4718',
    '58': '7030',
    '59': '6007',
    '60': '3205',
    '61': '9803',
    '62': '7064',
    '63': '1033',
    '64': '2947',
    '65': '9231',
    '66': '4319',
    '67': '1718',
    '68': '8312',
    '69': '2136',
    '70': '5140',
    '71': '6212',
    '72': '0237',
    '73': '8369',
    '74': '3375',
    '75': '5953',
    '76': '7240',
    '77': '8011',
    '78': '4918',
    '79': '2605',
    '80': '5327',
    '81': '9364',
    '82': '1539',
    '83': '8096',
    '84': '2761',
    '85': '4002',
    '86': '1185',
    '87': '1390',
    '88': '6417',
    '89': '1649',
    '90': '0724',
    '91': '4033',
    '92': '8020',
    '93': '3457',
    '94': '2339',
    '95': '6983',
    '96': '7341',
    '97': '9083',
    '98': '5829',
    '99': '3647',
    '100': '4972'
};




go2.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials1[userName1.value] && validCredentials1[userName1.value] === code1.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }


    localStorage.setItem("code", code1.value)
    code.value = localStorage.getItem("code")
});









let button3 = document.getElementById("thirdButton")
let remove2 = document.getElementsByClassName("remove2")[0]
let thirdForm = document.getElementsByClassName("third-form")[0]
let userName2 = document.getElementsByClassName("username2")[0]
let code2 = document.getElementsByClassName("code2")[0]
let go3 = document.getElementsByClassName("go3")[0]



button3.onclick = function () {
    thirdForm.style.display = "flex"
}


remove2.onclick = function () {
    thirdForm.style.display = "none"
}




const validCredentials2 = {
    '1': '7042',
    '2': '3158',
    '3': '1987',
    '4': '4395',
    '5': '8124',
    '6': '5076',
    '7': '9260',
    '8': '6843',
    '9': '2571',
    '10': '9206',
    '11': '3482',
    '12': '5793',
    '13': '1638',
    '14': '8105',
    '15': '4372',
    '16': '2194',
    '17': '6870',
    '18': '5429',
    '19': '9506',
    '20': '8064',
    '21': '4301',
    '22': '3917',
    '23': '2863',
    '24': '1782',
    '25': '9631',
    '26': '6729',
    '27': '5483',
    '28': '1074',
    '29': '3298',
    '30': '7209',
    '31': '5192',
    '32': '4861',
    '33': '6347',
    '34': '8310',
    '35': '1945',
    '36': '2850',
    '37': '9052',
    '38': '7543',
    '39': '6821',
    '40': '1984',
    '41': '2375',
    '42': '4027',
    '43': '5914',
    '44': '8509',
    '45': '1649',
    '46': '9132',
    '47': '5368',
    '48': '1205',
    '49': '6941',
    '50': '8037',
    '51': '2674',
    '52': '7583',
    '53': '9203',
    '54': '4387',
    '55': '6135',
    '56': '3702',
    '57': '9854',
    '58': '4926',
    '59': '8046',
    '60': '1365',
    '61': '7290',
    '62': '5439',
    '63': '2783',
    '64': '9460',
    '65': '3619',
    '66': '5294',
    '67': '8275',
    '68': '4053',
    '69': '9162',
    '70': '6374',
    '71': '2481',
    '72': '9125',
    '73': '1604',
    '74': '8346',
    '75': '7150',
    '76': '6098',
    '77': '3827',
    '78': '9031',
    '79': '5473',
    '80': '1846',
    '81': '6429',
    '82': '7531',
    '83': '9170',
    '84': '1058',
    '85': '2869',
    '86': '4015',
    '87': '9852',
    '88': '4903',
    '89': '2156',
    '90': '7849',
    '91': '6938',
    '92': '5079',
    '93': '3418',
    '94': '9654',
    '95': '2679',
    '96': '4731',
    '97': '5092',
    '98': '6705',
    '99': '8452',
    '100': '1376'
};




go3.addEventListener('click', function (event) {
    // Prevent the default form submission



    if (validCredentials2[userName2.value] && validCredentials2[userName2.value] === code2.value) {

        alert('تم التسجيل بنجاح');
        // Uncomment the line below to proceed with form submission
        // this.submit();
    } else {
        alert('كلمة مرور خاطئة');
        event.preventDefault();
    }


    localStorage.setItem("code", code2.value)
    code.value = localStorage.getItem("code")
});











const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const inputIds = ['userInput1', 'userInput2', 'userInput3', 'userInput4', 'userInput5', 'userInput6'];

// Function to get a random value from the array
function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to initialize all user inputs with random values if not already set
function initializeUserInputs() {
    inputIds.forEach(id => {
        const userInput = document.getElementById(id);
        let storedValue = localStorage.getItem(id);

        if (!storedValue) {
            storedValue = getRandomValue(myArray);
            localStorage.setItem(id, storedValue);
        }

        userInput.value = storedValue;
    });
}

// Function to generate and set new random values for all inputs
function setNewRandomValues() {
    inputIds.forEach(id => {
        const newValue = getRandomValue(myArray);
        const userInput = document.getElementById(id);
        userInput.value = newValue;
        localStorage.setItem(id, newValue);
    });
}

// Initialize the input fields when the page loads
window.addEventListener('load', initializeUserInputs);

// Event listener for the button to generate new random values


