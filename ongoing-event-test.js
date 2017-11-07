// written by Andrea Crawford 6-23-2017

var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;


var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

var urls = ["https://esteelauderbeta.profits4purpose.com", "https://dukebeta.profits4purpose.com", "https://suffolkstaging.profits4purpose.com/login/", "https://emergentstaging.profits4purpose.com/login/", "https://give.test.viasat.com/login/", "https://goprostaging.profits4purpose.com/", "https://hinesstaging.profits4purpose.com/", "https://kilpatrickstaging.profits4purpose.com", "https://merckgroupbeta.profits4purpose.com", "https://demostaging.profits4purpose.com"];
for(i=0; i<urls.length; i++) {
  var url =  urls[i];

  driver.get(url);
  driver.sleep(4000);
  driver.findElement(By.id('email_input')).sendKeys(secretKey);
  driver.findElement(By.id('password_input')).sendKeys(secretKey);
  driver.wait(until.elementLocated(By.id('login_button')), 10000)
    .then(function(elm) {
      elm.click();
  });
  driver.sleep(4000);
  driver.wait(until.elementLocated(By.id('vol_rs')), 30000)
  .then(function(elm) {
      elm.click();
  });
  driver.sleep(6000);
  driver.wait(until.elementLocated(By.id('background_container')), 10000)
    .then(function(elm) {
      elm.click();
  });
  driver.sleep(4000);
  driver.findElement(By.css('.text_input')).sendKeys('Automated Test Event\tThis description is brief');
  driver.findElement(By.css('.note-editable')).sendKeys('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.');
  driver.findElement(By.css('.upload_file_field')).sendKeys('/Users/andrea/Documents/Code/selenium/ice.jpg');
  driver.sleep(50000);
  driver.findElement(By.css('.action_button .event_button')).click();
  driver.wait(until.elementLocated(By.id('1')), 10000)
    .then(function(elm) {
      elm.click();
  });
  driver.findElement(By.css('.input')).sendKeys('123 Main St\tPost Falls\tID\t83854');
  driver.findElement(By.css('.event_button:nth-child(1)')).click();
};
driver.quit();

