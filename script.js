function showCart() {
	let hidden = document.getElementById("hidden");
	if (hidden.style.display == "none") {
		hidden.style.display = "block"
	} else {
		hidden.style.display = "none";
	}
};



function showBar() {

	document.getElementById("mySidebar").style.display = "block";
}
function closeBar() {

	document.getElementById("mySidebar").style.display = "none";
};



function changeImage1() {
	if (document.getElementById("main_img").src == "images/image-product-1.jpg"){
		document.getElementById("main_img").src = "images/image-product-1-thumbnail.jpg";
	} else {
		document.getElementById("main_img").src = "images/image-product-1.jpg";
	}
};

function changeImage2() {
	if (document.getElementById("main_img").src == "images/image-product-1.jpg"){
		document.getElementById("main_img").src = "images/image-product-2-thumbnail.jpg";
	} else {
		document.getElementById("main_img").src = "images/image-product-2.jpg";
	}
};

function changeImage3() {
	if (document.getElementById("main_img").src == "images/image-product-1.jpg"){
		document.getElementById("main_img").src = "images/image-product-3-thumbnail.jpg";
	} else {
		document.getElementById("main_img").src = "images/image-product-3.jpg";
	}
};

function changeImage4() {
	if (document.getElementById("main_img").src == "images/image-product-1.jpg"){
		document.getElementById("main_img").src = "images/image-product-4-thumbnail.jpg";
	} else {
		document.getElementById("main_img").src = "images/image-product-4.jpg";
	}
};



let pics = [
	"images/image-product-1.jpg",
	"images/image-product-2.jpg",
	"images/image-product-3.jpg",
	"images/image-product-4.jpg"
];

let step = 0;
changeImage();

function changeImage() {
	if (typeof pics == "undefined" || step == pics.length) return;

	document.getElementById("imgClickAndChange").src = pics[step];
	step++;
}


let pics0 = [
	"images/image-product-1.jpg",
	"images/image-product-2.jpg",
	"images/image-product-3.jpg",
	"images/image-product-4.jpg"
];

let step0 = 0;
changeImage0();

function changeImage0() {
	if (typeof pics0 == "undefined" || step0 == pics0.length) return;

	document.getElementById("imgClickAndChange").src = pics0[step0];
	step0++;
}



let shop = document.getElementById("shop");

let shopItemsData2 = [
{
	id: "han"
}
];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =()=>{
	return (shop.innerHTML = shopItemsData2
		.map((x) => {
			let{id} = x;
			let search = basket.find((x)=>x.id === id) || [];
			return `
		<button class="gray-button" id=product-id-${id}>
		    <a href="" onclick="decrement(${id}); return false"><img src="images/icon-minus.svg" class="minus-icon"></a>
		    <a href="" class="no-0" id=${id}>
		    ${search.item === undefined? 0: search.item}
		    </a>
		    <a href="" onclick="increment(${id}); return false"><img src="images/icon-plus.svg" class="plus-icon"></a>
	    </button>
	    <button class="orange-button" onclick="addCart(${id});"><img src="images/icon-cart.svg" class="cart-icon">Add to cart</button>
	`
	}).join(""));
};

generateShop();


 let increment = (id) => {
	let selectedItem = id;
	let search = basket.find((x)=> x.id === selectedItem.id);

	if(search === undefined){
			basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else{
		search.item += 1;
	}
	
	//console.log(basket);
	update(selectedItem.id);

	localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
	let selectedItem = id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if (search == undefined) return;
	else if(search.item === 0) return;
	else{
		search.item -= 1;
	}
	update(selectedItem.id);
	basket = basket.filter((x) => x.item !== 0);
	//console.log(basket);
	localStorage.setItem("data", JSON.stringify(basket));
};

let addCart = (id) => {
	let selectedItem = id;
	let search = basket.find((x)=> x.id === selectedItem.id);

	if(search === undefined){
			basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else{
		search.item += 1;
	}
	
	//console.log(basket);
	update(selectedItem.id);

	localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
	let search = basket.find((x)=> x.id === id)
	//console.log(search.item);
	document.getElementById(id).innerHTML = search.item;
	calculation();
};


let calculation = () => {
	let cartIcon = document.getElementById("cartAmount");
	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
};

calculation();
