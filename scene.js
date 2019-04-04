// createScene function that creates and return the scene
let canvas = document.getElementById("renderCanvas"); // Get the canvas element 
let engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// create a basic BJS Scene object
let scene = new BABYLON.Scene(engine);

let light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 15, -3), scene);

//shadowGenerator.getShadowMap().renderList.push(sphere);
let shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);

export { engine, canvas, scene, light2, shadowGenerator};



// Create Scene function to run (initize) from main.js program
export default function createScene() {
    
    // Add a camera to the scene and attach it to the canvas
    let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2.65, 45, new BABYLON.Vector3(1, 20
        , 75), scene);
    
    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    camera.attachControl(canvas, true);
    
  
    // create a basic light, aiming 0,1,0 - meaning, to the sky
    let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    
    // Default Environment
    
    let environment = scene.createDefaultEnvironment({ enableGroundShadow: true, groundYBias: 1});

    // enable VR
    let vrHelper = scene.createDefaultVRExperience({createDeviceOrientationCamera:false});
    vrHelper.enableTeleportation({floorMeshes: [environment.ground]});

    // // load glb model
    // BABYLON.SceneLoader.ImportMesh("","./", "Suzanne.glb", scene, function (newMeshes){
    //     // monkey = newMeshes[];  
    //     // monkey.position.Y = 10;
    //     //scene.createDefaultCameraOrLight(true, true, true);
        
    // });
     
    BABYLON.SceneLoader.LoadAssetContainer("./", "Suzanne.glb", scene, function (container) {
        // Scale and position the loaded model (First mesh loaded from gltf is the root node)
        container.meshes[0].scaling.scaleInPlace(2)
        container.meshes[0].position.z = 5
        container.meshes[0].position.y = 4
        
        shadowGenerator.getShadowMap().renderList.push(container.meshes[0]);
        

        // Add loaded file to the scene
        container.addAllToScene();
    });

    // loader.onMeshLoaded = function (mesh) {
    //     // do something with the mesh
    //     
    // };
    
    


    
    // return the created scene
    return scene;
}

