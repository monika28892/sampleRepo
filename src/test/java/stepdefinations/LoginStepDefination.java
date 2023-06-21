package stepdefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

//import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver driver;

	@Given("^user is already on Home Page$")
	public void user_is_already_on_Home_Page() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "C:\\QA\\SeleniumJars\\geckodriver.exe");
		driver = new FirefoxDriver();
		System.out.println("open Home page");
		driver.get("https://www.freecrm.com/");
	}

	@When("^title of Home page is Free CRM$")
	public void title_of_Home_page_is_Free_CRM() throws Throwable {
	    System.out.println("Verify title");
		String actualTitle = driver.getTitle();
		//System.out.println(actualTitle);
		Assert.assertEquals("#1 Free CRM App for every business customer relationship management cloud", actualTitle);
	 }
	
	@Then("^user hover on login button$")
	public void user_hower_on_login_button() throws Throwable {
		 WebElement link = driver.findElement(By.xpath("//span[contains(text(),'Log In')]"));
			Actions builder = new Actions(driver);
			builder.moveToElement(link).build().perform();
			//System.out.println("Hover on login button");
			//Thread.sleep(3000);
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	    driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
	    //Thread.sleep(3000);
	}

	@Then("^user enters into login page$")
	public void user_enters_into_login_page() throws Throwable {
	   String title = driver.getTitle();
	   System.out.println("login page title::"+ title);
	   Assert.assertEquals("Cogmento CRM", title);
	}
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String Email, String Password) throws Throwable {
		driver.findElement(By.name("email")).sendKeys(Email);
		driver.findElement(By.name("password")).sendKeys(Password);
	}
	
	@Then("^user clicks on login link$")
	public void user_clicks_on_login_link() throws Throwable {
	    driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
	    Thread.sleep(3000);
	}
	
	@Then("^user enters into main page$")
	public void user_is_on_main_page() throws Throwable {
		String title = driver.getTitle();
		   System.out.println("main page title::"+ title);
		   Assert.assertEquals("Cogmento CRM", title);
		}
	
	@Then("^user hover on contacts button$")
	public void user_hover_on_contacts_button() throws Throwable {
		WebElement link = driver.findElement(By.xpath("//i[@class='users icon']"));
		Actions builder = new Actions(driver);
		builder.moveToElement(link).build().perform();
		Thread.sleep(3000);
	
	}

	@Then("^user clicks on add icon$")
	public void user_clicks_on_add_icon() throws Throwable {
	    driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@id='main-nav']/div[3]/button[1]")).click();
	    Thread.sleep(3000);
	}

	@Then("^user moves into contact page$")
	public void user_enters_into_contact_page() throws Throwable {
		Thread.sleep(3000);
	}

	@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String Firstname, String Lastname, String Position) throws Throwable {
		WebElement Fname = driver.findElement(By.name("first_name"));
		Fname.click();
		Fname.sendKeys(Firstname);
		driver.findElement(By.name("last_name")).sendKeys(Lastname);
		driver.findElement(By.name("position")).sendKeys(Position);
		Thread.sleep(3000);
	}

	@Then("^user clicks on Save button$")
	public void user_clicks_on_Save_button() throws Throwable {
	    driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	    Thread.sleep(3000);
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}

	}

	
	
