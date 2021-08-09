const productsArray = [
{name: 'Рюкзак', code: 'P001', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 2649, newPrice: 1949, selectedImages: 0},
{name: 'Рюкзак', code: 'P016', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: '', newPrice: 2649,selectedImages: 1},
{name: 'Рюкзак', code: 'P030', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 211, newPrice: 2649,selectedImages: 2},
{name: 'Рюкзак', code: 'P001', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 2649, newPrice: 1949, selectedImages: 0},
{name: 'Рюкзак', code: 'P016', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: '', newPrice: 2649,selectedImages: 1},
{name: 'Рюкзак', code: 'P030', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 211, newPrice: 2649,selectedImages: 2},
{name: 'Рюкзак', code: 'P001', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 2649, newPrice: 1949, selectedImages: 0},
{name: 'Рюкзак', code: 'P016', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: '', newPrice: 2649,selectedImages: 1},
{name: 'Рюкзак', code: 'P030', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 211, newPrice: 2649,selectedImages: 2},
{name: 'Рюкзак', code: 'P001', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 2649, newPrice: 1949, selectedImages: 0},
{name: 'Рюкзак', code: 'P016', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: '', newPrice: 2649,selectedImages: 1},
{name: 'Рюкзак', code: 'P030', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 211, newPrice: 2649,selectedImages: 2},
{name: 'Рюкзак', code: 'P001', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 2649, newPrice: 1949, selectedImages: 0},
{name: 'Рюкзак', code: 'P016', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: '', newPrice: 2649,selectedImages: 1},
{name: 'Рюкзак', code: 'P030', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 211, newPrice: 2649,selectedImages: 2},
{name: 'Рюкзак', code: 'P001', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 2649, newPrice: 1949, selectedImages: 0},
{name: 'Рюкзак', code: 'P016', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: '', newPrice: 2649,selectedImages: 1},
{name: 'Рюкзак', code: 'P030', images: [{url: '../bagllet/images/product1.png', color: '#50649D', class: 'active'}, {url: '../bagllet/images/product3.png', color: '#55210B', class: 'active'}, {url: '../bagllet/images/product2.png', color: '#EA7927', class: 'active'}], oldPrice: 211, newPrice: 2649,selectedImages: 2},
];
 
const productsArrayCopy = productsArray.slice();



const createColorDot = (image, productIndex, colorIndex, isSelectedImages) => 
	`<span class="dot-wrap ${isSelectedImages && 'active'}"><span class="dot" style="background: ${image.color}" data-product-index="${productIndex}" data-color-index="${colorIndex}"></span></span>`;

	const createCardContent = (product, productIndex) => 
	`
	<div class="container-images">
		<div class="img-wrap">
			<img src="${product.images[product.selectedImages].url}" alt="product">
		</div>
		<div class="container-dots flx"> 
			${product.images.map((image, index) => createColorDot(image, productIndex, index, index===product.selectedImages)).join('')}
		</div>
	</div>
	<div class="bottom flx">
		<span class="name-product">${product.oldPrice ? '<span class="sale">Sale</span>': ''} ${product.name} <span>${product.code}</span></span>
		<div class="price-box">
		${product.oldPrice ? `<span class="old-price">₴${product.oldPrice}</span>`: ''}
			<span class="price">₴${product.newPrice}</span>
		</div>
	</div>
	
	`;


const createCardHtml = (product, productIndex) => 
	`<div class="item flx" id="product-index-${productIndex}" data-scroll>
		${createCardContent(product, productIndex)}
	</div>`;

const sortProductUp = (products) => products.sort((a, b) => a.newPrice - b.newPrice);

const sortProductDown = (products) => products.sort((a, b) => b.newPrice - a.newPrice);

