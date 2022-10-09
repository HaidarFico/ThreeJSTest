'use strict'
import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

function main(){
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight)
  const fov = 75;
  const aspect = window.innerWidth/window.innerHeight;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 10;
  camera.position.x = 10;
  camera.position.y = 10;
  const scene = new THREE.Scene();
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;

  // GEOMETRY

  // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // const geometry = new THREE.ConeGeometry( 2, 2, 20, 1, true );

  // const points = [];
  // for ( let i = 0; i < 10; i ++ ) {
  //   points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
  // }
  // const geometry = new THREE.LatheGeometry( points );

  // const geometry = new THREE.CircleGeometry( 5, 32 );

  // const geometry = new THREE.RingGeometry( 1, 5, 32 );

  const geometry = new THREE.PlaneGeometry(1, 1)
  
  // END OF GEOMETRY
  const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});
  // const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const light = new THREE.AmbientLight(0xFFFFFF, 1);
  light.position.set(10, 10, 10);
  const lightUnder = new THREE.AmbientLight(0xFFFFFF, 1);
  lightUnder.position.set(-10, -10, -10);
  scene.add(light);
  scene.add(lightUnder);
  const controls = new OrbitControls(camera,renderer.domElement);

  renderer.render(scene, camera);
  function render(time) {
    time *= 0.001;  // convert time to seconds
   
    cube.rotation.x = time;
    cube.rotation.y = time;
   
    controls.update();
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();