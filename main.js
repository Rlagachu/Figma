$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


let join = ["rahul",1,2,3,4,5,6]
let splitArr = join.split(0,3)
console.log(splitArr)