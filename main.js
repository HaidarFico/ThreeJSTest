'use strict'
import './style.css'
import * as THREE from 'three';
import { Scene } from 'three';

function main(){
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setPixelRatio(window.devicePixelRatio);
  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
  const scene = new THREE.Scene();
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const light = new THREE.DirectionalLight(0xFFFFFF, 1);
  light.position.set(-1,2,4);
  scene.add(light);
  renderer.render(scene, camera);
  function render(time) {
    time *= 0.001;  // convert time to seconds
   
    cube.rotation.x = time;
    cube.rotation.y = time;
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();