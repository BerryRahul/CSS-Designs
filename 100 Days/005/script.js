const week = document.getElementById("week")
var curr = new Date
var first = curr.getDate() - curr.getDay
var last = first + 6

var firstDay = new Date(curr.setDate(first)).toUTCString
var lastDay = new Date(curr.setDate(first.getDate()+6)).toUTCString()

const date = firstDay + lastDay;

week.setAttribute("datetime", date)
week.textContent = date


