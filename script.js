let SubhanAllahValue = 0;
let AlhamdulillahValue = 0;
let AllahuAkberValue = 0;

document.getElementById('subhan-allah-increment-btn').addEventListener('click', function () {
    if (SubhanAllahValue >= 33) {
        return alert('Now Start Alhamdulillah')
    }
    SubhanAllahValue++;
    let counter = document.getElementById('subhan-allah-display');
    counter.innerText = SubhanAllahValue;
})
document.getElementById('subhan-allah-decrement-btn').addEventListener('click', function () {
    if (SubhanAllahValue <= 0) {
        return alert('Only positive value Available!')
    }
    SubhanAllahValue--;
    let counter = document.getElementById('subhan-allah-display');
    counter.innerText = SubhanAllahValue;
})
document.getElementById('subhan-allah-reset').addEventListener('click', function(){
    let SubhanAllahDisplay = document.getElementById('subhan-allah-display');
    SubhanAllahValue = 0;
    SubhanAllahDisplay.innerText = 0;
})


document.getElementById('alhamdulillah-increment-btn').addEventListener('click', function () {
    if (AlhamdulillahValue >= 33) {
        return alert('Now Start Allahu Akbar')
    }
    AlhamdulillahValue++;
    let counter = document.getElementById('alhamdulillah-display');
    counter.innerText = AlhamdulillahValue;
})
document.getElementById('alhamdulillah-decrement-btn').addEventListener('click', function () {
    if (AlhamdulillahValue <= 0) {
        return alert('Only positive value Available!')
    }
    AlhamdulillahValue--;
    let counter = document.getElementById('alhamdulillah-display');
    counter.innerText = AlhamdulillahValue;
})
document.getElementById('alhamdulillah-reset').addEventListener('click', function(){
    let AlhamdulillahDisplay = document.getElementById('alhamdulillah-display');
    AlhamdulillahValue = 0;
    AlhamdulillahDisplay.innerText = 0;
})


document.getElementById('allahu-akbar-increment-btn').addEventListener('click', function () {
    if (AllahuAkberValue >= 34) {
        return alert('One Tasbih Complete, Press Reset Button And Start from 0')
    }
    AllahuAkberValue++;
    let counter = document.getElementById('allahu-akbar-display');
    counter.innerText = AllahuAkberValue;
})
document.getElementById('allahu-akbar-decrement-btn').addEventListener('click', function () {
    if (AllahuAkberValue <= 0) {
        return alert('Only positive value Available!')
    }
    AllahuAkberValue--;
    let counter = document.getElementById('allahu-akbar-display');
    counter.innerText = AllahuAkberValue;
})
document.getElementById('allahu-akbar-reset').addEventListener('click', function(){
    let AllahuAkbarDisplay = document.getElementById('allahu-akbar-display');
    AllahuAkberValue = 0;
    AllahuAkbarDisplay.innerText = 0;
})

document.getElementById('reset-btn').addEventListener('click', function () {
    let SubhanAllahDisplay = document.getElementById('subhan-allah-display');
    let AlhamdulillahDisplay = document.getElementById('alhamdulillah-display');
    let AllahuAkbarDisplay = document.getElementById('allahu-akbar-display');
    SubhanAllahValue = 0;
    SubhanAllahDisplay.innerText = 0;
    AlhamdulillahValue = 0;
    AlhamdulillahDisplay.innerText = 0;
    AllahuAkberValue = 0;
    AllahuAkbarDisplay.innerText = 0;
})