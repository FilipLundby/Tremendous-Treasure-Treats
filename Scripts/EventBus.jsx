export default class EventBus extends godot.Node {}

godot.register_signal(EventBus, "game_restart");

godot.register_signal(EventBus, "chest_clicked");
godot.register_signal(EventBus, "chest_revealed");



