function bubba(n){
  
  for (var i = 0; i < n.length; i++)
  {
    bubba1(n[i]);
  }
  return;

/*
<a href="github.com">Github</a>
<a href="google.com">Google</a>
<a href="example.com">really, really, really long title 3 that will be ch…</a>
*/
}

bubba([
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
])

 function bubba1(a)
  {
      if(a.title.length <= 50){
       
        console.log(('<a href='+'"'+a.link+'"'+'>'+a.title+'</a>'))
      }
      else if (a.title.length > 50){
        console.log(('<a href='+'"'+a.link+'"'+'>'+a.title.substring(0,50)+'...</a>'))
        
      }
  }
