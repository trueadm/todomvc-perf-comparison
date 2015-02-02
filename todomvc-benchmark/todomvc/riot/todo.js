
riot.tag('todo', '<h3>{ opts.title }</h3> <ul> <li each="{ items }"> <label class="{ completed: done }"> <input class="toggle" type="checkbox" __checked="{ done }" onclick="{ parent.toggle }"> { title } <button class="destroy" onclick="{ parent.destroy }" >destroy</button> </label> </li> </ul> <form onsubmit="{ add }"> <input id="new-todo" name="input" onkeydown="{ edit }"> <button __disabled="{ !text }">Add #{ items.length + 1 }</button> </form>', function(opts) {
  this.items = opts.items

  this.edit = function(e) {
    this.text = e.target.value
  }.bind(this)

  this.add = function(e) {
    if (this.text) {
      this.items.push({ title: this.text })
      this.text = this.input.value = ''
    }
  }.bind(this)

  this.toggle = function(e) {
    var item = e.item
    item.done = !item.done
    return true
  }.bind(this)

  this.destroy = function(e) {
    var item = e.item
    this.items.splice(this.items.indexOf(item), 1)
  }.bind(this)

})
