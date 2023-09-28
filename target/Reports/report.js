$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFile/Signup.feature");
formatter.feature({
  "name": "To validate the login functionality of the foodee application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the signup functions of the foodee with invalid customer details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should maximize the screen and click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter the invalid name \"\u003cFname\u003e\" and invalid email id \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should click the continue button",
  "keyword": "And "
});
formatter.step({
  "name": "User should give the delivery address",
  "keyword": "And "
});
formatter.step({
  "name": "User should navigate to invalid credential page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Fname",
        "Email"
      ]
    },
    {
      "cells": [
        "Nivedha",
        "g.nive@gmail.com"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "Foodeesteps.userShouldLaunchTheBrowserAndLoadTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the signup functions of the foodee with invalid customer details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should maximize the screen and click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Foodeesteps.userShouldMaximizeTheScreenAndClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter the invalid name \"Nivedha\" and invalid email id \"g.nive@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "Foodeesteps.userShouldEnterTheInvalidNameAndInvalidEmailId(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Foodeesteps.userShouldClickTheContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should give the delivery address",
  "keyword": "And "
});
formatter.match({
  "location": "Foodeesteps.userShouldGiveTheDeliveryAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "Foodeesteps.userShouldNavigateToInvalidCredentialPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "Foodeesteps.userShouldLaunchTheBrowserAndLoadTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functionality of the foodee",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should enter the invalid email and invalid password",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "g.nive06@gmail.com",
        "12345678"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Foodeesteps.userShouldEnterTheInvalidEmailAndInvalidPassword(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Foodeesteps.userShouldClickTheContinueButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //button//span[text()\u003d\u0027Continue\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.1\u0027, revision: \u0027eb2032df7f\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.7\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [786211ae-2db0-46a1-892c-11d7f3615408, findElement {using\u003dxpath, value\u003d//button//span[text()\u003d\u0027Continue\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 117.0, moz:accessibilityChecks: false, moz:buildID: 20230824132758, moz:debuggerAddress: 127.0.0.1:23773, moz:geckodriverVersion: 0.33.0, moz:headless: false, moz:platformVersion: 10.0, moz:processID: 13196, moz:profile: C:\\Users\\sendo\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:webdriverClick: true, moz:windowless: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://127.0.0.1:23773/devtoo..., se:cdpVersion: 85.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 786211ae-2db0-46a1-892c-11d7f3615408\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.steps.Foodeesteps.userShouldClickTheContinueButton(Foodeesteps.java:39)\r\n\tat ✽.User should click the continue button(file:src/test/resources/FeatureFile/Signup.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should navigate to invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "Foodeesteps.userShouldNavigateToInvalidCredentialPage()"
});
formatter.result({
  "status": "skipped"
});
});