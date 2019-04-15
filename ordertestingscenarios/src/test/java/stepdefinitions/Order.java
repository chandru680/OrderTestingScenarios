package stepdefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pagefactory.LoginPF;
import pagefactory.orderPF;
import pagefactory.viewordersPF;

import java.util.List;

/**
 * Created by Jeyachandran on 4/14/2019.
 */
public class Order {

    private Login login;
    WebDriver driver;
    viewordersPF vorderdriver;
    orderPF orderdriver;

    public Order (Login login) {
        this.login = login;
        driver = login.getDriver();
        vorderdriver = new viewordersPF(driver);
        orderdriver = new orderPF(driver);
    }


    @Given("^I navigate to order creation page$")
    public void NavigateToOrderCreationPage()
    {
        vorderdriver.order().click();
    }


    @And("^Enter the Product information \"([^\"]*)\" \"([^\"]*)\"$")
    public void EnterProductInformation(String product, String Quantity) throws InterruptedException {

        Select productdpdwn = new Select(orderdriver.product());
        productdpdwn.selectByVisibleText(product);
        Thread.sleep(1000);
        orderdriver.quantity().clear();
        orderdriver.quantity().sendKeys(Quantity);
    }

    @And("^Enter the Address information \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void EnterAddrInfo(String CustomerName, String Street, String City,String State, String Zip)
     {
         orderdriver.customerName().sendKeys(CustomerName);
         orderdriver.streetName().sendKeys(Street);
         orderdriver.city().sendKeys(City);
         orderdriver.state().sendKeys(State);
         orderdriver.zip().sendKeys(Zip);

    }

    @And("^Enter the payment information \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void EnterPaymentInfo(String Card, String cardnbr, String expirydte )
    {
        String visatype = "visa";
        if (Card.contains(visatype) ){
            orderdriver.cardtype().click();
        }
        orderdriver.cardNumber().sendKeys(cardnbr);
        orderdriver.expiryDate().sendKeys(expirydte);

    }

    @Then("^I submit the order$")
    public void submitorder(){
        orderdriver.process().click();
        orderdriver.vieworders().click();
    }

    @When("I select the order to be edited \"([^\"]*)\"")
    public void EditOrder (String CustomerName) throws InterruptedException
    {
        Thread.sleep(3000);
        List<WebElement> rowCount=driver.findElements(By.xpath("//table[@id=\"ctl00_MainContent_orderGrid\"]/tbody/tr"));
        int irowcount = rowCount.size();
        rowiteration:
        for (int i = 2; i <= irowcount; i++) {

            String orderval = driver.findElement(By.xpath("//table[@id=\"ctl00_MainContent_orderGrid\"]/tbody/tr["+i+"]/td[2]")).getText();

            if (orderval.contains(CustomerName))
            {
                driver.findElement(By.xpath("//table[@id=\"ctl00_MainContent_orderGrid\"]/tbody/tr["+i+"]/td[13]/input[contains(@onclick, 'editOrder')]")).click();
                break rowiteration;
            }
            
        }

    }

    @Then("^I update the order$")
    public void updateorder()
    {
        orderdriver.updateorder().click();
    }


    @When("^I select the order to be deleted \"([^\"]*)\" and delete$")
    public void deleteorder(String CustomerName) throws InterruptedException {
        Thread.sleep(3000);
        List<WebElement> rowCount=driver.findElements(By.xpath("//table[@id=\"ctl00_MainContent_orderGrid\"]/tbody/tr"));
        int irowcount = rowCount.size();
        rowiteration:
        for (int i = 2; i <= irowcount; i++) {
            String orderval = driver.findElement(By.xpath("//table[@id=\"ctl00_MainContent_orderGrid\"]/tbody/tr["+i+"]/td[2]")).getText();
            if (orderval.contains(CustomerName))
            {
                driver.findElement(By.xpath("//table[@id=\"ctl00_MainContent_orderGrid\"]/tbody/tr["+i+"]/td[1]/input[contains(@id, 'OrderSelector')]")).click();
                break rowiteration;
            }

        }

        vorderdriver.deleteorder().click();
        Thread.sleep(2000);
    }

}


