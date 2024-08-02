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


    localStorage.setItem("code", code.value)
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


