let currentDate = new Date();

function renderCalendar() {

    let monthYear = document.getElementById("monthYear");
    let dates = document.getElementById("dates");

    dates.innerHTML = "";

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();

    let months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    monthYear.innerHTML = months[month] + " " + year;

    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += "<div></div>";
    }

    for (let day = 1; day <= lastDate; day++) {

        let today = new Date();

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dates.innerHTML += `<div class="today">${day}</div>`;
        } else {
            dates.innerHTML += `<div>${day}</div>`;
        }
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
