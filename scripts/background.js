/*
*******************************************************************************
                                V K  A P I
*******************************************************************************
*/
var VK_APP = '5453938';
var REDIRECT_URL = 'http://oauth.vk.com/blank.html';
var METHOD_URL = 'https://api.vk.com/method/';

var token;

function auth(scopes) {
  var tab_url = 'https://oauth.vk.com/authorize?'+
                'client_id=' + VK_APP +
                '&scope=' + scopes +
                '&redirect_uri=' + encodeURI(REDIRECT_URL) +
                '&display=page' +
                '&response_type=token';

  chrome.tabs.create({
      url: tab_url,
      selected: true
  }, function(tab) {
        var tab_id = tab.id;

        chrome.tabs.onUpdated.addListener(function updateListener(id, info) {
          if (id == tab_id && info.url && info.status == "loading") {
            var tab_loadUrl = info.url;

            if(tab_loadUrl.indexOf('oauth.vk.com/authorize') == -1) {
              token = "";
              var params = tab_loadUrl.substr(tab_loadUrl.indexOf("#") + 1);
              params = params.split("&");
              for (var i = 0; i < params.length; i++) {
                temp = params[i].split("=");
                if ([temp[0]] == 'access_token') {
                  token = temp[1];
                }
              }

              if (token && token.length > 0) {
                return true;
              } else {
                return false;
              }
            }
          }
        });
      }
    );
}


  function getRequest(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if(request.status == 200) {
          console.log(request.responseText);
        }
      }
    };

    request.send(null);
  }

  getRequest('https://vk.com');
