// header javascript start

$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});

//header javascript end

//fetch data using JSON
const options = {
  method: "GET",
};

//api for fetch

let categoryListValue =[]
let categorylist = "";
let brandlist = "";
fetch("https://dummyjson.com/products?offset=0&limit=100", options)
  .then((response) => response.json())
  .then((gos) => gos.products)
  .then((gos) => {
    categoryListValue = gos;  
    let categorisarray = [];
    let brandsArray = [];
    ihtml = "";
    for (items in gos) {
      ihtml += `          
          <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
          <div class="product" >
            <img
              src="${gos[items].thumbnail}"
               >
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
              <li class="icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${gos[items].id})"><span class="fas fa-expand-arrows-alt"></span></li>
              <li class="icon mx-3"><span class="far fa-heart"></span></li>
              <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            </ul>
          </div>
          <div class="tag bg-red">${gos[items].category}</div>
          <div class="title pt-4 pb-1">${gos[items].title}</div>
          <div class="d-flex align-content-center justify-content-center">
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
          </div>
          <div class="price">$${gos[items].price}</div>
         
        </div>
								`;
      categorisarray.push(gos[items].category);
      brandsArray.push(gos[items].brand)
    }
    categorisarray = Array.from(new Set(categorisarray));     
    brandsArray = Array.from(new Set(brandsArray));     

    for (let cate in categorisarray) {
      categorylist += `
                <li class="sidenav-item">
         <div id="${categorisarray[cate]}" onclick="categorIsFunction(${categorisarray[cate]})">${categorisarray[cate]}</div> </li>
                `;
    }
    for (let brand in brandsArray) {
      brandlist += `
      <li class="sidenav-item">
      <div id="${brandsArray[brand]}" onclick="brandFunction(${brandsArray[brand]})">${brandsArray[brand]}</div>
    </li>
                `;
    }
    categoriesvalues.innerHTML = categorylist;    
    brandsvalues.innerHTML = brandlist;    
    product_item.innerHTML += ihtml;
  })  
  .catch((err) => console.error(err));
function categorIsFunction(catname) {
  let abc = catname.textContent;
  console.log(catname);
  let result = categoryListValue.filter((obj) => obj.category == abc);
 
  
  let categoryhtml = "";
  console.log(result);
  for(items in result){   
    categoryhtml += `          
          <div class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
          <div class="product" >
            <img
              src="${result[items].thumbnail}"          
               >
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
              <li class="icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${result[items].id})"><span class="fas fa-expand-arrows-alt"></span></li>
              <li class="icon mx-3"><span class="far fa-heart"></span></li>
              <li class="icon"><span class="fas fa-shopping-bag"></span></li>
            </ul>
          </div>
          <div class="tag bg-red">${result[items].category}</div>
          <div class="title pt-4 pb-1">${result[items].title}</div>
          <div class="d-flex align-content-center justify-content-center">
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
            <span class="fas fa-star"></span>
          </div>
          <div class="price">$${result[items].price}</div>         
        </div>
								`;
              }
              product_item.innerHTML = categoryhtml;
}

function brandFunction(brnadName){
  let bN = brnadName;
 
  console.log(bN);
}
// function for single product discraption
function singleiddescription(data) {
  let myproductid = data;
  let myproductdetail = "";
  fetch(`https://dummyjson.com/products/${myproductid}`)
    .then((response) => response.json())
    .then((gos) => {
      myproductdetail += `     
     <div class=" d-flex flex-column align-items-center justify-content-center product-item my-3">      
     <div class="product">
     <img
       src="${gos.thumbnail}"
       alt="${gos.description}"
        >
     <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
       <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
       <li class="icon mx-3"><span class="far fa-heart"></span></li>
       <li class="icon"><span class="fas fa-shopping-bag"></span></li>
     </ul>
   </div>
   <div class="tag bg-red">${gos.category}</div>
   <div class="title pt-4 pb-1">${gos.title}</div>
   <div class="d-flex align-content-center justify-content-center">
     <span class="fas fa-star"></span>
     <span class="fas fa-star"></span>
     <span class="fas fa-star"></span>
     <span class="fas fa-star"></span>
     <span class="fas fa-star"></span>
   </div>
   <div class="price">$ ${Number.parseInt(
     gos.price - gos.price / gos.discountPercentage
   )}   <span class="price"><del>$ ${gos.price}</del></span></div>
 
   </div>
   <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>       
      </div>
       
    `;

      thisismydetail.innerHTML = myproductdetail;
    });
}

// let submit = document.getElementById("myForm").submit()
// console.log(submit)

function userlogindata() {
  let username = document.getElementById("recipient-name").value;
  let password = document.getElementById("recipient-password").value;

  let imgurl;
  fetch(`https://dummyjson.com/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      document.getElementById("profileimg").setAttribute("src", `${res.image}`);
      imgurl = document.getElementById("profileimg").getAttribute("src");

      console.log(imgurl);

      testImage(imgurl).then(
        function fulfilled(img) {
          console.log("That image is found and loaded", img);
        },

        function rejected() {
          console.log("That image was not found");
        }
      );
    });
}

function testImage(url) {
  // Define the promise
  const imgPromise = new Promise(function imgPromise(resolve, reject) {
    // Create the image
    const imgElement = new Image();

    // When image is loaded, resolve the promise
    imgElement.addEventListener("load", function imgOnLoad() {
      resolve(this);
    });

    // When there's an error during load, reject the promise
    imgElement.addEventListener("error", function imgOnError() {
      reject();
    });

    // Assign URL
    imgElement.src = url;
  });

  return imgPromise;
}

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("mouseover", () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//carousel
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
      1200: { items: 4 },
    },
  });
});


const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute("data-bs-whatever");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector(".modal-title");
  const modalBodyInput = exampleModal.querySelector(".modal-body input");

  modalTitle.textContent = `New message to ${recipient}`;
  modalBodyInput.value = recipient;
});
