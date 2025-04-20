function loadContent(page) {
    document.getElementById('contentFrame').src = page;
  }
//showing profile details

function togglePanel() {
  document.getElementById('profilePanel').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
//   showing the date and time

  function showDateTime() {
    const now = new Date();
  
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
  
    const formatted = now.toLocaleString('en-IN', options);
    document.getElementById('dateTimeBox').textContent = `📅 ${formatted}`;
  }
  
  window.onload = showDateTime;

  //switch darkmode

  let dark=document.getElementsByTagName("body");
document.getElementById('toggleDarkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
