/*
* Автор расширения: Гайдарлы Алексей
*
* Это мое первое расширение и первый опыт работы с JavaScript
* до этого я программировал лишь на delphi, c#, java
* поэтому просьба не судить данный говнокод
* я только учусь :-)
*/

var vkbox_defaults = {
  config: {
    debug: true, // Откладка
    add_block: true, // Убирает рекламу
    audio_download: true, // Скачивание аудиозаписей
    profile_info: true, // Информация о профиле при наведении
    bdate_info: true, // Выводит возраст
    top_cooments: false, // Показывать первыми комментарии которые набрали больше всех лайков
    stop_facking: true, // Скрывает нецензурные слова заменяя их на [цензура]
  },
};

var vkbox_core = {
  /*
    Функция инжектит скрипт внутрь кода страницы
    @data имя файла например chrome.extension.getURL('/scripts/VkInject.js') или же строка если inline = true
    @inline имеет значения true или false при значении false принимает имя файла, при значении true innerText
  */
  injectScript: function(data, inline) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    if(!inline){
      script.setAttribute('src', data);
    } else {
      script.innerText = data;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  /*
    Функция инициализации расширения
  */
  init: function() {
    if(location.hostname == "vk.com") {
      vkbox_core.injectScript(chrome.extension.getURL('/scripts/VkInject.js'));
      vkbox_core.injectScript(chrome.extension.getURL('/scripts/VkComments.js'));
    }
  },
  /*
    Функция дебага, выводит лог в консоль если debug = true
  */
  debug: function(text){
    if (vkbox_defaults.config.debug == true){
      console.log("[VK CORE] " + text);
    }
  }


};

vkbox_core.init();
