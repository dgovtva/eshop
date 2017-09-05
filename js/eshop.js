var cart={};
$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCard();
}); 

function loadGoods() {
    $.getJSON('goods.json', function(data) {
        var out = '';
        for (var key in data){
            out+='<div class="single-goods col-md-4">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>'+data[key]['cost']+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
            out+='</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    var articul = $(this).attr('data-art');
    if (card[articul] != undefined) {
        card[articul]++;
    }
    else {
        cart[articul] = 1;    
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    showMiniCard();
}

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function showMiniCard() {
    var out ='';
    for (var a in cart) {
        out += w + ' --- ' + cart[w]+'<br>';
    }
    $('#mini-cart').html(out);
}