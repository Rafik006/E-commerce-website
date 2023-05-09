// let email = localStorage.getItem("email");
// let password = localStorage.getItem("password");
// let loginBtn = document.getElementById("loginbtn");
// let inputEmail = document.getElementById("emailInput");
// let inputPassword= document.getElementById("emailInput");
// let btn = document.getElementById("#signupbtn");





// loginBtn.onclick = function () {
//     const isValid = validate();
//     if(isValid) {
//         // navigate main page 
//         location.href=""
//     }
// }
// btn.addEventListener('click', function() {
//     localStorage.setItem("email",inputEmail.value);
//     localStorage.setItem("password",inputPassword.value)
//     location.href = "login.html"
// });





// function validate () {
//     if(email === inputEmail && password === inputPassword ) {
//         return true;
//     }
//     else if(email !== inputEmail || password !== inputPassword) {
       
//         alert(`wrong password for email ${inputEmail} or wrong Email`)
//         return false;
//     }
//     else if (email === inputEmail && password !== inputPassword) {
//         alert(` wrong password for email ${inputEmail}`)
//         return false;
//     }
//     return;
// };


let counter=0
let arr=[]
localStorage.setItem("products",JSON.stringify(arr))
$(".cart-count").text(counter)

const PRODUCTS = [
    {
      id: 1,
      productName: "NIKE Air Jordan Low Orange",
      price: 199.0,
      productImage: './products/NIKE Air Jordan Low Orange.png',
    },
    {
      id: 2,
      productName: "NIKE Air Jordan Low Purple",
      price: 199.0,
      productImage:'./products/NIKE Air Jordan Low Purple.png',
    },
    {
      id: 3,
      productName: "NIKE Air Jordan Low Grey",
      price: 199.0,
      productImage: './products/NIKE Air Jordan Low Grey.png',
    },
    {
      id: 4,
      productName: "NIKE Air Jordan Low Red",
      price: 199.0,
      productImage: './products/NIKE Air Jordan Low Red.png',
    },
    {
      id: 5,
      productName: "NIKE Air Jordan Paris",
      price: 229,
      productImage: './products/Nike Air Jordan Paris grey.png',
    },
    {
      id: 6,
      productName: "NIKE Air Jordan Cardinal Red",
      price: 229.0,
      productImage: './products/NIKE AIR JORADN Cardinal Red.png',
    },
    {
      id: 7,
      productName: "NIKE Air Jordan Low Green",
      price: 219.0,
      productImage:'./products/Nike Air Jordan Low Green.png',
    },
    {
      id: 8,
      productName: "products/Nike AJ x Travis Scott Bleu",
      price: 219.0,
      productImage: './products/Nike AJ x Travis Scott Bleu.png',
    }

  ];
  var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
} 
var filter = function(array,predicate){
var acc = [];
each(array,function(element,i){
    if (predicate(element,i)){
        acc.push(element)
    }
})
return acc;
}

function displayProduct(arr){
        for(let i=0;i<arr.length;i++){
          var divConatiner=$(`<div style={"overflow","hidden"}></div>`)
          divConatiner.append(`<img class="product-img" src="${arr[i].productImage}">`)
          var divDes=$(`<div class="product-desc"> </div>`)
          var h3=$(`<h3>${arr[i].productName}</h3>`)
          var p=$(`<h3 class="before" >${arr[i].price} DT </h3>`)
          var btn=$(`<button id=${arr[i].id} class="buy-btn">Buy it now</button>`)
          divDes.append(h3)
          divDes.append(p)
          divDes.append(btn)
          var lastDiv=$(`<div class="product-item"></div>`)

            divConatiner.appendTo(lastDiv)
            divDes.appendTo(lastDiv)
            lastDiv.appendTo($(".products-container"))
      }
}
displayProduct(PRODUCTS)
$(".buy-btn").on("click",function(){
    var id = $(this).attr("id");
    console.log("Button with ID " + id + " was clicked.");
   let updated= PRODUCTS.filter(element=> element.id===+id)
   arr.push(updated[0])
   localStorage.setItem("products",JSON.stringify(arr))
   
   $(location).attr('href',"cart.html")
})
$('.logo-icon').on('click',function(){  
  $(location).attr('href',"index.html")
})
$('.search-icon').on('click',function(){  
  console.log($(".search-input").val())
  let filtertred=PRODUCTS.filter(ele=>{console.log(ele.productName)
    ele.productName.split(" ").includes($(".search-input").val())})
  console.log(filtertred)
  displayProduct(filtertred)
  $(".cart-count").text("2")
  console.log('clicked')
  
})
$(".cart-icon").on("click",function(){
  $(location).attr("href","cart.html")
})