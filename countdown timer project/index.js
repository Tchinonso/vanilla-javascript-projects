const months = [
	"January",
	"February",
	"March",
	"April",
	"may",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
console.log(items);

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDay()


// let futureDate = new Date(2022,11,25,18,30,10)
// console.log(futureDate);

//also this method is setting it up dynamically
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 8, 00, 0)


const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()
const secs = futureDate.getSeconds();

let month = futureDate.getMonth()
console.log(months[month]);
month = months[month]
const date = futureDate.getDate()
let weekday = futureDate.getDay()
console.log(weekday);
weekday = weekdays[weekday]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`

//future time in miliseconds
const futureTime = futureDate.getTime()
console.log(futureTime);

function getRemainingTime() {
	const today = new Date().getTime()
	console.log(today);
	const time = futureTime - today
	console.log(time);
	// 1s = 1000ms
	// 1m = 60s
	// 1hr = 60m
	//1d = 24hrs

	// first calculate how many ms in a day then use it divide how many days left
	// values in ms
	const oneDay = 24 * 60 * 60 * 1000
	console.log(oneDay);
	const oneHour = 60 * 60 * 1000
	console.log(oneHour);
	const oneMinute = 60 * 1000
	console.log(oneMinute);
	let days = time / oneDay
	console.log(days);
	days = Math.floor(days)
	console.log(days);
	let hours = Math.floor((time % oneDay) / oneHour)
	// console.log(hours);
	// hours = Math.floor(hours)
	 console.log(hours);
	let minute = Math.floor((time % oneHour) / oneMinute)
	// console.log(minute);
	// minute = Math.floor(minute)
	console.log(minute);
	let seconds = Math.floor((time % oneMinute) / 1000)
	console.log(seconds);

	//set values array
	const values = [days, hours, minute, seconds]

	items.forEach(function (item, index) {
		//item.textContent = values[index]
		item.textContent = format(values[index])
	})

	//the format resets the value if less than 10
	function format(item) {
		if (item < 10) {
			return item = `0${item}`
		} else {
			return item
		}
	}
	if (time < 0) {
		clearInterval(countdown)
		deadline.textContent = `<h4 class="expired">sorry, this giveaway has expired</h4>`
	}
}
//countdown
let countdown = setInterval(getRemainingTime,500)
getRemainingTime()