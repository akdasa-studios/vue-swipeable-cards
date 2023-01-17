export class Vector3d {
    constructor(
        public x: number,
        public y: number,
        public z: number
    ) {}

    get length() {
        return Math.sqrt(
            Math.pow(this.x, 2) +
            Math.pow(this.y, 2) +
            Math.pow(this.z, 2)
        )
    }
}