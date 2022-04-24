export default class RewardAnimation extends godot.AnimationPlayer {

	tree;
	chest;
	eventBus;

	_ready() {
		this.tree = this.get_tree();
		this.chest = this.get_parent();
		this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_clicked", this, "onChestClicked");
		this.eventBus.connect("game_restart", this, "onGameRestart");
		this.connect("animation_finished", this, "onRewardAnimationFinished")
	}

	onChestClicked(node) {
		if (node != this.get_parent()) return;
		this.play("Reveal");
	}

	onGameRestart() {
		// Play animations backwards only for the clicked chest
        if (this.assigned_animation == "") return;
    	if (this.current_animation_position <= 0) return;
		this.play_backwards("Reveal");
	}

	onRewardAnimationFinished(anim) {
		// Start rotating after the Reveal animation is done
		if (anim != "Reveal") return;
		if (this.current_animation_position <= 0) return;
		this.play("Rotation");
		this.eventBus.emit_signal("chest_revealed", this.chest);
	}
}
