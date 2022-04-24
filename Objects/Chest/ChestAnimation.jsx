export default class ChestAnimation extends godot.AnimationPlayer {

	tree;
	eventBus;

	_ready() {
		this.tree = this.get_tree();
		this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_clicked", this, "onChestClicked");
		this.eventBus.connect("game_restart", this, "onGameRestart");
	}

	onChestClicked(node) {
		if (node != this.get_parent()) return;
		this.play("Open");
	}

	onGameRestart() {
		// Play animations backwards only for the clicked chest
		if (this.assigned_animation == "") return;
		if (this.current_animation_position <= 0) return;
		this.play_backwards("Open");
	}
}
