function bubba(n){
  
var arr1 = []
var arr = [
  {
    title: 'Github',
    link: 'github.com'
  },
  {
    title: 'Google',
    link: 'google.com'
  },
  {
    title: 'really, really, really long title that will be chopped off',
    link: 'example.com'
  }
]
for (var i=0; i < arr.length; i++){
 var domain = arr[i].link
 var name1 = arr[i].title
 if (name1.length > 50){
   var trimmed = name1.substring(0,50)+"..."
 }
 else{
   var trimmed = name1
 }
 
 var word = (('<a href='+'"'+domain+'"'+'>'+trimmed+'</a>'))
 
 console.log(word)
  
}

/*
<a href="github.com">Github</a>
<a href="google.com">Google</a>
<a href="example.com">really, really, really long title 3 that will be ch…</a>

*/



}

bubba(4)