
  document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hide');
    hideButton.addEventListener('click', function() {

    var keywords = document.getElementById('keywords').value.split(",");
    //console.log('key', keywords);

    function modifyDOM(keywords) {
          //You can play with your DOM here or check URL against your regex
          //console.log('Tab script:');

          var posts = document.querySelectorAll("p");
          var images = document.getElementsByClassName("_4-eo");

          //console.log('images', images);

          for(var i=0;i<images.length;i++)
          {
            console.log(images[i].href)
          }

          console.log(posts);

          keywords = keywords.split(",");
          console.log(keywords);
          
          for(var i=0;i<posts.length;i++)
          {
            var string = posts[i].innerText.toLowerCase();
            //console.log(string);

            //var keywords = ["tag", "that friend", "that one friend"];

            var flag=0;

            for(var j=0;j<keywords.length;j++)
            {
              if(string.indexOf(keywords[j])!==-1){
                flag=1;
              }
            }

            if(flag==1)
            {
              posts[i].parentElement.style.display = 'none';
              posts[i].parentElement.parentElement.style.display = 'none';
              //posts[i].parentElement.parentElement.parentElement.style.display = 'none';
            }
          }

          return posts;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + '("' + keywords + '"));' //argument here is a string but function.toString() returns function's code
    }, (results) => {
       //Here we have just the innerHTML and not DOM structure
       console.log('Popup script:')
       //console.log(keywords);

       //console.log(results);
    });
      
    }, false);
  }, false);
