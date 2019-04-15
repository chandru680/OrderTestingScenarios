package pagefactory;

import cucumber.api.java.en.And;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Jeyachandran on 4/13/2019.
 * This is th apage factory for all the web elements in the view orders page.
 */
public class viewordersPF {


    WebDriver driver;

    public viewordersPF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//a[contains(text(),'Order')]")
    private WebElement order;
    public WebElement order() {
        return order;
    }

    @FindBy(id = "ctl00_MainContent_btnDelete")
    private WebElement deleteorder;
    public WebElement deleteorder() {
        return deleteorder;
    }

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    private WebElement logout;
    public WebElement logout() {
        return logout;
    }






}
