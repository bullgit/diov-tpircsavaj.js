var a = document.getElementsByTagName("a")
for (var i = 0; i < a.length; i++) {
    var id = i+1
  a[i].href = "javascript:void(0)"
}
