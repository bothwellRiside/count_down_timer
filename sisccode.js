// Set the end date of the semester (replace with your desired end date)
const endDate = new Date("2024-06-13T23:59:59");

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = endDate - currentDate;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown").innerHTML = `Countdown to End of Semester: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown when the page loads
updateCountdown();
