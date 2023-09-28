package org.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.SignupPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Foodeesteps extends SignupPojo {

	@Given("User should launch the browser and load the url")
	public void userShouldLaunchTheBrowserAndLoadTheUrl() {
	    openFirefox();
	    launchUrl("https://www.food.ee/toronto/");
	}

	@Given("User should maximize the screen and click the login button")
	public void userShouldMaximizeTheScreenAndClickTheLoginButton() {
	    maxWindow();
	    driver.findElement(By.xpath("//a[text()='Login']")).click();
	    driver.findElement(By.xpath("//span[text()='Sign Up Now']")).click();
	}
	
	@When("User should enter the invalid name {string} and invalid email id {string}")
	public void userShouldEnterTheInvalidNameAndInvalidEmailId(String s1, String s2) {
	    SignupPojo s = new SignupPojo();
	    s.getFName().sendKeys(s1);
	    s.getLName().sendKeys("Gee");
	    s.getPhNo().sendKeys("2012345678");
	    s.getEmail().sendKeys(s2);
	    s.getPassword().sendKeys("12345678");
	}
	
	@When("User should click the continue button")
	public void userShouldClickTheContinueButton() {
	    driver.findElement(By.xpath("//button//span[text()='Continue']")).click();
	}

	@When("User should give the delivery address")
	public void userShouldGiveTheDeliveryAddress() {
	    driver.findElement(By.xpath("(//input[@type='text'])[2]")).sendKeys("45 E 45th St, New York, NY 10017, USA");
	    driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@Then("User should navigate to invalid credential page")
	public void userShouldNavigateToInvalidCredentialPage() {
	    String url = fetchUrl();
	    Assert.assertTrue("Verify credential", url.contains("onboarding"));
		System.out.println("vanity-url - has already been taken");
	    
	}

	@When("User should enter the invalid email and invalid password")
	public void userShouldEnterTheInvalidEmailAndInvalidPassword(io.cucumber.datatable.DataTable d) {
	  
		driver.findElement(By.xpath("//a[text()='Login']")).click();
		WebElement email = driver.findElement(By.xpath("//input[@type='email']"));
	   fillTextbox(email, d.asList().get(2));
	   
	   WebElement passwrd = driver.findElement(By.xpath("//input[@type='password']"));
	   fillTextbox(passwrd, d.asList().get(3));
	   driver.findElement(By.xpath("//span[text()='Login']")).click();
	   
	   
	}


}
