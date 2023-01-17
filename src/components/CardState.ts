import { Ref, ref } from "vue";
import { Vector3d } from "./Vector3d";

type CardAction = "inactive"|"moving"

export interface CardState {
    id: string
    index: number,
    position: Vector3d,
    angle: Vector3d,
    action: CardAction
}

export class CardVM implements CardState {
    public id: string
    public text: string = ""
    public index: number
    public position = new Vector3d(0, 0, 0)
    public angle = new Vector3d(0, 0, 0)
    public action: CardAction = "inactive"
    constructor(text: string, index: number) {
        this.id = text
        this.text = text
        this.index = index
        // this.angle = ref(new Vector3d(0, 0, 0))
        // this.position = ref(new Vector3d(0, 0, 0))
    }
}