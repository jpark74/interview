let toggles = document.querySelectorAll('.toggle')

for (let i = 0; i < toggles.length; i++) { 
  toggles[i].addEventListener('click', function() {
    this.classList.toggle('show') 
    if (!this.classList.contains('show')) {
    	this.querySelector('img').src = 'image/lemon-list-02-02.png'
    } else {
    	(this.querySelector('img').src = 'image/lemon-list-01.png');

    }
})
}