export default class Chest extends godot.StaticBody {

	tree;
	eventBus;
	isRewarded = false;
	
	_ready() {
		godot.randomize();
		this.tree = this.get_tree();
		this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_clicked", this, "onChestClicked");
		this.eventBus.connect("game_restart", this, "onGameRestart");
	}
	
	_input_event(node, inputEvent, position, normal, shapeIndex) {
		// Ignore everything, but clicks
		if (!inputEvent.is_action_pressed("interact")) return;
		
		// Ignore if player was already rewarded
		if (this.isRewarded) return;
		
		// Tell everyone this node was clicked
		this.eventBus.emit_signal("chest_clicked", this);
	}
	
	// Disable all chests, if any has been revealed
	onChestClicked () {
		this.isRewarded = true;
	}

	onGameRestart () {
		this.isRewarded = false;
	}
}
