import { SceneNames } from "./constants";
import { GameScene } from "./scenes/game-scene";
import { PreloadScene } from "./scenes/preload-scene";

export class Game extends Phaser.Game {
  public constructor(private _gameConfig) {
    super(_gameConfig);

    this._initializeScenes();

    this.scene.start(SceneNames.preload);
  }

  private _initializeScenes(): void {
    this.scene.add(SceneNames.preload, new PreloadScene(this._gameConfig));
    this.scene.add(SceneNames.game, new GameScene(this._gameConfig));
  }
}
