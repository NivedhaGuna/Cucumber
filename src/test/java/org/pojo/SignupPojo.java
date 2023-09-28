package org.pojo;

import org.helper.LibGlobalHelper;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignupPojo extends LibGlobalHelper {

	public SignupPojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//span[text()='Sign Up Now']")
	private WebElement SignUp;
	
	@FindBy(xpath = "//input[@placeholder='Alex']")
	private WebElement FName;
	
	@FindBy(xpath = "(//input[@type='text'])[2]")
	private WebElement LName;
	
	@FindBy(xpath = "//input[@type='tel']")
	private WebElement PhNo;
	
	@FindBy(xpath = "(//input[@type='text'])[3]")
	private WebElement Email;
	
	@FindBy(xpath = "//input[@type='password']")
	private WebElement Password;

	public WebElement getSignUp() {
		return SignUp;
	}

	public WebElement getFName() {
		return FName;
	}

	public WebElement getLName() {
		return LName;
	}

	public WebElement getPhNo() {
		return PhNo;
	}

	public WebElement getEmail() {
		return Email;
	}

	public WebElement getPassword() {
		return Password;
	}

	
	
}
