// written by Andrea Crawford 2-14-2017

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


var url = 'https://suffolkstaging.profits4purpose.com/login/';

driver.get(url);
driver.sleep(3000);
driver.findElement(By.id('email_input')).sendKeys(secretKey);
driver.findElement(By.id('password_input')).sendKeys(secretKey);
driver.wait(until.elementLocated(By.id('login_button')), 10000)
.then(function(elm) {
    elm.click();
});
driver.sleep(4000);
for(var i=0; i<100; i++) {
  driver.wait(until.elementLocated(By.id('accountselect_rs')), 10000)
  .then(function(elm) {
      elm.click();
  });
  driver.sleep(6000);
  driver.findElement(By.id('usernameInput')).sendKeys("Auto"+i + " Test");
  driver.sleep(5000);
  driver.findElement(By.css('.userRow')).click();
  driver.sleep(12000);
  driver.get('https://suffolkstaging.profits4purpose.com/event/52632');
  driver.sleep(10000);
  driver.executeScript("$('.rsvp_button_container #background_container').click();");
  driver.sleep(8000);
  driver.executeScript("$('input[type=checkbox]').click();");
  driver.sleep(10000);
  driver.wait(until.elementLocated(By.css('.el-dialog #background_container')), 10000)
  .then(function(elm) {
      elm.click();
      console.log('RSVP added!');
  });
  driver.sleep(40000);
};
driver.quit(); 

