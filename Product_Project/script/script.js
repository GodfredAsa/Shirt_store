
 const productList = {
	products: [
	
	{
		title: 'Dam Brown',
		imageUrl: '../images/shirt2.jpg',
		price: 40.89,
		description: 'A smooth and slim fit cotton wear'
	},
	
	
	{
		title: 'Easy Wear',
		imageUrl: '../images/shirt6.jpg',
		price: 40.89,
		description: 'Look gently fit'
	},
		
	{
		title: 'White Boxed sleeve',
		imageUrl: '../images/shirt4.jpg',
		price: 40.89,
		description: 'Feel as King'
	},
		
	{
		title: 'BnW classic Dam',
		imageUrl: '../images/shirt3.jpg',
		price: 40.89,
		description: 'Fit as a Fiddle'
	},
		
	{
		title: 'Blue man',
		imageUrl: '../images/shirt1.jpg',
		price: 40.89,
		description: 'A smooth and slim fit sleeve'
	},
	
	{
		title: 'Gshirt',
		imageUrl: '../images/shirt5.jpg',
		price: 40.89,
		description: 'Make it simple & make it classic'
	}
	

], 
//	METHOD FOR RENDERING A LIST OF PRODUCTS
	render(){
//	SELECTING THE ID OF THE ELEMENT TO RENDER PRODUCTS
	const productHandler = document.querySelector('.products');
			
		const prodList = document.createElement('ul');
		prodList.className = 'product-list';
		for(const prod of this.products){
			const proEl = document.createElement('li');
			proEl.className = 'product-grid';
			proEl.innerHTML = 
				`<div class="one-item">
					<img src = "${prod.imageUrl}" alt="${prod.title}">

					<div>
						<h2> ${prod.title}</h2>
						<h3>\$ ${prod.price}</h3>
						<p> ${prod.description}</p>
						
						<button class="add-cart"> Add to Cart</button>
						
					</div>

				 </div>`;
			
			prodList.append(proEl);
			
		}
//		named renderHook
		productHandler.append(prodList);
		
}
	
	 
};



productList.render();