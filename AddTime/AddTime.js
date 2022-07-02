const prompt = require("prompt-sync")();

const inp = prompt("Enter the time(hh:mm:ss AM/PM) eg:10:12:13 AM::");

const [time, AMorPM] = inp.split(" ");
let [hrs, min, sec] = time.split(":");

let carry = 0;

hrs = parseInt(hrs);
min = parseInt(min);
sec = parseInt(sec);

if (AMorPM == "PM" && hrs != 12) {
    hrs = (hrs + 12) % 24;
} else if (AMorPM == "AM" && hrs == 12) {
    hrs = 0;
}

sec = sec + 45;
carry = parseInt(sec / 60);
sec = sec % 60;

min = min + 45;
carry = parseInt(min / 60);
min = min % 60;

hrs = (hrs + carry) % 24;

sec = sec < 10 ? "0" + sec : sec;
min = min < 10 ? "0" + min : min;
hrs = hrs < 10 ? "0" + hrs : 1;

const ans = hrs + ":" + min + ":" + sec;
console.log(ans);
