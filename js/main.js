/*

 Make a function that, given a DOM Element and a set of tabs, creates an interface
 like this within the DOM element:
 
 +-------+-------+-------+
 | Tab 1 | Tab 2 | Tab 3 |
 +-----------------------+---------------------------+
 | Apples                                            |
 |                                                   |
 |                                                   |
 +---------------------------------------------------+
 
 Clicking each tab should change the text of the body. Use this text to test:
 
 Tab 1 -> Apples
 Tab 2 -> Pears
 Tab 3 -> Grapes
 
 * Styling isn't important, so just get something working first
 * Your function should support multiple tab controls on the page at the same
   time
 * Use raw DOM APIs, no frameworks
 * Feel free to look anything up online
 
 */
var example = [
	{
		x: 'Tab 1',
		y: 'Apples',
		z: 'https://img.freepik.com/free-vector/hand-drawn-apple-fruit-illustration_53876-2980.jpg?size=338&ext=jpg'
	},
	{
		x: 'Tab 2',
		y: 'Pears',
		z: 'https://myfoodbook.com.au/sites/default/files/styles/product_image/public/product_image/PACKHAM-2.jpg?itok=0uqNx_o7'
	},
	{
		x: 'Tab 3',
		y: 'Grapes',
		z: 'https://image.shutterstock.com/image-photo/green-grape-leaves-isolated-on-260nw-533487490.jpg'
	}
]

document.body.id = 'example1';
document.body.className = 'bg-primary'

function makeTabs(elId, array) {
	
	var domEl = document.getElementById(elId);
	var tabDiv = document.createElement('div');
	var contentDiv = document.createElement('div');

	contentDiv.id = 'cont';
	contentDiv.className = 'text-center mt-5';

	domEl.appendChild(tabDiv);
	domEl.appendChild(contentDiv);

	for(var i = 0; i < array.length; i++) {

		var butt = document.createElement('button');

		butt.className = 'btn btn-primary btn-secondary'
		butt.textContent = array[i].x;
		butt.id = i;
		butt.onclick = switcher;		

		tabDiv.appendChild(butt);

	}


	function switcher() {
		var h1 = document.createElement('h1');
		var img = document.createElement('img');

		h1.textContent = array[this.id].y;
		img.src = array[this.id].z;

		document.getElementById('cont').innerHTML = '';

		document.getElementById('cont').appendChild(h1);
		document.getElementById('cont').appendChild(img);
	}	

}

makeTabs('example1', example) 

















