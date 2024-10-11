document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.lang-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');

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
