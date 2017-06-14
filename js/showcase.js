(function (){
  'use strict';
  function App () {
    var $public = {},
        $private = {};

    $public.init = function () {
      $private.domParser = new DOMParser();
      $private.readShowCases()
      for (var showCase of $private.showCases) {
        $private.renderItems(showCase)
        $private.addEvents(showCase)
      }
    }
    
    //read show-cases dom with class .show-case
    //load data from de url data attribute
    $private.readShowCases = function () {
      $private.showCases = []
      for (var showCaseDom of document.querySelectorAll('.show-case')) {        
        $private.showCases.push({
          dom: showCaseDom,
          url: showCaseDom.dataset.url,
          //change for $private.httpGet(showCaseDom.dataset.url)
          data: $private.emulateData()
        })
      }
    }

    //request method with cors domain exception
    $private.httpGet = function(url, callback = function(response){return response;}) {
      var req = new XMLHttpRequest();      
      req.open("GET", url, false);
      req.send();
      return req.responseText.data;
    }

    //workaround for request with exception
    $private.emulateData = function() {
      return {"widget":{"size":10},"reference":{"timestamp":"14/12/2012","item":{"businessId":"1768629","name":"Tablet Smart DL HD7 Kids K71 com 4GB, Wi-Fi, Tela 7\", Câmera 2MP, Cabo USB, Suporte à Modem 3G, Slot para Cartão e Android 4.0 – Chumbo","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6665633","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-HD7-Kids-K71-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Cabo-USB-Suporte-a-Modem-3G-Slot-para-Cartao-e-Android-4-0-–-Chumbo-1768629.html","price":"R$ 499,00","oldPrice":"R$ 599,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 41.58</strong>"}}},"recommendation":[{"businessId":"1768411","name":"Tablet AOC Breeze MW0711BR com Tela de 7\", 8GB, Wi-Fi, Leitor de Cartão, Capa Protetora e Android 4.0","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-AOC-Breeze-MW0711BR-com-Tela-de-7-8GB-Wi-Fi-Leitor-de-Cartao-Capa-Protetora-e-Android-4-0-1768411.html","price":"R$ 499,00","oldPrice":"R$ 599,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 41.58</strong>"}},{"businessId":"1768491","name":"Tablet DL Everest EV-T71 PRE com Tela 7”, 4GB, Câmera 2MP, Wi-Fi, Suporte à Modem 3G e Android 4.0","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Everest-EV-T71-PRE-com-Tela-7”-4GB-Camera-2MP-Wi-Fi-Suporte-a-Modem-3G-e-Android-4-0-1768491.html","price":"R$ 499,00","oldPrice":null,"productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 41.58</strong>"}},{"businessId":"1706504","name":"Tablet Smart DL HD7 com 4GB, Wi-Fi, Tela 7\", Câmera 2MP, Cabo USB, Slot para Cartão e Android 4.0 - Chumbo","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-HD7-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Cabo-USB-Slot-para-Cartao-e-Android-4-0-Chumbo-1706504.html","price":"R$ 399,00","oldPrice":"R$ 549,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 33.25</strong>"}},{"businessId":"1826580","name":"Tablet Phaser Kinno PC709 VE Plus com Tela 7” Multitouch, 4GB, Wi-Fi, Suporte à Modem 3G e Android 2.3","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6875461","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Phaser-Kinno-PC709-VE-Plus-com-Tela-7”-Multitouch-4GB-Wi-Fi-Suporte-a-Modem-3G-e-Android-2-3-1826580.html","price":"R$ 379,00","oldPrice":"R$ 499,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 31.58</strong>"}},{"businessId":"1765938","name":"Tablet Multilaser Vibe NB027 com Tela 7\" com 8GB, Slot para Cartão, Wi-Fi e Android 4.0 – Rosa","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6584703","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Multilaser-Vibe-NB027-com-Tela-7-com-8GB-Slot-para-Cartao-Wi-Fi-e-Android-4-0-–-Rosa-1765938.html","price":"R$ 399,00","oldPrice":"R$ 599,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 33.25</strong>"}},{"businessId":"1776985","name":"Tablet Smart DL A75 com 4GB, Wi-Fi, Tela 7\", Câmera 2MP, Touch Screen, Adaptador USB, Slot para Cartão e Android 2.3 - Preto","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Smart-DL-A75-com-4GB-Wi-Fi-Tela-7-Camera-2MP-Touch-Screen-Adaptador-USB-Slot-para-Cartao-e-Android-2-3-Preto-1776985.html","price":"R$ 399,00","oldPrice":null,"productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 33.25</strong>"}},{"businessId":"1768488","name":"Tablet DL Mobile  TG-M71 com Tela 7\", 3G, Wi-Fi, Câmera 2MP, Saída Mini HDMI, Bluetooth, Suporte à Modem 3G e Android 4.0 – Branco","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Mobile-TG-M71-com-Tela-7-3G-Wi-Fi-Camera-2MP-Saida-Mini-HDMI-Bluetooth-Suporte-a-Modem-3G-e-Android-4-0-–-Branco-1768488.html","price":"R$ 749,00","oldPrice":null,"productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 62.42</strong>"}},{"businessId":"1767783","name":"Tablet Phaser Kinno PC-719VE com Tela 7”, Wi-Fi, Suporte à Modem 3G e Android 2.2","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-Phaser-Kinno-PC-719VE-com-Tela-7”-Wi-Fi-Suporte-a-Modem-3G-e-Android-2-2-1767783.html","price":"R$ 329,00","oldPrice":"R$ 399,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 27.42</strong>"}},{"businessId":"1680698","name":"Tablet AOC Breeze 2 MW0821BR8 com 8GB, Wi-Fi, Bluetooth, Leitor de Cartão, Mini HDMI, Câmera 3MP, Tela 8\" e Android 2.3","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6124117","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-AOC-Breeze-2-MW0821BR8-com-8GB-Wi-Fi-Bluetooth-Leitor-de-Cartao-Mini-HDMI-Camera-3MP-Tela-8-e-Android-2-3-1680698.html","price":"R$ 599,00","oldPrice":"R$ 799,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 49.92</strong>"}},{"businessId":"470442","name":"Tablet DL Smart T-704 com 4GB, Câmera 2.0MP, Wi-Fi, Tela 7\" e Android 2.2","imageName":"//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178","detailUrl":"//www.pontofrio.com.br/tablets/Tablet/TabletAndroid/Tablet-DL-Smart-T-704-com-4GB-Camera-2-0MP-Wi-Fi-Tela-7-e-Android-2-2-470442.html","price":"R$ 349,00","oldPrice":"R$ 599,00","productInfo":{"paymentConditions":"ou <strong>12X</strong> de <strong> 29.08</strong>"}}]};
    }    
    
    //Separates the items doms with youts events
    $private.renderItems = function (showCase) {      
      var itemTemplate = showCase.dom.querySelector('.show-case .body').cloneNode(true);
      var referenceItem = {
        dom: showCase.dom.querySelector('.show-case .reference .item'),
        data: showCase.data.reference.item
      };
      showCase.items = []
      $private.writesItemData(referenceItem)
      $private.addItemEvents(referenceItem)

      for (var itemData of showCase.data.recommendation) {
        var item = {
          dom:showCase.dom.querySelector('.recommendation .scroll').appendChild(itemTemplate.cloneNode(true)),
          data: itemData
        }
        showCase.items.push(item)
        $private.writesItemData(item)
        $private.addItemEvents(item)
      }
    }

    //writes the text details from item and load src img
    $private.writesItemData = function (item) {
      var image = item.dom.querySelector('img');
      image.src = 'http:' + item.data.imageName
      item.dom.querySelector('.name').textContent = item.data.name.length > 70 ? item.data.name.substring(0, 70) + ' ...' : item.data.name.substring(0, 70);
      item.dom.querySelector('.price span').textContent = item.data.price;
      item.dom.querySelector('.payment-conditions').insertAdjacentHTML('beforeend', '<p>' + item.data.productInfo.paymentConditions + '</p>');
      if (item.data.oldPrice){        
        item.dom.querySelector('.old-price span').textContent = 'de ' + item.data.oldPrice;
      }
    } 

    //add the events from one item dom
    $private.addItemEvents = function (item) {
      item.dom.addEventListener('click', function (event){
        window.open('http:' + item.data.detailUrl);
      }.bind(item));
    }

    $private.addEvents = function (showCase) {      
      $private.nextEvent(showCase);
    }

    $private.nextEvent = function (showCase) {
      showCase.scroll = showCase.dom.querySelector('.show-case .recommendation .scroll')
      showCase.scrollWidth = showCase.scroll.offsetWidth
      showCase.scrollMargin = 0
      showCase.itemWidth = showCase.dom.querySelector('.show-case .recommendation .scroll .body').offsetWidth
      showCase.nextButton = showCase.dom.querySelector('.show-case .recommendation .next')
      showCase.nextButton.addEventListener('click', function (event){
        showCase.scrollMargin += showCase.itemWidth
        showCase.scrollMargin = showCase.scrollMargin / showCase.itemWidth <= 7 ? showCase.scrollMargin : 0
        showCase.scroll.style.marginLeft = '-' + showCase.scrollMargin + 'px'        
      }.bind(showCase));
    }

    return $public;
  }

  App().init();

}());