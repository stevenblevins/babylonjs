// Create walls both single and multiple
//Array of paths to construct extrusion
import { scene, shadowGenerator} from "./scene.js";



// create a built-in "ground" shape;
let ground = BABYLON.Mesh.CreateGround('ground1', 100, 100, 2, scene, false);

// Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
ground.position.y = -.1;
let groundMaterial = new BABYLON.StandardMaterial("ground", scene);
groundMaterial.diffuseColor = new BABYLON.Color3(0, .5, 0);
groundMaterial.diffuseTexture = new BABYLON.Texture("Greenground.jpg", scene);
groundMaterial.diffuseTexture.uScale = 10;
groundMaterial.diffuseTexture.vScale = 10;
groundMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
ground.material = groundMaterial;




 

let wallThickness = 1;
let wallLength = 25;
let wallHeight = 15;

let floorLevel = 0;
let mat = new BABYLON.StandardMaterial("mat1", scene);
//mat.alpha = .35;
mat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 1.0);
mat.backFaceCulling = true;
let myShape = [
        
        // path shape wall in plan view  (wall thickness points, wall length points, wall floor level points 'Floor')
        new BABYLON.Vector3(0, 0, floorLevel),
        new BABYLON.Vector3(0, wallLength, floorLevel),
        new BABYLON.Vector3(wallThickness, wallLength, floorLevel),
        new BABYLON.Vector3(wallThickness, 0, floorLevel),
        
];
// myShape.material = new material 
myShape.push(myShape[0]);
let myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
myMaterial.diffuseColor = new BABYLON.Color3(1,1,0);
//sphere.material = myMaterial;


shadowGenerator.getShadowMap().renderList.push(mat);
ground.receiveShadows = true;
let myPath = [
        // From base point
        new BABYLON.Vector3(0, 0, 0),
        // extrude to point
        new BABYLON.Vector3(0, wallHeight, 0),
        
];


// Create wall by extrusion with updatable parameter set to true for later changes
let wall = BABYLON.MeshBuilder.ExtrudeShape("wall", {shape: myShape, path: myPath, sideOrientation: BABYLON.Mesh.DOUBLESIDE, cap: 3, updatable: true}, scene);
wall.material = mat;
wall.position.x = -5;
wall.metadata = {
    "wall": {
        "type": "masonry",
        "height": wallHeight,
        "length": wallLength
    }

};
console.log(wall.metadata);
shadowGenerator.getShadowMap().renderList.push(wall);


export { wall };
    





