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

    '1': '1923',
    '2': '4629',
    '3': '4782',
    '4': '6534',
    '5': '8362',
    '6': '9146',
    '7': '3651',
    '8': '2738',
    '9': '5649',
    '10': '7491',
    '11': '3827',
    '12': '8176',
    '13': '6985',
    '14': '5748',
    '15': '9623',
    '16': '8347',
    '17': '2584',
    '18': '1735',
    '19': '4962',
    '20': '8594',
    '21': '1246',
    '22': '3958',
    '23': '3492',
    '24': '7543',
    '25': '6829',
    '26': '4136',
    '27': '8954',
    '28': '2639',
    '29': '7581',
    '30': '3496',
    '31': '4729',
    '32': '6842',
    '33': '8394',
    '34': '6173',
    '35': '2548',
    '36': '3825',
    '37': '7391',
    '38': '6254',
    '39': '8237',
    '40': '5146',
    '41': '9872',
    '42': '1238',
    '43': '2736',
    '44': '8651',
    '45': '9418',
    '46': '6527',
    '47': '3745',
    '48': '1829',
    '49': '4963',
    '50': '7492',
    '51': '8349',
    '52': '5791',
    '53': '1628',
    '54': '7435',
    '55': '9582',
    '56': '4731',
    '57': '6524',
    '58': '1824',
    '59': '9367',
    '60': '2874',
    '61': '3746',
    '62': '8194',
    '63': '8172',
    '64': '9463',
    '65': '5628',
    '66': '2847',
    '67': '6371',
    '68': '1946',
    '69': '8562',
    '70': '4718',
    '71': '9238',
    '72': '6174',
    '73': '6147',
    '74': '8392',
    '75': '4961',
    '76': '7254',
    '77': '3948',
    '78': '5173',
    '79': '6728',
    '80': '2539',
    '81': '8417',
    '82': '2431',
    '83': '2647',
    '84': '7583',
    '85': '1948',
    '86': '6251',
    '87': '4736',
    '88': '9361',
    '89': '7825',
    '90': '6142',
    '91': '8794',
    '92': '6518',
    '93': '3526',
    '94': '8471',
    '95': '6194',
    '96': '2587',
    '97': '7348',
    '98': '4923',
    '99': '6824',
    '100': '1573'


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
    '1': '4837',
    '2': '9201',
    '3': '1548',
    '4': '3076',
    '5': '5829',
    '6': '7461',
    '7': '0932',
    '8': '5274',
    '9': '8156',
    '10': '6329',
    '11': '4921',
    '12': '7610',
    '13': '2049',
    '14': '9783',
    '15': '1836',
    '16': '5497',
    '17': '7365',
    '18': '8204',
    '19': '3759',
    '20': '6841',
    '21': '1024',
    '22': '5968',
    '23': '8392',
    '24': '4735',
    '25': '9124',
    '26': '5017',
    '27': '7489',
    '28': '6802',
    '29': '1537',
    '30': '9462',
    '31': '4289',
    '32': '3926',
    '33': '5410',
    '34': '6703',
    '35': '2589',
    '36': '8145',
    '37': '7239',
    '38': '4093',
    '39': '9308',
    '40': '2649',
    '41': '5820',
    '42': '1347',
    '43': '9812',
    '44': '6507',
    '45': '7431',
    '46': '5280',
    '47': '3176',
    '48': '9072',
    '49': '6408',
    '50': '2149',
    '51': '8963',
    '52': '5402',
    '53': '7298',
    '54': '1845',
    '55': '6931',
    '56': '8370',
    '57': '4918',
    '58': '7530',
    '59': '6207',
    '60': '3405',
    '61': '9823',
    '62': '7564',
    '63': '1035',
    '64': '2847',
    '65': '9251',
    '66': '4309',
    '67': '6718',
    '68': '8302',
    '69': '2736',
    '70': '5140',
    '71': '6812',
    '72': '0937',
    '73': '8269',
    '74': '3475',
    '75': '5903',
    '76': '7210',
    '77': '8051',
    '78': '4318',
    '79': '2605',
    '80': '5027',
    '81': '9764',
    '82': '1539',
    '83': '8096',
    '84': '2761',
    '85': '4902',
    '86': '9185',
    '87': '7390',
    '88': '8417',
    '89': '1629',
    '90': '5724',
    '91': '4063',
    '92': '8920',
    '93': '1457',
    '94': '2139',
    '95': '6083',
    '96': '7340',
    '97': '9082',
    '98': '5129',
    '99': '3617',
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


