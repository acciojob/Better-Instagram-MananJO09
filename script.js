//your code here
const imgBox= document.querySelector('.image');
const divBoxes = document.getElementsByClassName('.flex');

imgBox.addEventListener('dragstart', (e) => {
	e.target.className +=' selected';

	setTimeout(() => {
		e.target.className = 'hide';	
	} ,0);
	
})

for (divBoxes  of divBox) {
	divBox.addEventListener('dragover', (e) => {
		e.preventDefault();
		e.target.className ='imgBox';
	});
	divBox.addEventListener('dragenter', () => {
		
	});
	divBox.addEventListener('dragleave', () => {
		
	});
	divBox.addEventListener('drop', (e) => {
		e.target.append(imgBox);
	});
}