model.fastDelete = function() {
  if (!model.selection())
    return;

  api.unit.selfDestruct();
}
