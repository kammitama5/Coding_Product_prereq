function bubba(a)
{
    if(a.title.length < 50){
     
      console.log(('<a href='+'"'+a.link+'"'+'>'+a.title+'</a>'))
    }
    else if (a.title.length > 50){
      console.log(('<a href='+'"'+a.link+'"'+'>'+a.title.substring(0,50)+'...</a>'))
      
    }
}

bubba({
  title: 'really, really, really long title that will be chopped off',
  link: 'example.com'
})

bubba({
  title : 'my name is Krystal',
  link: 'wowza.com'
})

bubba({
  title : 'Hi',
  link: "starbucks.com"
})
