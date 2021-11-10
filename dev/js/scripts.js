import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

const mainTL = gsap.timeline();

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function dropIn(){
}

function background(){

    const tl = gsap.timeline();

    tl.from("#background1",{duration:1,autoAlpha:0,  y:"=0", x:"=0", ease:"none"})
    .from("#background2",{duration:1, autoAlpha:0})
    .from("#background3",{duration:1, autoAlpha:0})
    .from("#background4",{duration:1, autoAlpha:0})
    .from("#background5",{duration:2, autoAlpha:0});
    
    return tl;
}



function cookie(){

    const tl = gsap.timeline();

    tl.from("#logo-9", { duration:0.5, y:"-=100",  autoAlpha:0})
    .from("#logo-10", { duration:0.5, y:"-=100",  autoAlpha:0})
    .from("#logo-11", { duration:0.5, y:"-=100",  autoAlpha:0})
    .from("#logo-12", { duration:0.5, y:"-=100",  autoAlpha:0})

    .from("#logo-5", { duration:0.5, y:"-=75",  autoAlpha:0})
    .from("#logo-6", { duration:0.5, y:"-=75",  autoAlpha:0})
    .from("#logo-7", { duration:0.5, y:"-=75",  autoAlpha:0})
    .from("#logo-8", { duration:0.5, y:"-=75",  autoAlpha:0})

    .from("#logo-1", { duration:0.5, y:"-=50",  autoAlpha:0})
    .from("#logo-2", { duration:0.5, y:"-=50",  autoAlpha:0})
    .from("#logo-3", { duration:0.5, y:"-=50",  autoAlpha:0})
    .from("#logo-4", { duration:0.5, y:"-=50",  autoAlpha:0})
    
    .from("#logo-9", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-10", { duration:0.25, y:"=0", x:"=0",  autoAlpha:0},"sameTime")
    .from("#logo-11", { duration:0.25,  y:"=0", x:"=0",  autoAlpha:0},"sameTime")
    .from("#logo-12", { duration:0.25,  y:"=0", x:"=0",  autoAlpha:0},"sameTime")
   
    .from("#logo-5", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-6", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-7", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-8", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")

    .from("#logo-1", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-2", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-3", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")
    .from("#logo-4", { duration:0.25, y:"=0", x:"=0", autoAlpha:0},"sameTime")

    return tl;
}

function flower(){

    const tl = gsap.timeline();

    tl.from("#flower1",{scale:1, duration:2, y:"-=100", rotation:1000, autoAlpha:0})

    .to("#preloader",{duration:0.25, alpha:0, onComplete:backToTop})

    return tl;
}

function backToTop(){
    window.scrollTo(0,0);
    gsap.set("#preloader",{display:"none"});
}

function hero(){

    const tl = gsap.timeline();

tl.from("#hero article",{duration:3,alpha:0, scale:2, rotation:360});
tl.from("#hero h1",{duration:3,alpha:0, scale:2});
tl.from("#flower",{duration:4,alpha:0,scale:1,rotation:720});

return tl;

}

mainTL.add(dropIn())
.add(cookie())
.add(flower())
.add(background())
.add(hero(),"-=60%")


// GSDevTools.create();


// mainTL.from("#hero article",{duration:3,alpha:0, scale:2, rotation:360});
// mainTL.from("#hero h1",{duration:3,alpha:0, scale:2});
// mainTL.from("#flower",{duration:4,alpha:0,scale:1,rotation:720});
