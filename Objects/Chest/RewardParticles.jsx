export default class RewardParticles extends godot.Particles {

    tree;
    eventBus;

    _ready() {
        this.tree = this.get_tree();
        this.eventBus = this.tree.get_root().get_node("EventBus");
        this.eventBus.connect("chest_revealed", this, "onChestRevealed");
    }

    onChestRevealed(node) {
        if (node != this.get_parent()) return;
        this.restart();
    }
}