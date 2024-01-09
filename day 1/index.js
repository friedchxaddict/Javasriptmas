const countdownDisplay = document.getElementById('countdown-display');

function renderCountdown() {
  const christmas = new Date('January 25, 2024 24:00:00');
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.

  const d = new Date();
  let time_diff_in_milli = christmas - d;
  console.log(time_diff_in_milli);
  let seconds = (time_diff_in_milli / 1000) >> 0;
  let minutes = (seconds / 60) | 0;
  console.log(minutes);
  let hour = (minutes / 60) | 0;
  let rem_min = minutes % 60;
  let rem_sec = seconds % 60;

  const remaining = hour + ':' + rem_min + ':' + rem_sec;
  return (countdownDisplay.innerHTML = remaining);

  //const dateNumber = d.getDate()
  //const remaining = christmas - dateNumber
  //return countdownDisplay.innerHTML = remaining
}

renderCountdown();

var hero = {
  _name: 'John Doe',
  getSecretIdentity: function () {
    return this._name;
  },
};
var stoleSecretIdentity = hero.getSecretIdentity();
console.log(stoleSecretIdentity);
console.log(hero.getSecretIdentity());
