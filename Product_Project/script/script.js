class Product{
title = 'DEFAULT';
imageUrl;
description;
price;

constructor(title, image, price, desc){
	this.title = title;
	this.imageUrl = image;
	this.price = price;
	this.description = desc;
	
}

}


 const productList = {
	products: [
	new Product('Dam Brown', '../images/shirt2.jpg', 40.89,'A smooth and slim fit cotton wear'),
//	{
//		title: 'Dam Brown',
//		imageUrl: '../images/shirt2.jpg',
//		price: 40.89,
//		description: 'A smooth and slim fit cotton wear'
//	},
//	
		
	new Product('Easy Wear', '../images/shirt6.jpg', 50.40,'Look gently fit'),
		
//	{
//		title: 'Easy Wear',
//		imageUrl: '../images/shirt6.jpg',
//		price: 40.89,
//		description: 'Look gently fit'
//	},
		
	new Product('White Boxed sleeve', '../images/shirt4.jpg', 40.69,'Feel as a King'),
//	{
//		title: 'White Boxed sleeve',
//		imageUrl: '../images/shirt4.jpg',
//		price: 40.89,
//		description: 'Feel as King'
//	},
		
	new Product('Jean Long Sleeve', '../images/shirt9.jpg', 120.60,'Fit as a Fiddle'),
		
//	{
//		title: 'BnW classic Dam',
//		imageUrl: '../images/shirt3.jpg',
//		price: 40.89,
//		description: 'Fit as a Fiddle'
//	},
		
	new Product('Blue sleeve Shirt', '../images/shirt8.jpg', 30.69,'A smooth slim fit sleeve'),
//		
//	{
//		title: 'Blue man',
//		imageUrl: '../images/shirt8.jpg',
//		price: 40.89,
//		description: 'A smooth and slim fit sleeve'
//	},
	
		new Product('G-Shirt', '../images/shirt5.jpg', 40.69,'Simply classic fit')
	
//	{
//		title: 'Gshirt',
//		imageUrl: '../images/shirt5.jpg',
//		price: 40.89,
//		description: 'Make it simple & make it classic'
//	}
//	

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
