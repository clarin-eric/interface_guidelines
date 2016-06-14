



function showModal(obj, cb) {
if (cb) {
obj.one('shown.bs.modal', function (e) {
cb(); 
 });
}
obj.modal('show');
}
function hideModal(obj, cb) {
if (cb) {
obj.one('hidden.bs.modal', function (e) {
cb(); 
 });
}
obj.modal('hide');
}
