import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

mainTL.to("logo-1",{duration:3, alpha:0});

gsap.registerPlugin(GSDevTools);







// mainTL.from("#hero article",{duration:3,alpha:0, scale:2, rotation:360});
// mainTL.from("#hero h1",{duration:3,alpha:0, scale:2});
// mainTL.from("#flower",{duration:4,alpha:0,scale:1,rotation:720});
GSDevTools.create();