//package stepdefinations;
//
//import java.util.List;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class DealsStepDefination {
//	
//	WebDriver driver;
//
//	@Given("^user is already on Home Page$")
//	public void user_is_already_on_Home_Page() throws Throwable {
//		System.setProperty("webdriver.gecko.driver", "C:\\QA\\SeleniumJars\\geckodriver.exe");
//		driver = new FirefoxDriver();
//		System.out.println("open Home page");
//		driver.get("https://www.freecrm.com/");
//	}
//
//	@When("^title of Home page is Free CRM$")
//	public void title_of_Home_page_is_Free_CRM() throws Throwable {
//	    System.out.println("Verify title");
//		String actualTitle = driver.getTitle();
//		//System.out.println(actualTitle);
//		Assert.assertEquals("#1 Free CRM App for every business customer relationship management cloud", actualTitle);
//	 }
//	
//	@Then("^user hover on login button$")
//	public void user_hower_on_login_button() throws Throwable {
//		 WebElement link = driver.findElement(By.xpath("//span[contains(text(),'Log In')]"));
//			Actions builder = new Actions(driver);
//			builder.moveToElement(link).build().perform();
//			//System.out.println("Hover on login button");
//			//Thread.sleep(3000);
//	}
//
//	@Then("^user clicks on login button$")
//	public void user_click_on_login_button() throws Throwable {
//	    //System.out.println("Click on Login button");
//	    //driver.findElement(By.xpath("//a[text()='Log In')]")).click();
//	    driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
//	    //Thread.sleep(3000);
//	}
//
//	@Then("^user enters into login page$")
//	public void user_enters_into_login_page() throws Throwable {
//	   String title = driver.getTitle();
//	   System.out.println("login page title::"+ title);
//	   Assert.assertEquals("Cogmento CRM", title);
//	}
//	
//	@Then("^user enters Email and Password$")
//	public void user_enters_Email_and_Password(DataTable Credentials) throws Throwable {
//		List<List<String>> data = Credentials.raw();
//		driver.findElement(By.name("Firstname")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("last_name")).sendKeys(data.get(0).get(1));
//	}
//	
//	@Then("^user clicks on login link$")
//	public void user_clicks_on_login_link() throws Throwable {
//	    driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
//	    Thread.sleep(3000);
//	}
//	
//	@Then("^user enters into main page$")
//	public void user_is_on_main_page() throws Throwable {
//		String title = driver.getTitle();
//		   System.out.println("main page title::"+ title);
//		   Assert.assertEquals("Cogmento CRM", title);
//		}
//	
//	@Then("^user hover on deals button$")
//	public void user_hover_on_deals_button() throws Throwable {
//	   driver.findElement(By.xpath("//i[@class='money icon']"));
//	}
//
//	@Then("^user clicks on add icon$")
//	public void user_clicks_on_add_icon() throws Throwable {
//	    driver.findElement(By.xpath("//body/div[@id='ui']/div[@class='ui fluid container']/div[@id='main-nav']/div[5]/button[1]")).click();
//	    Thread.sleep(3000);
//	}
//	
//	@Then("^user moves into deal page$")
//	public void user_moves_into_deal_page() throws Throwable {
//	}
//
//	@Then("^user enters deal details$")
//	public void user_enters_deal_details(DataTable dealData) throws Throwable {
//		List<List<String>> dealValues = dealData.raw();
//		WebElement Title = driver.findElement(By.name("title"));
//		Title.click();
//		Title.sendKeys(dealValues.get(0).get(0));
//		driver.findElement(By.name("amount")).sendKeys(dealValues.get(0).get(1));
//		driver.findElement(By.name("probability")).sendKeys(dealValues.get(0).get(2));
//		driver.findElement(By.name("commission")).sendKeys(dealValues.get(0).get(3));
//	}
//	
//	@Then("^user clicks on Save button$")
//	public void user_clicks_on_Save_button() throws Throwable {
//	    driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
//	    Thread.sleep(3000);
//	}
//
//	@Then("^close the browser$")
//	public void close_the_browser() throws Throwable {
//	    driver.quit();
//	}
//
//}
