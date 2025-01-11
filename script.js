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
    '1': '1234',
    '2': '5678',
    '3': '9101',
    '4': '2345',
    '5': '6789',
    '6': '1012',
    '7': '3456',
    '8': '7890',
    '9': '1123',
    '10': '4567',
    '11': '8901',
    '12': '2346',
    '13': '6781',
    '14': '9012',
    '15': '3457',
    '16': '7894',
    '17': '1239',
    '18': '5670',
    '19': '9103',
    '20': '2347',
    '21': '6782',
    '22': '1014',
    '23': '3458',
    '24': '7895',
    '25': '1235',
    '26': '5671',
    '27': '9106',
    '28': '2349',
    '29': '6783',
    '30': '1015',
    '31': '3459',
    '32': '7896',
    '33': '1236',
    '34': '5672',
    '35': '9107',
    '36': '2341',
    '37': '6784',
    '38': '1016',
    '39': '3450',
    '40': '7897',
    '41': '1237',
    '42': '5673',
    '43': '9108',
    '44': '2342',
    '45': '6785',
    '46': '1017',
    '47': '3452',
    '48': '7898',
    '49': '1238',
    '50': '5674',
    '51': '9109',
    '52': '2343',
    '53': '6786',
    '54': '1018',
    '55': '3453',
    '56': '7899',
    '57': '1240',
    '58': '5675',
    '59': '9110',
    '60': '2344',
    '61': '6787',
    '62': '1019',
    '63': '3454',
    '64': '7800',
    '65': '1241',
    '66': '5676',
    '67': '9111',
    '68': '2348',
    '69': '6788',
    '70': '1020',
    '71': '3455',
    '72': '7801',
    '73': '1242',
    '74': '5677',
    '75': '9112',
    '76': '2340',
    '77': '6789',
    '78': '1021',
    '79': '3456',
    '80': '7802',
    '81': '1243',
    '82': '5678',
    '83': '9113',
    '84': '2345',
    '85': '6790',
    '86': '1022',
    '87': '3457',
    '88': '7803',
    '89': '1244',
    '90': '5679',
    '91': '9114',
    '92': '2346',
    '93': '6791',
    '94': '1023',
    '95': '3458',
    '96': '7804',
    '97': '1245',
    '98': '5680',
    '99': '9115',
    '100': '2347'
}
    ;

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
    '1': '4567',
    '2': '7821',
    '3': '9153',
    '4': '3472',
    '5': '6894',
    '6': '1045',
    '7': '3281',
    '8': '7643',
    '9': '9104',
    '10': '2348',
    '11': '6729',
    '12': '4587',
    '13': '1245',
    '14': '8931',
    '15': '3298',
    '16': '5784',
    '17': '7210',
    '18': '9562',
    '19': '4723',
    '20': '3890',
    '21': '6341',
    '22': '4103',
    '23': '4928',
    '24': '1657',
    '25': '5912',
    '26': '3048',
    '27': '9184',
    '28': '4725',
    '29': '7920',
    '30': '6573',
    '31': '5184',
    '32': '9546',
    '33': '1485',
    '34': '6920',
    '35': '2457',
    '36': '8514',
    '37': '6098',
    '38': '4321',
    '39': '7028',
    '40': '8324',
    '41': '3405',
    '42': '9573',
    '43': '7982',
    '44': '4071',
    '45': '5302',
    '46': '3178',
    '47': '8579',
    '48': '2834',
    '49': '1374',
    '50': '7245',
    '51': '6051',
    '52': '1498',
    '53': '9145',
    '54': '7492',
    '55': '6317',
    '56': '3654',
    '57': '8270',
    '58': '4629',
    '59': '3084',
    '60': '9458',
    '61': '7963',
    '62': '4328',
    '63': '2890',
    '64': '9180',
    '65': '6721',
    '66': '2109',
    '67': '8537',
    '68': '5412',
    '69': '2847',
    '70': '1984',
    '71': '9574',
    '72': '3297',
    '73': '8146',
    '74': '6842',
    '75': '4728',
    '76': '4065',
    '77': '1943',
    '78': '7740',
    '79': '2318',
    '80': '5621',
    '81': '8452',
    '82': '3842',
    '83': '9264',
    '84': '2241',
    '85': '4508',
    '86': '1386',
    '87': '5932',
    '88': '3241',
    '89': '4273',
    '90': '7425',
    '91': '8291',
    '92': '6143',
    '93': '2654',
    '94': '7983',
    '95': '4052',
    '96': '6897',
    '97': '9345',
    '98': '3271',
    '99': '7421',
    '100': '4678'
}
    ;




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
    '1': '2456',
    '2': '6793',
    '3': '8214',
    '4': '3047',
    '5': '5931',
    '6': '4182',
    '7': '7503',
    '8': '2198',
    '9': '6842',
    '10': '3971',
    '11': '8105',
    '12': '5327',
    '13': '4982',
    '14': '6724',
    '15': '3870',
    '16': '9147',
    '17': '2608',
    '18': '4812',
    '19': '7390',
    '20': '2054',
    '21': '6437',
    '22': '7281',
    '23': '3184',
    '24': '5408',
    '25': '9103',
    '26': '3275',
    '27': '5841',
    '28': '7432',
    '29': '4927',
    '30': '8016',
    '31': '2387',
    '32': '4502',
    '33': '6948',
    '34': '1076',
    '35': '8327',
    '36': '5063',
    '37': '2498',
    '38': '6184',
    '39': '7395',
    '40': '8927',
    '41': '4306',
    '42': '5129',
    '43': '9261',
    '44': '3845',
    '45': '6210',
    '46': '5709',
    '47': '2984',
    '48': '4691',
    '49': '5307',
    '50': '8729',
    '51': '1846',
    '52': '3098',
    '53': '5912',
    '54': '4267',
    '55': '8124',
    '56': '3194',
    '57': '7604',
    '58': '4923',
    '59': '6081',
    '60': '1849',
    '61': '7365',
    '62': '3521',
    '63': '4782',
    '64': '5193',
    '65': '6734',
    '66': '2397',
    '67': '8012',
    '68': '6078',
    '69': '4519',
    '70': '8943',
    '71': '2631',
    '72': '5708',
    '73': '4385',
    '74': '9264',
    '75': '1735',
    '76': '4806',
    '77': '5297',
    '78': '8314',
    '79': '6042',
    '80': '2195',
    '81': '7942',
    '82': '5039',
    '83': '9178',
    '84': '2908',
    '85': '6729',
    '86': '5831',
    '87': '4627',
    '88': '9143',
    '89': '3082',
    '90': '5371',
    '91': '8046',
    '92': '4125',
    '93': '2796',
    '94': '6825',
    '95': '4971',
    '96': '8304',
    '97': '7539',
    '98': '6047',
    '99': '4218',
    '100': '5364'
}
    ;




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


