import FrogMaterial from "../../Materials/FrogMaterial.tres";
import MushroomMaterial from "../../Materials/MushroomMaterial.tres";
import StarMaterial from "../../Materials/StarMaterial.tres";

export default class RewardMesh extends godot.MeshInstance {

    rewards = [
		[20, StarMaterial],
		[30, MushroomMaterial], 
		[50, FrogMaterial]
	];
    tree;
    eventBus;

    _ready() {
        this.tree = this.get_tree();
        this.eventBus = this.tree.get_root().get_node("EventBus");
		this.eventBus.connect("chest_clicked", this, "onChestClicked");
    }

    onChestClicked(node) {
        if (node != this.get_parent()) return;
		// Calculate reward
		let rewardMaterial = this.getWeightedChoice(this.rewards); 
		this.material_override = rewardMaterial;
    }

	getWeightedChoice(choices) {
		let total = 0.0;
		for (let c in choices) {
			let weight = choices[c][0];
			total += weight;
		}
		var r = godot.rand_range(0, total);
		var upto = 0.0;
		for (let c in choices) {
			let weight = choices[c][0];
			if (upto + weight >= r) {
				var value = choices[c][1];
				return value;
			}
			upto += weight;
		}
	}

}