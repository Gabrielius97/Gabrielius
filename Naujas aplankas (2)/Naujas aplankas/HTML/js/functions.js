function printCurrentMonthToH1Element{
    let h1 = document.querySelector("h1");

    let currentMonth = getCurrentMonth();

    h1.innerHTML = currentMonth;
}




function printCurrentMonth(){
    
    let months = getMonthsInLithuania();

    let now = new Date();

    let monthIndex = now.getMonth();

    console.log(months[monthIndex])

    return months[monthIndex]
}



function getMonthsInLithuania(){
    let monthsArray = [
        "Sausis",
        "Vasaris",
        "Kovas",
        "Balandis",
        "Geguze",
        "Birzelis",
        "Liepa",
        "Rugpjutis"
    ];

    return monthsArray;
}