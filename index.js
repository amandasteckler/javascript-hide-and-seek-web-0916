function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var child = document.querySelector('#grand-node').querySelectorAll('div')
  return child[child.length-1]
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt((rankedLists[i].innerHTML + n), 10)
  }
}
