import * as THREE from 'three';
import { 
    BASIS_SUPPORTER_HEIGHT,
    BASIS_HOLDER_HEIGHT,
} from './public-size';

import Basis from './basis';
import Cockpit from './cockpit';

export default class Excavator extends THREE.Group {

    constructor() {
        super();
        this.buildExcavator();
    }

    // 组装挖掘机
    private buildExcavator() {
        const basis = new Basis();
        this.add( basis );

        const cockpit = new Cockpit();
        cockpit.position.y = 0.5 * BASIS_HOLDER_HEIGHT + BASIS_SUPPORTER_HEIGHT;
        this.add(cockpit);
    }
    
}