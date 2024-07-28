const week = document.getElementById("week")
var date = new Date()
var firstDay = new Date(date.setDate(date.getDate() - date.getDay()+1));
week.textContent = firstDay.toISOString().substring(0,10)




