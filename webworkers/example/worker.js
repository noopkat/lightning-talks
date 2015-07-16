// wait for message from UI thread
onmessage = function(e) {
  var arr = [];
  for (var i = 0; i < 20000000; i += 1) {
    arr.push(i + e.data);
  }
  // post resulting data back
  postMessage(arr[0]);
}
