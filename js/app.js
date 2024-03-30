
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        perPage: 5,
        rewind : true,
        
    } );
    splide.mount();
  } );


  const cartbtn = document.getElementById('add-card')

  function addcartfuncation(){
    cartbtn.innerHTML = "Added to cart"
  }