export default class RewardAudio extends godot.AudioStreamPlayer {

    tree;
    eventBus;

    _ready() {
        this.tree = this.get_tree();
        this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_revealed", this, "onChestRevealed");
		this.eventBus.connect("game_restart", this, "onGameRestart");
    }

    onChestRevealed(node) {
        if (node != this.get_parent()) return;
        this.play();
    }

    onGameRestart() {
		// Could be improved by fading out the sound
        this.stop();
    }
}