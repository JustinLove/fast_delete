model.fastDelete = function() {
  if (!model.selection())
    return;

  api.unit.selfDestruct();
}

api.Panel.message('', 'inputmap.reload');
