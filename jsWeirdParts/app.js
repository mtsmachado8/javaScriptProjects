async function waitThreeSeconds(){
	let ms = 3000 + new Date().getTime();
	while(new Date() < ms){}
		console.log('finished function waitThreeSeconds');
}

document.addEventListener('click', () => {
	console.log('click event');
});

waitThreeSeconds();
console.log('Finished');