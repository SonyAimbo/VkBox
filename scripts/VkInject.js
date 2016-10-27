var vkInject = {

  init: function() {
    vkInject.top_menu_item();
  },

  // Добавляем в выпадающий список в шапке, наш пункт меню настроек
  top_menu_item: function(){
    var profile_menu = ge('top_edit_link');
    var item = se('<a class="top_profile_mrow" id="vkbox_settings_link" onclick="return vkInject.msgBox_Settings();">VKBOX</a>');

    if (profile_menu && !ge('vkbox_settings_link')){
      profile_menu.parentNode.insertBefore(item, profile_menu);
    }
  },

  /* <div class="label fl_l">День рождения:</div>
  <div class="labeled"><a href="/search?c[section]=people&amp;c[bday]=19&amp;c[bmonth]=4">19 апреля</a></div>

  <div class="label fl_l">День рождения:</div>
  <div class="labeled"><a href="/search?c[section]=people&amp;c[bday]=5&amp;c[bmonth]=6">5 июня</a> <a href="/search?c[section]=people&amp;c[byear]=1990">1990 г.</a></div>

  */

  // Показывае MessageBox с настройками плагина
  msgBox_Settings: function() {
    if (window.location.host == 'vk.com') {
      vkInject.messageBox(TITLE, 540, '<button class="flat_button" onclick="Settings.OTPAuthEnable();">Авторизоваться</button>');
    /*  vkInject.messageBox(TITLE, 540, vkInject.settingsInjectHtml("Профиль", vkInject.settingsAddCheckBox('vkbox_id', 'Типа текст', 'Бла-Бла-Бла') +
            vkInject.settingsAddCheckBox('vkbox_id2', 'Показывать возраст', 'Показывать возраст и знак задиака в пункте Дата Рождения.') +
              vkInject.settingsAddCheckBox('vkbox_id3', 'Подробная информация', 'Показывать информацию о профиле при наведении на аватар пользователя.')
      ) +
      vkInject.settingsInjectHtml("Аудиозаписи", vkInject.settingsAddCheckBox('vkbox_id', 'Типа текст', 'Бла-Бла-Бла') +
              vkInject.settingsAddCheckBox('vkbox_id2', 'Скачивание аудиозаписей') +
              vkInject.settingsAddCheckBox('vkbox_id3', 'Показывать битрейд', 'Бла-Бла-Бла'))
    ); */
    }
  },

  /* Выводит диалоговое окно MessageBox
  * @title - Заголовок
  * @width - Ширина
  * @content - html код для вставки в MessageBox
  */
  messageBox: function(title, width, content){
    var box = new MessageBox({
      title: title,
      type: "MESSAGE",
      dark: true,
      width: String(width) + "px",
    });

    box.content(content).show();
  },

  /* Показывает вплывающие подсказки
  * при наведении на объякт - пример
  * onmouseover="vkInject.showHover(this,\'' + hint +'\')"
  * где hint - текст сообщения
  */
  showHover: function(el, text, opts) {
      opts = opts || {};
      showTooltip(el, extend({
                 content: '<div class="tt_text">' + text + '</div>',
                 showdt: 0,
                 black: 1,
                 shift: [15, 4, 0],
               }, opts));

  },

  settingsInjectHtml: function(textLabel, data) {
    return '<div class="settings_line">'+
            '<div class="settings_label">' + textLabel + '</div>'+
              '<div class="settings_labeled_text">'+
                data +
              '</div>'+
           '</div>';
  },

  checked: function(checkBox){
      if(checkBox){
        console.log("нажат");
      }
      else {
        console.log("не нажат");
      }
  },

  settingsAddCheckBox: function(id, text, hint) {
    var html = "";

    if(hint) {
      html = '<div id="' + id + '" class="settings_narrow_row" onmouseover="vkInject.showHover(this,\'' + hint +'\')">';
    } else {
      html = '<div id="' + id + '" class="settings_narrow_row">';
    }
    return html +
          '<div class="checkbox on" onclick="checkbox(this); vkInject.checked(isChecked(this));">'+ text +'</div>'+
           '</div>';
  }

};

vkInject.init();
