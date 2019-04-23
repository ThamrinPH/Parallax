var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("#bride", .5, {
    x:200,
    opacity:0,
});

tl.from("#img-1", 1, {
    x:-200,
    opacity:0,
},"=-1");

tl.from("#img-2", 1, {
    x:200,
    opacity:0,
},"=-.7");

tl.from("#groom", .5, {
    x:-200,
    opacity:0,
});

tl.from("span", 1, {
    width:0
},"=-.5");

tl2.from("#box",1, { 
    opacity: 0, 
    borderColor: "white",
    borderWidht: 12,
    boxShadow: '1px 1px 0px 0px rgba(0,0,0, .09)' });
tl2.to("#box", 1, { 
    scale: "5",
},"-=.5")
.to("#box", 1, { 
    width: 200,
    height: 150
});
tl2.from(".guest",1, { opacity: 0 });
tl2.from(".bride",1, { opacity: 0 });

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration:"100%",
})
.setPin(".sticky")
.setTween(tl)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "h1"
})
.setTween(tl2)
.addTo(controller);

function updatePercentage(){
    tl.progress();
    // console.log(tl.progress());
}