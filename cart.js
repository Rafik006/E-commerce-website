// $(".custom-alert").hide()
let counter=1
$(".cart-count").text(counter)
let data=[]
var container=document.querySelector(".item-container")
if(JSON.parse(localStorage.getItem('products'))){
    data=JSON.parse(localStorage.getItem('products'))
}   
data.map(ele=>{
    let div=document.createElement("div")
    div.classList="item"
    let h3=document.createElement("h3")
    h3.append(document.createTextNode(`${ele.productName}`))
    let p=document.createElement("p")
    p.append(document.createTextNode(`${ele.price} DT`))
    let span=document.createElement('span')
    span.append(document.createTextNode("Checkout"))
    p.append(span)
    var des=document.createElement("div")
    des.append(h3)
    
    span.classList='buy-btn checkout' 
    des.append(p)
    let img=document.createElement("img")

    img.setAttribute('src', ele.productImage);
    div.appendChild(img)
    div.appendChild(des)
  
    container.appendChild(div)

})
$('.checkout').on("click",function(){
    $(".item-container").empty()
    localStorage.setItem("products",JSON.stringify([]))
    alert('Your product has been delivered!');

})
$('.logo-icon').on('click',function(){
    $(location).attr('href',"index.html")
  })


