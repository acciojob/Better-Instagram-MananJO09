//your code here
const imgBox= document.querySelector('.image');
const divBox = document.getElementsByClassName('.flex');

imgBox.addEventListener('dragstart', (e) => {
	e.target.className +=' selected0';
})