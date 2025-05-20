function undateClock() {
  const now = new Date();

  let hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm;
  if (hour > 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hour = hour % 12;
  if (hour === 0) {
    hour = 12;
  }

  //pad with leading zeros where necessary
  const paddedHours = String(hour).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  //Don Updateto HTML
  document.getElementById("hour").textContent = paddedHours;
  document.getElementById("minutes").textContent = paddedMinutes;
  document.getElementById("seconds").textContent = paddedSeconds;
  document.getElementById("ampm").textContent = ampm;
}

setInterval(undateClock, 1000);
