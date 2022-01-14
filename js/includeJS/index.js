// JS do Include
document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByTagName("include");for(var t=0;t<e.length;t++){let a=e[t];n(e[t].attributes.src.value,function(e){a.insertAdjacentHTML("afterend",e),a.remove()})}function n(e,t){fetch(e).then(e=>e.text()).then(e=>t(e))}});

//-------Slider X4 Main -----------------

let items = document.querySelectorAll('.carousel  .carousel-item1')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
