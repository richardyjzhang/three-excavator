// 驾驶舱

import * as THREE from 'three';
import {
    COCKPIT_LENGTH, 
    COCKPIT_WIDTH, 
    COCKPIT_HEIGHT,
    COCKPIT_FLOOR_THICK,
    COCKPIT_CEIL_THICK,
} from './public-size';

export default class Cockpit extends THREE.Group {
    constructor() {
        super();
        this.addFloor();
        this.addCeil();
    }

    // 驾驶舱地板
    private addFloor() {
        const geometry = new THREE.BoxGeometry(
            COCKPIT_LENGTH, 
            COCKPIT_FLOOR_THICK,
            COCKPIT_WIDTH
        );
        const material = new THREE.MeshNormalMaterial();
        const floor = new THREE.Mesh(geometry, material);
        floor.position.y = 0.5 * COCKPIT_FLOOR_THICK;
        this.add(floor);
    }

    // 驾驶舱天花板
    private addCeil() {
        const geometry = new THREE.BoxGeometry(
            COCKPIT_LENGTH, 
            COCKPIT_CEIL_THICK,
            COCKPIT_WIDTH, 
        );
        const material = new THREE.MeshNormalMaterial();
        const ceil = new THREE.Mesh(geometry, material);
        ceil.position.y = COCKPIT_HEIGHT - 0.5 * COCKPIT_CEIL_THICK;
        this.add(ceil);
    }
}