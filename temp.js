var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(15, 15, 45), scene);
    camera.attachControl(canvas, true);
    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 6, -1), scene);

    // Set up Shadows
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);

    //Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation

    // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
    ground = BABYLON.Mesh.CreateGround('ground1', 100, 100, 2, scene, false);
    ground.position.y = -.1;
    groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0, .5, 0);
    groundMaterial.diffuseTexture = new BABYLON.Texture("Greenground.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 10;
    groundMaterial.diffuseTexture.vScale = 10;
    groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    ground.material = groundMaterial;
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("ui1");

    var panel = new BABYLON.GUI.StackPanel();
    panel.width = "100px";
    panel.height = "900px";
    //panel.material = new BABYLON.StandardMaterial();
    //diffuseColor = new BABYLON.Color3(0,.5,0);
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    //panel.backgroundColor = "red";
    panel.borderPanel = "2px";
    advancedTexture.addControl(panel);
    
    var box = BABYLON.MeshBuilder.CreateBox("box", scene);
    var boxMaterial = new BABYLON.StandardMaterial();
    box.material = boxMaterial;
    box.scaling = new BABYLON.Vector3(1, 1, 1);



    var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "push it");
    button1.width = "98px";
    button1.height = "25px";
    button1.color = "white";
    button1.cornerRadius = 10;
    button1.background = "blue";
    button1.onPointerUpObservable.add(function () {
        wallHeight = (wallHeight += 5);
        console.log(wallData);
        //console.log (box.scaling.X);
    });
    panel.addControl(button1);


    var picker = new BABYLON.GUI.ColorPicker();

    picker.value = boxMaterial.diffuseColor;
    picker.height = "120px";
    picker.width = "120px";
    picker.paddingTop = "30px";
    picker.paddingLeft = "15px";
    picker.onValueChangedObservable.add(function (value) { // value is a color3
        boxMaterial.diffuseColor = value;
    });

    panel.addControl(picker);
    return scene;
};
/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
