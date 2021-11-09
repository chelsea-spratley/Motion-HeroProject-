import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

const mainTL = gsap.timeline();

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function dropIn(){
}

function background(){
    tl.to("#background1", 0)
}

function cookie(){

    const tl = gsap.timeline();

    tl.from("#logo-9", { duration:0.5, y:"-=100",  autoAlpha:0})
    .from("#logo-10", { duration:0.5, y:"-=100",  autoAlpha:0})
    .from("#logo-11", { duration:0.5, y:"-=100",  autoAlpha:0})
    .from("#logo-12", { duration:0.5, y:"-=100",  autoAlpha:0})

    .from("#logo-5", { duration:0.5, y:"-=75",  autoAlpha:0})
    .from("#logo-6", { duration:0.5, y:"-=75",  autoAlpha:0})
    .from("#logo-7", { duration:0.5, y:"-=75",  autoAlpha:0, morphSVG:"#flower1"})
    .from("#logo-8", { duration:0.5, y:"-=75",  autoAlpha:0})

    .from("#logo-1", { duration:0.5, y:"-=50",  autoAlpha:0})
    .from("#logo-2", { duration:0.5, y:"-=50",  autoAlpha:0})
    .from("#logo-3", { duration:0.5, y:"-=50",  autoAlpha:0})
    .from("#logo-4", { duration:0.5, y:"-=50",  autoAlpha:0})

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
.add(hero(),"-=25%");
 add(background())



// mainTL.from("#hero article",{duration:3,alpha:0, scale:2, rotation:360});
// mainTL.from("#hero h1",{duration:3,alpha:0, scale:2});
// mainTL.from("#flower",{duration:4,alpha:0,scale:1,rotation:720});
GSDevTools.create();