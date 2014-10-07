action_sets.gameplay.fast_delete = function () {
  if (model.fastDelete) model.fastDelete()
}
api.settings.definitions.keyboard.settings.fast_delete = {
  title: 'fast delete',
  type: 'keybind',
  set: 'mods',
  display_group: 'mods',
  display_sub_group: 'fast delete',
  default: 'shift+ctrl+k'
}
