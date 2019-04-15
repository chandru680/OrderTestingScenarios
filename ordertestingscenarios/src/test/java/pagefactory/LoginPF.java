package pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Jeyachandran on 4/15/2019.
 * This is the page factory containing the web elements in the login page
 */
public class LoginPF {
    WebDriver driver;

    public LoginPF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//input[contains(@id,'username')]")
    private WebElement username;
    public WebElement username() {
        return username;
    }

    @FindBy(id = "ctl00_MainContent_password")
    private WebElement password;
    public WebElement password() {
        return password;
    }

    @FindBy(name = "ctl00$MainContent$login_button")
    private WebElement login;
    public WebElement login() {
        return login;
    }

}
