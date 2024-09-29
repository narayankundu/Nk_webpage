const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('main');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === button.dataset.tab) {
                tab.classList.add('active');
            }
        });
        button.classList.add('active');
    });
});
