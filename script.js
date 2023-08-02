//your code here
const imgBox= document.querySelector('.image');
const divBoxes = document.getElementsByClassName('.flex');

imgBox.addEventListener('dragstart', (e) => {
	e.target.className +=' selected';
})

for (divBoxes  of divBox) {
	divBox.addEventListener('dragover', () => {
		
	});
	divBox.addEventListener('dragenter', () => {
		
	});
	divBox.addEventListener('dragleave', () => {
		
	});
	divBox.addEventListener('drop', () => {
		
	});
}