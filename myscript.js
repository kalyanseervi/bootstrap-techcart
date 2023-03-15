// header javascript start


$(document).ready(function(){
  $(".dropdown-toggle").dropdown();
});


//header javascript end

//fetch data using JSON
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'your-rapidapi-key',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
};
//api for fetch
fetch(
    'https://api.escuelajs.co/api/v1/products?offset=0&limit=1000',
    options
)
    .then(response => response.json())
    .then(gos => {
        ihtml = ""
        for (items in gos) {
          
            ihtml += `
          
          <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
          <div class="product">
            <img
              src="${gos[items].images}"
              alt="${gos[items].description}">
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
              <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
              <li class="icon mx-3"><span class="far fa-heart"></span></li>
              <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            </ul>
          </div>
          <div class="tag bg-red">${gos[items].category.name}</div>
          <div class="title pt-4 pb-1">${gos[items].title}</div>
          <div class="d-flex align-content-center justify-content-center">
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
          </div>
          <div class="price">$ ${gos[items].price}</div>
        </div>
								`
             
        }
        // filtering data using category name Others
        let result=gos.filter(obj=> obj.category.name == "Others");
       
        console.log(result)
        
       
        document.getElementById("other").addEventListener("click", function(){
          let bhtml = ""
            for(let othr in result){
              
                bhtml+= `
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
           <div class="product">
             <img
               src="${result[othr].images}"
               alt="${result[othr].description}">
             <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
               <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
               <li class="icon mx-3"><span class="far fa-heart"></span></li>
               <li class="icon"><span class="fas fa-shopping-bag"></span></li>
             </ul>
           </div>
           <div class="tag bg-red">${result[othr].category.name}</div>
           <div class="title pt-4 pb-1">${result[othr].title}</div>
           <div class="d-flex align-content-center justify-content-center">
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
           </div>
           <div class="price">$ ${result[othr].price}</div>
         </div>`
             }
             console.log(bhtml);
             product_item.innerHTML = bhtml;
            
        });
         // filtering data using category name Electronics
        let electron=gos.filter(obj=> obj.category.name == "Electronics");
        document.getElementById("elecronic").addEventListener("click",function(){
          let ehtml = ""
            for(let elec in electron){
              
              ehtml+= `
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
           <div class="product">
             <img
               src="${electron[elec].images}"
               alt="${electron[elec].description}">
             <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
               <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
               <li class="icon mx-3"><span class="far fa-heart"></span></li>
               <li class="icon"><span class="fas fa-shopping-bag"></span></li>
             </ul>
           </div>
           <div class="tag bg-red">${electron[elec].category.name}</div>
           <div class="title pt-4 pb-1">${electron[elec].title}</div>
           <div class="d-flex align-content-center justify-content-center">
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
           </div>
           <div class="price">$ ${electron[elec].price}</div>
         </div>`
             }
             console.log(ehtml);
             product_item.innerHTML = ehtml;
            
        });
       
        // filtering data using category name Dresses
        let dress=gos.filter(obj=> obj.category.name == "Clothes");
        document.getElementById("dresses").addEventListener("click",function(){
          let chtml = ""
            for(let clot in dress){
              
              chtml+= `
                <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
           <div class="product">
             <img
               src="${dress[clot].images}"
               alt="${dress[clot].description}">
             <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
               <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
               <li class="icon mx-3"><span class="far fa-heart"></span></li>
               <li class="icon"><span class="fas fa-shopping-bag"></span></li>
             </ul>
           </div>
           <div class="tag bg-red">${dress[clot].category.name}</div>
           <div class="title pt-4 pb-1">${dress[clot].title}</div>
           <div class="d-flex align-content-center justify-content-center">
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
             <span class="fas fa-star"></span>
           </div>
           <div class="price">$ ${dress[clot].price}</div>
         </div>`
             }
             console.log(chtml);
             product_item.innerHTML = chtml;
            
        });
        product_item.innerHTML += ihtml;
        


    })
    .catch(err => console.error(err));

    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
          let value = $(this).val().toLowerCase();
         $("#product_item div").filter(function () {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
             
          });
    
      });
    
    });


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('mouseover', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}



let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});

