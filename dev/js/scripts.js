import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

mainTL.to("logo-1",{duration:3, alpha:0});
mainTL.to("logo-2",{duration:3, alpha:0});
mainTL.to("logo-3",{duration:3, alpha:0});
mainTL.to("logo-4",{duration:3, alpha:0});
mainTL.to("logo-5",{duration:3, alpha:0});
mainTL.to("logo-6",{duration:3, alpha:0});
mainTL.to("logo-7",{duration:3, alpha:0});
mainTL.to("logo-8",{duration:3, alpha:0});
mainTL.to("logo-9",{duration:3, alpha:0});
mainTL.to("logo-10",{duration:3, alpha:0});
mainTL.to("logo-11",{duration:3, alpha:0});
mainTL.to("logo-12",{duration:3, alpha:0});

// mainTL.to("flower",{duration:3, alpha:0});


gsap.registerPlugin(GSDevTools);







// mainTL.from("#hero article",{duration:3,alpha:0, scale:2, rotation:360});
// mainTL.from("#hero h1",{duration:3,alpha:0, scale:2});
// mainTL.from("#flower",{duration:4,alpha:0,scale:1,rotation:720});
GSDevTools.create();