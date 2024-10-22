document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.lang-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (selectedLang === 'pl') {
                document.body.classList.add('lang-active'); 
            } else {
                document.body.classList.remove('lang-active'); 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.role-button');
    const contents = document.querySelectorAll('.role-content');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.getAttribute('data-role'); 
            
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });

            const activeContents = document.querySelectorAll(`.role-content.${role}`);
            activeContents.forEach(content => {
                content.classList.add('active');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const email = emailInput.value;
    const name = nameInput.value;

    const filteredName = name.replace(/[^\p{L}\s'ʼ\-]+/gu, ""); // Фільтруємо всі символи, окрім літер, пробілів, апострофів і тире

    if (filteredName !== name) {
      document.getElementById('enResponse').innerHTML = `<p>Error: Name contains invalid characters.<br>Only letters, spaces, apostrophes and hyphens are allowed.</p>`;
      document.getElementById('plResponse').innerHTML = `<p>Błąd: Imię zawiera niedozwolone znaki.<br>Dozwolone są tylko litery, spacje, apostrofy i myślniki.</p>`;
      return; // Зупиняємо відправку форми, якщо є недопустимі символи
    }

    console.log('second')
    document.getElementById('loader').style.display = 'block';

    // try {
    //   const response = await fetch('https://api.playball-qa.fun/admin/contactUs', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: email, data: `Name: ${name}. I want to be organizer (Website)` })
    //   });

    //   const result = await response.json();

    //   if (response.ok) {
    //     document.getElementById('enResponse').innerHTML = `<p>Email sent successfully!</p>`;
    //     document.getElementById('plResponse').innerHTML = `<p>E-mail wysłany pomyślnie!</p>`;
    //     emailInput.value = '';
    //     nameInput.value = '';
    //   } else {
    //     document.getElementById('enResponse').innerHTML = `<p>Error: ${result.name}</p>`;
    //     document.getElementById('plResponse').innerHTML = `<p>Błąd: ${result.name}</p>`;
    //   }
    // } catch (error) {
    //   document.getElementById('enResponse').innerHTML = `<p>Error: Unable to send email.</p>`;
    //   document.getElementById('plResponse').innerHTML = `<p>Błąd: Nie można wysłać e-maila.</p>`;
    // } finally {
    //     document.getElementById('loader').style.display = 'none';
    // }
  });
});