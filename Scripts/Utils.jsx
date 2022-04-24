export default class Utils extends godot.Node {

    getWeightedChoice(choices) {
        let total = 0;
        for (let c in choices) {
            let weight = c[0];
            total += weight;
        }
        var r = godot.rand_range(0, total);
        var upto = 0;
        for (let c in choices) {
            let weight = c[0];
            if (upto + weight >= r) {
                var value = c[1];
                return value;
            }
            upto += weight;
        }
    }

}