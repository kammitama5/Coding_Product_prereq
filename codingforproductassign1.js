function bubba(a)
{
    
      var title = (Object.values(a)[0])
      var domain = (Object.values(a)[1])
      var trimmed = title.substring(0,50)+"..."
      
      console.log('<a href='+'"'+domain+'">'+trimmed+'</a>')
  
  
}

bubba({
  title: 'really, really, really long title that will be chopped off',
  link: 'example.com'
})

/*Output:

<a href="example.com">really, really, really long title that will be cho…</a>*/

