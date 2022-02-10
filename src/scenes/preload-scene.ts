import { BIRD_SHEET, SceneNames, TEXTURES } from "../constants";

export class PreloadScene extends Phaser.Scene {
  public game: Phaser.Game;

  public preload(): void {
    //
  }

  public create(): void {
    this.load.atlas(TEXTURES, "src/assets/atlases/main.png", "src/assets/atlases/main.json");
    this.load.atlas(BIRD_SHEET, "src/assets/atlases/bird.png", "src/assets/atlases/bird.json");
    this.load.on("progress", this._onFileLoadComplete, this);
    this.load.on("complete", this._onLoadComplete, this);
    this.load.start();
  }

  private _onFileLoadComplete(progress: number): void {
    console.log("LOAD_PROGRESS", progress);
  }

  private _onLoadComplete(): void {
    this.game.scene.stop(SceneNames.preload);
    this.game.scene.start(SceneNames.game);
  }
}
