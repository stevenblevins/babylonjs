// Create a side menu panel with variuos controls

import { picker, input} from "./meshelements.js";
import { scene, shadowGenerator } from "./scene.js";
export { panel };
// let impact = BABYLON.Mesh.CreatePlane("impact", 1, scene);
// impact.position = new BABYLON.Vector3(0, 0, -0.1);

// scene.onPointerDown = function (evt, pickResult) {
//     if (pickResult.hit) {
//         impact.pickResult.scaleGizmoEnabled = true;
//     }
// };




let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ui1");

let panel = new BABYLON.GUI.StackPanel();
panel.width = "100px";
panel.height = "900px";
panel.material = new BABYLON.StandardMaterial();
let diffuseColor = new BABYLON.Color3(0,.5,0);
panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
panel.backgroundColor = "red";
panel.borderPanel = "2px";
advancedTexture.addControl(panel);

// add push button
let button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "push it");
button1.width = "98px";
button1.height = "25px";
button1.color = "white";
button1.cornerRadius = 10;
button1.background = "blue";

//add push button to size sphere
panel.addControl(button1);

let shapeDiameter = 1;
button1.onPointerUpObservable.add(function () {
    // create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation 
    
    
    let shapeDiameterNew = shapeDiameter
    shapeDiameter = shapeDiameterNew + 1;

    // move the sphere upward 1/2 of its height
    
    sphere1.position.y = shapeDiameter / 2;

    console.log(shapeDiameter);
    shadowGenerator.getShadowMap().renderList.push(sphere1);
});

let sphere1 = BABYLON.Mesh.CreateSphere('sphere1', 32, shapeDiameter, scene);
shadowGenerator.getShadowMap().renderList.push(sphere1);
sphere1.position.y = shapeDiameter / 2;
sphere1.position.z = -5;

//Add color picker from mesh module 
panel.addControl(picker);

// add input box from mesh module
panel.addControl(input);


let gizmoManager = new BABYLON.GizmoManager(scene);

// add push button to turn on and off gizmo
let button2 = BABYLON.GUI.Button.CreateSimpleButton("but2", "off");
button2.width = "98px";
button2.height = "25px";
button2.color = "white";
button2.cornerRadius = 10;
button2.background = "blue";
button2.onPointerUpObservable.add(function () {
    gizmoManager.positionGizmoEnabled = false;
    gizmoManager.rotationGizmoEnabled = false;
    gizmoManager.scaleGizmoEnabled = false;
    gizmoManager.boundingBoxGizmoEnabled = false;
    
    
});
let button3 = BABYLON.GUI.Button.CreateSimpleButton("but3", "on");
button3.width = "98px";
button3.height = "25px";
button3.color = "white";
button3.cornerRadius = 10;
button3.background = "blue";

panel.addControl(button2);

button3.onPointerUpObservable.add(function () {
    gizmoManager.positionGizmoEnabled = true;
    gizmoManager.rotationGizmoEnabled = true;
    gizmoManager.scaleGizmoEnabled = true;
    gizmoManager.boundingBoxGizmoEnabled = true;
    
    
});

panel.addControl(button3);


let boxHeight = 10;
// add increase wall height button
let button4 = BABYLON.GUI.Button.CreateSimpleButton("but4", "box hgt");
button4.width = "98px";
button4.height = "25px";
button4.color = "white";
button4.cornerRadius = 10;
button4.background = "blue";

button4.onPointerUpObservable.add(function () {
    
    let newwboxHeight = boxHeight;
    
    
    boxHeight = newwboxHeight + 5;
    
    
    
    console.log (boxHeight);
    console.log (newwboxHeight);
});

panel.addControl(button4);















// var unitVec = new BABYLON.Vector3(1, 1, 1);
// // boxHeight.scaling = unitVec.scale(5);


// var slider = new BABYLON.GUI.Slider();
// slider.minimum = 1;
// slider.maximum = 20;
// slider.value = 5;
// slider.height = "20px";
// slider.width = "98px";
// slider.color = "#003399";
// slider.background = "grey";
//slider.left = "120px";
//slider.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
//slider.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
// slider.onValueChangedObservable.add(function (value) {
//     box.position.y = unitVec.scale(value);
//     console.log (boxHeight);
// });
//panel.addControl(slider);

