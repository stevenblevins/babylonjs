// create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation 
import { scene, shadowGenerator} from "./scene.js";
import { box, boxMaterial } from "./menu.js";


box.material = boxMaterial;


// add color picker to panel
let picker = new BABYLON.GUI.ColorPicker();
picker.value = boxMaterial.diffuseColor;
picker.height = "120px";
picker.width = "120px";
picker.paddingTop = "30px";
picker.paddingLeft = "15px";
picker.onValueChangedObservable.add(function (value) { // value is a color3
    boxMaterial.diffuseColor = value;

});

// add input box to panel
let input = new BABYLON.GUI.InputText();
input.width = "98px";
input.paddingTop = "30px";
input.height = "65px";
input.color = "white";
input.text = "";
input.onBeforeKeyAddObservable.add((input) => {
    let key = input.currentKey;
    if (key < "0" || key > "9") {
        input.addKey = false;
    };
});
// limit input to number values only
document.onkeydown = (e) => {
    if (e.keyCode == 13) {
        let sphere = BABYLON.Mesh.CreateSphere('sphere1', 32, input.text, scene);
        sphere.position.y = input.text / 2;
        shadowGenerator.getShadowMap().renderList.push(sphere);
        //let ballSize = 0;
        let ballSize = input.text;
        console.log(ballSize);
    }
};



export { picker, input };