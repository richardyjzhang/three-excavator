import * as THREE from 'three';
import { OrbitControls } from './lib/OrbitControls';
import { Basis } from './basis';

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

const basis = new Basis();
basis.scale.set(0.001, 0.001, 0.001);
scene.add( basis );

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    
    basis.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();