import $ from 'jquery'

function link (options) {
  var $a = $('<a>')
    .attr('href', '/#' + options.hash.to)
    .addClass(options.hash.class)
    .html(options.fn(this))

  return $a[0].outerHTML
}

export default link