$(document).ready(function(){
	let productCount = 9;
	const sortUpCheckbox = $('#sort-up');
	const sortDownCheckbox = $('#sort-down');
	const applyBtn = $('#apply-btn');
	const cardsContainer = $('.catalogue-box');
	const clickx= $('#burger');
	const searchInput = $('#search-input');
	const resetBtn = $('#reset-btn');
    
	const renderProductlist = (products) => {
		cardsContainer.html(products.slice(0, productCount).map(createCardHtml).join(''));
		$('.dot').on('click', onDotClick);

		const scroll = new LocomotiveScroll({
		    el: document.querySelector('[data-scroll-container]'),
		    smooth: true
		});

	}
   
	const onDotClick = (e) => {
		console.log(e)
		const {target: { dataset }} = e;
		const {productIndex, colorIndex} = dataset;
		const cardElement = $(`#product-index-${+productIndex}`);

		productsArray[+productIndex].selectedImages = +colorIndex;
        console.log(productsArray[+productIndex])
		cardElement.html(createCardContent(productsArray[productIndex], productIndex));
		$('.dot').on('click', onDotClick);
	}
    
    $('#more-btn').on('click', () => {  
    	const qtyProducts = productsArray.length;
    	const remainderProducts = qtyProducts - productCount;
    	if(qtyProducts > productCount && (qtyProducts - productCount) > 9){
    		productCount +=9;
    	} else {
          productCount = productCount + remainderProducts;
          $('#more-btn').hide();
    	}
   	    renderProductlist(productsArray);
    })

	clickx.on('click', function(){
	    clickx.toggleClass('active');
	    $('.side-menu').toggleClass('active');
	});

	$('.switch-language span').on('click', function(){
		var type = $(this).attr('data-type');
		$('.switch-language span[data-type='+ type +']').removeClass('active');
		$(this).addClass('active');
	});

	$('.search').on('click', function(){
		$(this).parent().parent().addClass('active');
		$('.search-list-box').slideDown();
    })

    $(document).click(function (e) {
	    if ( !$('.header-search-inner').is(e.target) && $('.header-search-inner').has(e.target).length === 0) {
	        $('.search').parent().parent().removeClass('active');
	        $('.search-list-box').hide();   
	    };
	});
    
    $(document).click(function (e) {
	    if ( !$('.basket-outer').is(e.target) && $('.basket-outer').has(e.target).length === 0 && !$('.popup').is(e.target) && $('.popup').has(e.target).length === 0) {
	        $('.popup-box').fadeOut(300);   
	    };
	});

	$('.close-popup').on('click', function(){
		$('.popup-box').fadeOut(300);
	});
    
	$('.open-pop').on('click', function(e){
		var data_id = $(this).attr('data-id');
		// Получаем дата-айди, чтобы понять к какму поп-апу обращаемся
		$('.popup-box').hide();
		// Перед открытием нового скрываем все
		$('.popup-box[data-id='+ data_id +']').fadeIn(300);
		// Открываем нужный поп-ап
	});

	$('.open-drop').on('click', function(){
		var data_id = $(this).attr('data-id');
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.side-menu .item').removeClass('active');
		} else{
			$(this).addClass('active');
			$('.side-menu .item').removeClass('active');
			$('.side-menu .item[data-id='+ data_id +']').addClass('active');
		}
	});
	$('.filter-open .plus').on('click', function(){
        $('.filter-box').toggleClass('active');
	})

	// $('.filter-box.active .plus').on('click', function(){
 //        $('.filter-box').removeClass('active');
	// })

	renderProductlist(productsArray);

    const applySearch = () => {
		let products = productsArray;
		const searchInputValue = searchInput.val();
		if(searchInputValue){
			products = products.filter(({name, code}) => name.includes(searchInputValue) || code.includes(searchInputValue));
		}

		if(sortUpCheckbox.prop('checked')) {
			products = sortProductUp(products);
			console.log(products = sortProductUp(products))
		} else if(sortDownCheckbox.prop('checked')) {
			product = sortProductDown(products)
		}

		if($('.filter-box').hasClass('active')){
			$('.filter-box').removeClass('active');
		}

		renderProductlist(products);
    }

	applyBtn.on('click', applySearch);

    resetBtn.on('click', () => {
    	const products = productsArrayCopy;
    	searchInput.val('');
    	sortDownCheckbox.prop('checked', false);
    	sortUpCheckbox.prop('checked', false);

    	renderProductlist(products);
    })

	sortUpCheckbox.on('change', (e) => {

		const {target} = e;

		if(!target.cheked) {
			sortUpCheckbox.prop('checked', true);
			sortDownCheckbox.prop('checked', false);
		} else {
			sortUpCheckbox.prop('checked', false);
		}
	})

	sortDownCheckbox.on('change', (e) => {
		const {target} = e;

		if(!target.cheked) {
			sortUpCheckbox.prop('checked', false);
			sortDownCheckbox.prop('checked', true);
		} else {
			sortDownCheckbox.prop('checked', false);
		}
	})

	searchInput.on('keyup', () => {
    	const searchInputValue = searchInput.val();
    	console.log(searchInputValue);
    	if(searchInputValue){
    		$('.reset-inp-value').addClass('active');
    	}
    });

    $('.reset-inp-value').on('click', () => {
    	const products = productsArray;
    	searchInput.val('');
    	$('.reset-inp-value').removeClass('active');

    	renderProductlist(products);
    })
});