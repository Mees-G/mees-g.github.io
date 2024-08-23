document.body.onload = function(){
  setTimeout(function() {
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  }, 1000)
}

var classes = ['pacman', 'pong'];
$(".loader").each(function() {
  if (classes.length === 0) return false; // break jQuery each

  var index = Math.floor(Math.random() * classes.length);
  var className = classes[index];
  $('.loader').eq(index).addClass(className);
  console.log(className);
  $(this).addClass(className);
  classes.splice(index, 1);
});