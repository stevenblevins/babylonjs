// Main startup application

import createScene from "./modules/scene.js";
import { engine, light2} from "./modules/scene.js";
import { panel } from "./modules/menu.js";
import { wall } from "./modules/wallBuilder.js";


window.addEventListener('DOMContentLoaded', function () {
    
    // call the createScene function
    let scene = createScene();
    
    
    // run the render loop
    engine.runRenderLoop(function () {
        scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function () {
        engine.resize();
    });
})

