import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero article",{duration:3,alpha:0, scale:2, rotation:360});
mainTL.from("#hero h1",{duration:3,alpha:0, scale:2});
mainTL.from("#flower",{duration:4,alpha:0,scale:1,rotation:720});