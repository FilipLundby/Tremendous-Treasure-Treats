export default class RestartRichText extends godot.RichTextLabel {

	tree;
	eventBus;
	isRewarded = false;
	
	_ready() {
		godot.randomize();
		this.tree = this.get_tree();
		this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_revealed", this, "onChestReveal");
		this.eventBus.connect("game_restart", this, "onGameRestart");
        this.visible = false;
	}
	
    onChestReveal() {
        this.visible = true;
    }

    onGameRestart() {
        this.visible = false;
    }
}