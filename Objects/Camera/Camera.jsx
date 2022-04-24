export default class Cam extends godot.Camera {

	eventBus;
	cameraAnimation;

	_ready() {
		this.cameraAnimation = this.get_node("CameraAnimation");
		this.eventBus = this.get_tree().get_root().get_node("EventBus");
		this.eventBus.connect("chest_revealed", this, "onChestRevealed");
	}

	onChestRevealed () {
		// Could be improved by using procedual shake, with Perlin or Simplex noise
		this.cameraAnimation.play("Shake");
	}

}
