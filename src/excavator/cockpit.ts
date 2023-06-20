// 驾驶舱

import * as THREE from 'three';
import {
    COCKPIT_LENGTH,
    COCKPIT_WIDTH,
    COCKPIT_HEIGHT,
    COCKPIT_FLOOR_THICK,
    COCKPIT_CEIL_THICK,
    COCKPIT_ENGINE_HEIGHT,
    ARM_EXTRUDE_THICK,
} from './public-size';

export default class Cockpit extends THREE.Group {
    constructor() {
        super();
        this.addFloor();
        this.addRightBlock();
        this.addBehindBlock();
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


    // 乘员舱右侧部分
    private addRightBlock() {
        const x = 0.5 * COCKPIT_LENGTH;
        const y = COCKPIT_ENGINE_HEIGHT;
        const z = 0.5 * (COCKPIT_WIDTH - ARM_EXTRUDE_THICK);
        const geometry = new THREE.BoxGeometry(x, y, z);
        const material = new THREE.MeshNormalMaterial();
        const rightBlock = new THREE.Mesh(geometry, material);
        rightBlock.position.x = -0.5 * COCKPIT_LENGTH + 0.5 * x;
        rightBlock.position.y = 0.5 * y + COCKPIT_FLOOR_THICK;
        rightBlock.position.z = -0.5 * COCKPIT_WIDTH + 0.5 * z;
        this.add(rightBlock);
    }


    // 乘员舱后侧部分
    private addBehindBlock() {
        const x = 0.5 * COCKPIT_LENGTH;
        const y = COCKPIT_ENGINE_HEIGHT;
        const z = COCKPIT_WIDTH;
        const geometry = new THREE.BoxGeometry(x, y, z);
        const material = new THREE.MeshNormalMaterial();
        const behindBlock = new THREE.Mesh(geometry, material);
        behindBlock.position.x = 0.5 * COCKPIT_LENGTH - 0.5 * x;
        behindBlock.position.y = 0.5 * y + COCKPIT_FLOOR_THICK;
        this.add(behindBlock);
    }


    // 驾驶舱天花板
    private addCeil() {
        const x = 0.5 * COCKPIT_LENGTH;
        const y = COCKPIT_CEIL_THICK;
        const z = 0.5 * (COCKPIT_WIDTH - ARM_EXTRUDE_THICK);

        const geometry = new THREE.BoxGeometry(x, y, z);
        const material = new THREE.MeshNormalMaterial();
        const ceil = new THREE.Mesh(geometry, material);

        ceil.position.x = -0.5 * COCKPIT_LENGTH + 0.5 * x;
        ceil.position.y = COCKPIT_HEIGHT - 0.5 * COCKPIT_CEIL_THICK;
        ceil.position.z = 0.5 * COCKPIT_WIDTH - 0.5 * z;
        this.add(ceil);
    }
}