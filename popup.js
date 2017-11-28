
  document.addEventListener('DOMContentLoaded', function() {
    var hideButton = document.getElementById('hide');
    //var keywords = document.getElementById('keywords').value;
    hideButton.addEventListener('click', function() {

    function modifyDOM() {
          //You can play with your DOM here or check URL against your regex
          //console.log('Tab script:');

          var posts = document.getElementsByTagName("p");
          console.log(posts);
          
          for(var i=0;i<posts.length;i++)
          {
            var string = posts[i].innerText.toLowerCase();
            //console.log(string);

            var keywords = ["tag", "that friend", "that one friend"];

            var flag=0;

            //console.log(keywords);

            for(var j=0;j<keywords.length;j++)
            {
              if(string.indexOf(keywords[j].toLowerCase())!==-1){
                flag=1;
              }
            }

            if(flag==1)
            {
              posts[i].parentElement.style.display = 'none';
              posts[i].parentElement.parentElement.style.display = 'none';
            }
          }

          return posts;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
       //Here we have just the innerHTML and not DOM structure
       console.log('Popup script:')

       //console.log(results);
    });
      
    }, false);
  }, false);
