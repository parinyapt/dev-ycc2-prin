var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/confirm', function(req, res, next) {
  res.render('confirmOrder', { title: 'Confirm Order' });
});

router.get('/macbook-pro', function(req, res, next) {
  var title = 'MacBook Pro';
  var img = "../images/macbook-clipart-png-macbook-pro-png-transparent-free-download-for-macbook-pro-png-1440_695.png";
  var description = '1.4GHz quad‑core 8th‑generation Intel Core i5 processor, Turbo Boost up to 3.9GHz<br>8GB 2133MHz LPDDR3 memory<br>Retina display with True Tone<br>Intel Iris Plus Graphics 645<br>Two Thunderbolt 3 ports<br>Touch Bar and Touch ID<br>Backlit Keyboard - US English';
  var storage = [{storages: '256 GB SSD Storage'},{storages: '512 GB SSD Storage'},{storages: '1 TB SSD Storage'}];
  var price = "64,900";
  res.render('product', { titleshow: title ,imgshow: img , descriptionshow: description , storageshow: storage , priceshow: price})
});

router.get('/surface-pro-x', function(req, res, next) {
  var title = 'Surface Pro X';
  var img = "../images/surfaceprox1.png";
  var description = 'Microsoft® SQ1™<br>8GB or 16GB LPDDR4x RAM<br>PixelSense™ Display<br>Microsoft® SQ1™ Adreno™ 685 GPU<br>2 x USB-C®<br>1 x Surface Connect port<br>Surface Keyboard connector port<br>1 x nano SIM<br>Compatible with Surface Dial off-screen interaction*<br>Firmware TPM<br>Enterprise-grade protection with Windows Hello face sign-inBacklit';
  var storage = [{storages: '256 GB SSD Storage'},{storages: '512 GB SSD Storage'},{storages: '1 TB SSD Storage'}];
  var price = "64,900";
  res.render('product', { titleshow: title ,imgshow: img , descriptionshow: description , storageshow: storage , priceshow: price})
});

router.get('/swift-7', function(req, res, next) {
  var title = 'Acer Swift 7';
  var img = "../images/swift71.png";
  var description = '1.5GHz Intel Core i7-8500Y (dual-core, 4MB cache, up to 4.2GHz)<br>8GB LPDDR3 RAM<br>Full HD CineCrystal IPS touch display<br>Microsoft® SQ1™ Adreno™ 685 GPU<br>2 x Thunderbolt 3 (USB-C), headset jack<br>Intel Wireless-AC 9260 802.11ac Wi-Fi, Bluetooth';
  var storage = [{storages: '256 GB SSD Storage'},{storages: '512 GB SSD Storage'}];
  var price = "42,900";
  res.render('product', { titleshow: title ,imgshow: img , descriptionshow: description , storageshow: storage , priceshow: price})
});

router.get('/xps', function(req, res, next) {
  var title = 'XPS 13';
  var img = "../images/xps1.png";
  var description = '1.8GHz Intel Core i7-8565U (quad-core, 8MB cache, up to 4.6GHz)<br>16GB 2133MHz DDR3 memory RAM<br>Intel UHD Graphics 620<br>Ultra HD UltraSharp InfinityEdge touch display<br>2 x Thunderbolt 3 (USB-C)<br>1 x USB-C 3.1<br>micro SD card reader<br>headset jack<br>Killer 1435 802.11ac Wi-Fi';
  var storage = [{storages: '256 GB SSD Storage'},{storages: '512 GB SSD Storage'},{storages: '1 TB SSD Storage'}];
  var price = "69,900";
  res.render('product', { titleshow: title ,imgshow: img , descriptionshow: description , storageshow: storage , priceshow: price})
});

router.get('/zenbook-pro', function(req, res, next) {
  var title = 'ZenBook Pro';
  var img = "../images/zenbookpro1.png";
  var description = '2.4GHz Intel Core i9-9980HK (octa-core, 16MB cache, up to 5GHz)<br>32GB DDR4 RAM<br>Nvidia GeForce RTX 2060<br>15.6-inch, OLED Ultra HD, 14-inch Ultra HD touch display<br>1 x Thunderbolt 3<br>2 x USB-C 3.1<br>HDMI 2.0<br>headset jack<br>Intel Wi-Fi 6 with Gig+ performance<br>IR webcam with Windows Hello support';
  var storage = [{storages: '1 TB SSD Storage'}];
  var price = "109,900";
  res.render('product', { titleshow: title ,imgshow: img , descriptionshow: description , storageshow: storage , priceshow: price})
});

module.exports = router;
