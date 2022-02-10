import Phaser from "phaser";
import { CONFIGS } from "../configs";
import { TEXTURES } from "../constants";

export class BgComponent extends Phaser.GameObjects.TileSprite {
  public constructor(public scene: Phaser.Scene) {
    super(scene, 256, 256, 512, 512, TEXTURES, "bg.png");
  }

  public move(): void {
    this.tilePositionX += CONFIGS.speed;
  }
}
