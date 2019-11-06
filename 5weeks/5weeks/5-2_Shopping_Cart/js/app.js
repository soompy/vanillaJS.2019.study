// 필터 기능
(function () {

    var filterBtn = document.querySelectorAll('.filter-btn');

    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();


        })
    })

})();


// 검색 기능
(function () {

    var search = document.getElementById('search-item');
    search.addEventListener('keyup', function () {

        var value = search.value.toLowerCase().trim();
        var items = document.querySelectorAll('.store-item');

        items.forEach(function (item) {

        })

    });
})();


// 카트 팝업
(function () {

    var cartInfo = document.getElementById('cart-info');
    var cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {

    })

})();


// 제품 추가 기능
(function () {

    var cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('store-item-icon')) {



            }
        })
    });


    // Show totals
    function showTotals() {

        var total = [];
        var items = document.querySelectorAll('.cart-item-price');

        /*document.getElementById('cart-total').textContent = ;
        document.querySelector('.item-total').textContent = ;
        document.getElementById('item-count').textContent = ;*/

    }

})();





// 완성본 파일
// 필터 기능
/*
(function () {

    var filterBtn = document.querySelectorAll('.filter-btn');
    // console.log(filterBtn);

    filterBtn.forEach(function (btn) {

        btn.addEventListener('click', function (e) {
            e.preventDefault();

            var value = e.target.dataset.filter;
            // console.log(value);

            var items = document.querySelectorAll('.store-item');
            items.forEach(function (item) {

                if (value === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(value)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }

            })
        })

    })

})();
 */


// 검색 기능
/*
(function () {

    var search = document.getElementById('search-item');
    search.addEventListener('keyup', function () {

        var value = search.value.toLowerCase().trim();
        var items = document.querySelectorAll('.store-item');

        items.forEach(function (item) {

            var type = item.dataset.item;
            // console.log(typeof type);
            // 각 제품별 데이터 속성값 안에 검색에서 입력한 텍스트가 삽입되어 있는지 확인

            // 검색방법 (1) : 앞, 중간, 뒤 상관없이 단어만 있으면 검색
            // if(type.includes(value)) {
            //     item.style.display = 'block';
            // } else {
            //     item.style.display = 'none';
            // }



            // 검색방법 (2) : 앞에서부터 검색
            var length = value.length;
            var match = type.slice(0, length);

            if (value === match) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }

        })

    });
})();
*/


// 라이트 박스
/*
(function () {

    var imageList = [];
    var counter = 0;

    var images = document.querySelectorAll('.store-img');
    var container = document.querySelector('.lightbox-container');
    var item = document.querySelector('.lightbox-item');
    var closeIcon = document.querySelector('.lightbox-close');
    var btnLeft = document.querySelector('.btnLeft');
    var btnRight = document.querySelector('.btnRight');

    images.forEach(img => {
        imageList.push(img.src);
    });

    // open modal
    images.forEach(img => {
        img.addEventListener('click', function (e) {


            // show modal
            container.classList.add("show");


            // get source
            var src = e.target.src;
            // console.log(src);


            // 팝업에 표시된 이미지의 좌표(?) 가져오기
            counter = imageList.indexOf(src);
            // console.log(counter);

            item.style.backgroundImage = `url(${src})`;


        });
    });


    // close modal
    closeIcon.addEventListener('click', function () {
        container.classList.remove("show");
    });

    btnLeft.addEventListener('click', function () {

        counter--;

        if (counter < 0) {
            counter = imageList.length - 1;
        }

        // console.log(counter);
        item.style.backgroundImage = `url(${imageList[counter]})`;

    });


    btnRight.addEventListener('click', function () {

        counter++;

        if (counter > imageList.length - 1) {
            counter = 0;
        }

        item.style.backgroundImage = `url(${imageList[counter]})`;

    });

})();
*/


// 카트 팝업
/*
(function () {

    var cartInfo = document.getElementById('cart-info');
    var cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart');
    })

})();
*/


// 제품 추가 기능
/*

(function () {

    // 제품에 있는 모든 Cart Icon 선택
    var cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function (btn) {

        btn.addEventListener('click', function (e) {

            // console.log(e.target);

            // Cart 영역(store-item-icon)과 Cart 아이콘 영역(fa-shopping-cart)이 서로 다름
            // Cart 아이콘 영역을 클릭했을 경우 부모인 Cart 영역으로 이벤트 타겟을 변경
            if (e.target.parentElement.classList.contains('store-item-icon')) {

                // 이미지 경로 가져오기 : fa-shopping-cart -> store-item-icon -> <img src="">
                // console.log(e.target.parentElement.previousElementSibling.src);
                var fullPath = e.target.parentElement.previousElementSibling.src;

                var pos = fullPath.indexOf('img') + 3;
                // console.log(pos);

                // 이미지만 가져오기 : /doughnut-1.jpeg
                var partPath = fullPath.slice(pos);
                // console.log(partPath);


                var item = {};

                // 클릭한 영역의 이미지에 대응하는 썸네일 이미지 설정하기
                item.img = `img-cart${partPath}`;

                // 제품 이름 가져오기
                var name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                // console.log(name);
                item.name = name;

                //  제품 가격 가져오기
                var price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                // 제품 가격 $ 기호 삭제
                var finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                // console.log(item);


                var cartItem = document.createElement('div');
                cartItem.classList.add(
                    'cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3'
                );

                cartItem.innerHTML = `
                <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </a>
            `;

                // select cart
                var cart = document.getElementById('cart');
                var total = document.querySelector('.cart-total-container');

                // insertBefore?
                cart.insertBefore(cartItem, total);
                alert('item added to the cart');
                showTotals();


            }

        })

    });

    // Show totals
    function showTotals() {

        var total = [];
        var items = document.querySelectorAll('.cart-item-price');

        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        });

        // console.log(total);

        var totalMoney = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0);

        var finalMoney = totalMoney.toFixed(2);
        console.log(finalMoney);


        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;

    }

})();*/
