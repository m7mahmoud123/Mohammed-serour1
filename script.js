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

    '1': '5621',
    '2': '4782',
    '3': '9243',
    '4': '8364',
    '5': '3198',
    '6': '4579',
    '7': '6147',
    '8': '2739',
    '9': '8256',
    '10': '1397',
    '11': '7043',
    '12': '3451',
    '13': '1875',
    '14': '6904',
    '15': '1284',
    '16': '4593',
    '17': '7348',
    '18': '9806',
    '19': '4527',
    '20': '3085',
    '21': '6219',
    '22': '3971',
    '23': '4850',
    '24': '1423',
    '25': '5794',
    '26': '2876',
    '27': '9038',
    '28': '4621',
    '29': '7814',
    '30': '6503',
    '31': '5032',
    '32': '9438',
    '33': '1328',
    '34': '6782',
    '35': '2194',
    '36': '8371',
    '37': '5913',
    '38': '4207',
    '39': '6938',
    '40': '8271',
    '41': '3259',
    '42': '9427',
    '43': '7856',
    '44': '3948',
    '45': '5168',
    '46': '3074',
    '47': '8419',
    '48': '2693',
    '49': '1258',
    '50': '7103',
    '51': '5893',
    '52': '1347',
    '53': '9031',
    '54': '7325',
    '55': '6174',
    '56': '3485',
    '57': '8127',
    '58': '4503',
    '59': '2951',
    '60': '9364',
    '61': '7819',
    '62': '4183',
    '63': '2731',
    '64': '9028',
    '65': '6587',
    '66': '1946',
    '67': '8439',
    '68': '5298',
    '69': '2743',
    '70': '1839',
    '71': '9430',
    '72': '3176',
    '73': '8025',
    '74': '6729',
    '75': '4598',
    '76': '3945',
    '77': '1852',
    '78': '7603',
    '79': '2183',
    '80': '5472',
    '81': '8297',
    '82': '3704',
    '83': '9142',
    '84': '2085',
    '85': '4368',
    '86': '1239',
    '87': '5807',
    '88': '3071',
    '89': '4129',
    '90': '7298',
    '91': '8153',
    '92': '6032',
    '93': '2504',
    '94': '7842',
    '95': '3907',
    '96': '6743',
    '97': '9214',
    '98': '3108',
    '99': '7284',
    '100': '4527'


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
    '1': '7623',
    '2': '4839',
    '3': '9257',
    '4': '8375',
    '5': '4102',
    '6': '4586',
    '7': '6173',
    '8': '2765',
    '9': '8294',
    '10': '1436',
    '11': '7082',
    '12': '3495',
    '13': '1908',
    '14': '6937',
    '15': '1298',
    '16': '4624',
    '17': '7389',
    '18': '9835',
    '19': '4562',
    '20': '3109',
    '21': '6254',
    '22': '4018',
    '23': '4892',
    '24': '1456',
    '25': '5827',
    '26': '2904',
    '27': '9073',
    '28': '4652',
    '29': '7852',
    '30': '6539',
    '31': '5067',
    '32': '9471',
    '33': '1356',
    '34': '6814',
    '35': '2235',
    '36': '8402',
    '37': '5937',
    '38': '4235',
    '39': '6961',
    '40': '8298',
    '41': '3294',
    '42': '9450',
    '43': '7884',
    '44': '3972',
    '45': '5197',
    '46': '3098',
    '47': '8440',
    '48': '2731',
    '49': '1285',
    '50': '7138',
    '51': '5920',
    '52': '1378',
    '53': '9062',
    '54': '7358',
    '55': '6205',
    '56': '3520',
    '57': '8152',
    '58': '4534',
    '59': '2980',
    '60': '9401',
    '61': '7850',
    '62': '4219',
    '63': '2764',
    '64': '9061',
    '65': '6614',
    '66': '1978',
    '67': '8470',
    '68': '5329',
    '69': '2772',
    '70': '1862',
    '71': '9461',
    '72': '3205',
    '73': '8056',
    '74': '6752',
    '75': '4632',
    '76': '3978',
    '77': '1885',
    '78': '7630',
    '79': '2216',
    '80': '5501',
    '81': '8332',
    '82': '3731',
    '83': '9173',
    '84': '2115',
    '85': '4394',
    '86': '1264',
    '87': '5836',
    '88': '3105',
    '89': '4153',
    '90': '7331',
    '91': '8182',
    '92': '6065',
    '93': '2539',
    '94': '7871',
    '95': '3936',
    '96': '6776',
    '97': '9241',
    '98': '3137',
    '99': '7312',
    '100': '4556'
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
    '1': '5463',
    '2': '8927',
    '3': '1375',
    '4': '6472',
    '5': '3841',
    '6': '5203',
    '7': '7614',
    '8': '2938',
    '9': '4357',
    '10': '8724',
    '11': '6509',
    '12': '9176',
    '13': '2843',
    '14': '7681',
    '15': '5402',
    '16': '3967',
    '17': '8143',
    '18': '2549',
    '19': '6930',
    '20': '4718',
    '21': '5326',
    '22': '8251',
    '23': '2910',
    '24': '6832',
    '25': '9435',
    '26': '1082',
    '27': '5029',
    '28': '7341',
    '29': '3985',
    '30': '8174',
    '31': '2068',
    '32': '5392',
    '33': '7806',
    '34': '1295',
    '35': '9643',
    '36': '4728',
    '37': '8317',
    '38': '2058',
    '39': '4176',
    '40': '5894',
    '41': '6502',
    '42': '8125',
    '43': '9247',
    '44': '1638',
    '45': '5723',
    '46': '4896',
    '47': '3048',
    '48': '6592',
    '49': '7821',
    '50': '4903',
    '51': '2314',
    '52': '5691',
    '53': '8904',
    '54': '4128',
    '55': '6471',
    '56': '2039',
    '57': '8145',
    '58': '9204',
    '59': '4816',
    '60': '5312',
    '61': '7098',
    '62': '1854',
    '63': '6023',
    '64': '3498',
    '65': '7521',
    '66': '1746',
    '67': '9381',
    '68': '4297',
    '69': '5604',
    '70': '8172',
    '71': '2947',
    '72': '6435',
    '73': '8230',
    '74': '3087',
    '75': '9751',
    '76': '2483',
    '77': '4619',
    '78': '7840',
    '79': '5328',
    '80': '9027',
    '81': '6178',
    '82': '3906',
    '83': '8236',
    '84': '4917',
    '85': '1426',
    '86': '6894',
    '87': '3578',
    '88': '9403',
    '89': '4719',
    '90': '6213',
    '91': '7104',
    '92': '5042',
    '93': '3728',
    '94': '5839',
    '95': '4205',
    '96': '9628',
    '97': '8149',
    '98': '5917',
    '99': '4635',
    '100': '7382'
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


