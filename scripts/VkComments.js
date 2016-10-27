/*
*******************************************************************************
                C R E A T E D   B Y   A L E X E Y   G A Y D A R L Y
*******************************************************************************
*/

var settings_defaults = {
  config: {
    debug: true, // Дебаг
    add_block: true, // ������� �������
    audio_download: true, // ���������� ������������
    profile_info: true, // ���������� � ������� ��� ���������
    bdate_info: true, // ������� �������
    top_cooments: false, // ���������� ������� ����������� ������� ������� ������ ���� ������
    stop_facking: true, // �������� ����������� ����� ������� �� �� [�������]
  },
};

var LOG_TAG = "[VK COMMENTS] "
var TITLE = "VK BOX v1.0"

var vkbox
// ������ ��������� ��������
function topCommentsCheck(check){
  if (check ? 1 : 0) {
    settings_defaults.config.top_cooments = true;
    chrome.storage.sync.set({'vkboxTopComments': settings_defaults.config.top_cooments});
  } else {
    settings_defaults.config.top_cooments = false;
    chrome.storage.sync.set({'vkboxTopComments': settings_defaults.config.top_cooments});
  }

  console.log(settings_defaults.config.top_cooments);
}

function status(defaults){
    if(defaults){
      chrome.storage.local.get('vkboxTopComments', function(result){
        var channels = result;
        alert(channels);
      });
      return 'on';
    }
    else {
      console.log("OFF");
      return '';
    }
}

function CommentTop(box) {
    if (window.location.host == 'vk.com') {

      var box = new MessageBox({
        title: TITLE,
        type: "MESSAGE",
        dark: true,
        width: "670px",
        bodyStyle: "padding:0px;"
      });

      box.content('<div class="box_body" style="display: block; padding: 4px 0px 0px;"><h1> Идите нахуй, еще нехуя не готово!</h1></div>').show();

    }
}
