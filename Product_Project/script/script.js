//CLASS FOR DATA

//basic class fields of products
class Product{
constructor(title, image, price, desc){
	this.title = title;
	this.imageUrl = image;
	this.price = price;
	this.description = desc; }

}

//class for handling item selected
class ShoppingCart{
	
	items = [];

addProduct(product){
	this.items.push(product);
	this.totalOutput =`<h2>\$ ${0}</h2>`;
	 
}
//creating a button for adding to cart
	render(){
	const cartEl = document.createElement('section');
		cartEl.innerHTML = 
			`
			<h2>Total: \$ ${0} </h2>
			<button> Order Now </button>
			`;
		cartEl.className = 'cart';
		this.totalOutput = cartEl.querySelector('h2');
		return cartEl;
	}


	
}


// product item class, renders a single product 
let numberOfItemInCart = 0;
class ProductItem{

	constructor(product){
		this.product = product;
	}
//	button evenListener function
	addToCart() {
	//	alert('Adding to cart');
//		alert(this.product);
		
	}
	
	render(){
		const prodEl = document.createElement('li');
			prodEl.className = 'product-grid';
			prodEl.innerHTML = 
				`<div class="one-item">
					<img src = "${this.product.imageUrl}" alt="${this.product.title}">
					<div>
						<h2> ${this.product.title}</h2>
						<h3 class="price">\$ ${this.product.price}</h3>
						<p> ${this.product.description}</p>
						<button class="add-cart"> + Cart</button>
						<button class="add-cart cart-delete">Delete</button>
					</div>
				 </div>`;
		
//		getting the button of the instance and adding evenListener
		const addCartButton = prodEl.querySelector('button');
	//	addCartButton.addEventListener('click',this.addToCart.bind(this));
		addCartButton.addEventListener('click',function () {
			//numberOfItemInCart++;
		let cartNumber = document.querySelector('#cartnumber');
		//let num = numberOfItemInCart++;
		cartNumber.textContent = ++numberOfItemInCart;

		let addBtn = this;
		let removeBtn = document.createElement('button');
		removeBtn.textContent = 'Remove';
		removeBtn.className = 'remove-cart';
		removeBtn.onclick = function () {
			// num =  numberOfItemInCart--;
			 cartNumber.textContent = --numberOfItemInCart;
			this.replaceWith(addBtn);
		}

		this.replaceWith(removeBtn);

		});

		return prodEl;
	}
}


//class instances of products 
class ProductList{
//	instances of the Products, 6 instances in total
	products = [
		new Product('Dam Brown', '../images/shirt2.jpg', 90.89,'A smooth and slim fit cotton wear'),
		new Product('Easy Wear', '../images/shirt6.jpg', 50.40,'Look gently fit'),
		new Product('White Boxed sleeve', '../images/shirt4.jpg', 40.69,'Feel as a King'),
		new Product('Jean Long Sleeve', '../images/shirt9.jpg', 120.60,'Fit as a Fiddle'),
		new Product('Blue sleeve Shirt', '../images/shirt8.jpg', 30.69,'A smooth slim fit sleeve'),
		new Product('G-Shirt', '../images/shirt5.jpg', 40.69,'Simply classic fit')
		];

constructor(){}

render(){
	
		const prodList = document.createElement('ul');
		prodList.className = 'product-list';
		for(const prod of this.products){
			const productItem = new ProductItem(prod);
			const prodEl  = productItem.render();
			prodList.append(prodEl);
			
		}
//		named renderHook
		return prodList;
	}
}

class Shop{
	render(){
		const productHandler = document.querySelector('.products');
		const cart = new ShoppingCart();
		const cartEl = cart.render();
		const productList = new ProductList();
		const prodListEl = productList.render();
		productHandler.append(cartEl);
		productHandler.append(prodListEl);
}
	}


const shop  =  new Shop();
shop.render();


