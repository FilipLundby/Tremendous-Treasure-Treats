export default class ChestAudio extends godot.AudioStreamPlayer {

	tree;
	eventBus;

	_ready() {
		this.tree = this.get_tree();
		this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_clicked", this, "onChestClicked");
	}

	onChestClicked(node) {
		if (node != this.get_parent()) return;
		this.play();
	}
}
