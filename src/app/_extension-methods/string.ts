export {}

if (!String.prototype.hasOwnProperty('format')) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (strMatched: any, matchIndex: number) {
      return typeof args[matchIndex] != 'undefined' ?
        args[matchIndex] :
        strMatched;
    });
  };
}
