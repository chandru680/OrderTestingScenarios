package stepdefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import pagefactory.LoginPF;
import pagefactory.LoginPF;
import pagefactory.viewordersPF;
import sun.rmi.runtime.Log;

/**
 * Created by Jeyachandran on 4/14/2019.
 */
public class Login {

    public static WebDriver driver;
    LoginPF logindriver;
    viewordersPF vorderdriver;


    @Given("^I Launch a web browser$")
    public void BrowserSetup() {
        System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        logindriver = new LoginPF(driver);
    }

    public WebDriver getDriver() {
        return driver;
    }

    @When("^I enter the \"([^\"]*)\" \"([^\"]*)\" and login$")
    public void LoginWeborderApp(String username, String password)
    {
        driver.get("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/");
        driver.manage().window().maximize();
        logindriver.username().sendKeys(username);
        logindriver.password().sendKeys(password);
        logindriver.login().click();
    }

    @Then("^I am logged into the weborders application$")
    public void VerifyLogin () throws InterruptedException {
        Thread.sleep(2000);
        String Weborders = "Web Orders";
        String pageSource = driver.getPageSource();
        boolean isTheTextPresent = driver.getPageSource().contains(Weborders);
        Assert.assertTrue(isTheTextPresent);
    }



    @When("^I Log out of the application$")
    public void Logout() throws InterruptedException {

        driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
        Thread.sleep(3000);
    }

    @And("^I close the Browser$")
    public void CloseBrowser(){
        driver.quit();
    }

}
