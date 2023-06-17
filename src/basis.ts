// 底盘（包括基座、轮子、履带）

import * as THREE from 'three';
import {
    BASIS_HOLDER_WIDTH, 
    BASIS_HOLDER_LENGTH, 
    BASIS_HOLDER_HEIGHT, 
    BASIS_SUPPORTER_RADIUS, 
    BASIS_SUPPORTER_HEIGHT
} from './public-size';

export class Basis extends THREE.Group {
    private holder: THREE.Mesh; // 底盘
    private supporter: THREE.Mesh; // 支座

    constructor() {
        super();
        this.buildHolder();
        this.buildSupporter();
        this.add(this.holder);
        this.add(this.supporter);
    }

    // 构建底盘（长方体）
    private buildHolder() {
        const geometry = new THREE.BoxGeometry(
            BASIS_HOLDER_LENGTH, 
            BASIS_HOLDER_HEIGHT, 
            BASIS_HOLDER_WIDTH
        );
        const material = new THREE.MeshNormalMaterial();
        this.holder = new THREE.Mesh(geometry, material);
    }

    // 构建支座（圆柱体）
    private buildSupporter() {
        const geometry = new THREE.CylinderGeometry(
            BASIS_SUPPORTER_RADIUS,
            BASIS_SUPPORTER_RADIUS,
            BASIS_SUPPORTER_HEIGHT
        );
        const material = new THREE.MeshNormalMaterial();
        this.supporter = new THREE.Mesh(geometry, material);
        this.supporter.position.y = 0.5 * (BASIS_HOLDER_HEIGHT + BASIS_SUPPORTER_HEIGHT);
    }
}