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

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const email = emailInput.value;
    const name = nameInput.value;

    document.getElementById('loader').style.display = 'block';
    document.getElementById('response').innerHTML = ''; 

    try {
      const response = await fetch('https://api.playball-qa.fun/admin/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, data: `Name: ${name}. I want to be organizer (Website)` })
      });

      const result = await response.json();

      if (response.ok) {
        document.getElementById('response').innerHTML = `<p>${result.status}: Email sent successfully!</p>`;
        emailInput.value = '';
        nameInput.value = '';
      } else {
        document.getElementById('response').innerHTML = `<p>Error: ${result.name}</p>`;
      }
    } catch (error) {
      document.getElementById('response').innerHTML = `<p>Error: Unable to send email.</p>`;
    } finally {
        document.getElementById('loader').style.display = 'none';
    }
  });