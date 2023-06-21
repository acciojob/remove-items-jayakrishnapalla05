//your JS code here. If required.
const color=document.getElementById("colorSelect");
const btn=document.querySelector('input[type="button"]');
btn.addEventListener('click', () =>{
	const remove=color.options[color.selectedIndex];
	color.removeChild(remove);
	
});
