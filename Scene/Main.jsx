
export default class Main extends godot.Node {

	tree;
	eventBus;

	_ready() {
		this.tree = this.get_tree();
		this.eventBus = this.tree.get_root().get_node("EventBus");
	}

	_input(inputEvent) {
		if (inputEvent.is_action_pressed("reset")) {
			this.eventBus.emit_signal("game_restart");
		}
	}

}
