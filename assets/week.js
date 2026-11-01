/* Highlight the next class within seven days in the weekly schedule */
(function () {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var rows = document.querySelectorAll('tr[data-date]');
  for (var i = 0; i < rows.length; i++) {
    var p = rows[i].getAttribute('data-date').split('-');
    var day = new Date(+p[0], p[1] - 1, +p[2]);
    var diff = Math.round((day - today) / 864e5);
    if (diff >= 0 && diff < 7) { rows[i].classList.add('now'); break; }
    if (diff >= 7) break;
  }
})();
