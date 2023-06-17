import * as THREE from 'three';
import { OrbitControls } from './lib/OrbitControls';
import Excavator from './excavator/excavator';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(3, 4, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#EEEEEE");
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

// scene.add(new THREE.GridHelper());
scene.add(new THREE.AxesHelper(2));

const scale = 0.001;
const excavator = new Excavator();
excavator.scale.set(scale, scale, scale);
scene.add(excavator);

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    
    // excavator.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();