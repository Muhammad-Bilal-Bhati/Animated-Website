Shery.imageEffect("#back",{style:5,config:{
    "a":{"value":2,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9989506820566632},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.46,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}
},gooey:true})



let elem = document.querySelectorAll(".elements")
let animating = false
let elementIndexes = []

elem.forEach(() => {
    elementIndexes.push(0)
})

function animateHeadings() {
    if(!animating){
        animating = true
        
        elem.forEach((el, elIndex)=>{
            let h1s = el.querySelectorAll("h1")
            let currentIndex = elementIndexes[elIndex]
    
            gsap.to(h1s[currentIndex],{
                top : "-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this.targets(),{top:"100%"})
                }
            })
            
            let nextIndex = currentIndex == h1s.length-1 ? 0 : currentIndex + 1
            elementIndexes[elIndex] = nextIndex 

            gsap.to(h1s[nextIndex],{
                top : "-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:()=>{
                    animating = false
                }
            })
        })
    }
}


setInterval(animateHeadings, 2000)