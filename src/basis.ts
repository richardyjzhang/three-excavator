// 底盘（包括基座、轮子、履带）

import * as THREE from 'three';
import {
    BASIS_WHEEL_COUNT,
    BASIS_HOLDER_WIDTH, 
    BASIS_HOLDER_LENGTH, 
    BASIS_HOLDER_HEIGHT, 
    BASIS_SUPPORTER_RADIUS, 
    BASIS_SUPPORTER_HEIGHT,
    BASIS_AXIS_RADIUS,
    BASIS_AXIS_THICK,
    BASIS_WHEEL_RADIUS,
    BASIS_WHEEL_THICK,
} from './public-size';

class Wheel extends THREE.Group {
    private axis: THREE.Mesh; // 轴
    private wheel: THREE.Mesh;

    constructor() {
        super();
        this.buildAxis();
        this.buildWheel();

        this.axis.position.y += 0.5 * BASIS_AXIS_THICK;
        this.wheel.position.y -= 0.5 * BASIS_WHEEL_THICK;

        this.add(this.axis);
        this.add(this.wheel);
    }

    // 构建轴（圆柱体）
    private buildAxis() {
        const geometry = new THREE.CylinderGeometry(
            BASIS_AXIS_RADIUS, 
            BASIS_AXIS_RADIUS, 
            BASIS_AXIS_THICK
        );
        const material = new THREE.MeshNormalMaterial();
        this.axis = new THREE.Mesh(geometry, material);
    }

    // 构建轮子（圆柱体）
    private buildWheel() {
        const geometry = new THREE.CylinderGeometry(
            BASIS_WHEEL_RADIUS, 
            BASIS_WHEEL_RADIUS, 
            BASIS_WHEEL_THICK
        );
        const material = new THREE.MeshNormalMaterial();
        this.wheel = new THREE.Mesh(geometry, material); 
    }
}

export class Basis extends THREE.Group {
    private holder: THREE.Mesh; // 底盘
    private supporter: THREE.Mesh; // 支座
    private leftWheels: THREE.Group;
    private rightWheels: THREE.Group;

    constructor() {
        super();
        this.buildHolder();
        this.buildSupporter();
        this.buildWheels();

        this.supporter.position.y = 0.5 * (BASIS_HOLDER_HEIGHT + BASIS_SUPPORTER_HEIGHT);
        this.leftWheels.position.z = 0.5 * BASIS_HOLDER_WIDTH + BASIS_AXIS_THICK;
        this.rightWheels.position.z = -0.5 * BASIS_HOLDER_WIDTH - BASIS_AXIS_THICK;
        this.leftWheels.rotation.x = -0.5 * Math.PI;
        this.rightWheels.rotation.x = 0.5 * Math.PI;

        this.add(this.holder);
        this.add(this.supporter);
        this.add(this.leftWheels);
        this.add(this.rightWheels);
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
    }

    // 添加车轮
    private buildWheels() {
        // 轮间距
        const delta = (BASIS_HOLDER_LENGTH - 2 * BASIS_AXIS_RADIUS) 
            / (BASIS_WHEEL_COUNT - 1);

        this.leftWheels = new THREE.Group();
        this.rightWheels = new THREE.Group();

        // 每次添加左一个右一个
        for (let i = 0; i < BASIS_WHEEL_COUNT; ++i) {
            const x = -0.5 * BASIS_HOLDER_LENGTH + BASIS_AXIS_RADIUS + i * delta;
            const left = new Wheel();
            const right = new Wheel();
            left.position.x = x;
            right.position.x = x;
            this.leftWheels.add(left);
            this.rightWheels.add(right);
        }
    }
}