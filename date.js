function date_time(id) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    var d = date.getDate();
    var day = date.getDay();
    var days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var result = days[day] + ' ' + months[month] + ' ' + d + ', ' + year + ' ' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    
    setTimeout(function () {
        date_time(id);
    }, 1000);
}

window.onload = function () {
    date_time('date_time');
};
