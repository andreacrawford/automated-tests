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



driver.get('http://dev.drcloud.com');
driver.manage().window().maximize();
driver.sleep(3000);
driver.findElement(By.className('signup signup-click')).click();
driver.sleep(2000);
driver.findElement(By.id('create-account')).click();
driver.sleep(3000);
driver.findElement(By.id('form-login-firstname')).sendKeys('Random');
driver.findElement(By.id('form-login-lastname')).sendKeys('Autotest');
driver.sleep(1000);
driver.findElement(By.css('#signup-one #form-login-password')).sendKeys('123testtest');
driver.findElement(By.id('form-login-password-verify')).sendKeys('123testtest');

var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = " ";
for(var i=0; i<10; i++) {
	string += chars[Math.floor(Math.random() * chars.length)];
}
var email = string + '@domain.com';

driver.findElement(By.css('#signup-one #form-login-email')).sendKeys(email);
driver.findElement(By.id('create-account-confirm')).click().then(function(element) {
	console.log('User created');
});
driver.sleep(3000);
driver.quit();


