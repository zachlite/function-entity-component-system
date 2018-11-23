import * as _ from "lodash";
import { Entity, EntityType, MeshTypes } from "./interfaces";

export function initPlayer(id: string, meshType: MeshTypes): Entity {
  return {
    id,
    meshType,
    type: EntityType.PLAYER,
    transform: {
      position: { x: _.sample(_.range(10)), y: 20, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 }
    },
    physics: { mass: 1, velocity: { x: 0, y: 0, z: 0 } }
  };
}

// client controls player that matches clientId
// update step to have take clientId as an arg
