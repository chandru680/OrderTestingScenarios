package pagefactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Jeyachandran on 4/15/2019.
 * This is page factory - containing the web element details of the web elements in order creation page.
 */
public class orderPF {
    WebDriver driver;

    public orderPF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    //Product information
    @FindBy(id = "ctl00_MainContent_fmwOrder_ddlProduct")
    private WebElement product;
    public WebElement product() {
        return product;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtQuantity")
    private WebElement quantity;
    public WebElement quantity() {
        return quantity;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtUnitPrice")
    private WebElement priceperunit;
    public WebElement priceperunit() {
        return quantity;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtDiscount")
    private WebElement discount;
    public WebElement discount() {
        return discount;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtTotal")
    private WebElement total;
    public WebElement total() {
        return total;
    }

    //Address information
    @FindBy(id = "ctl00_MainContent_fmwOrder_txtName")
    private WebElement customerName;
    public WebElement customerName() {
        return customerName;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox2")
    private WebElement streetname;
    public WebElement streetName() {
        return streetname;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox3")
    private WebElement city;
    public WebElement city() {
        return city;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox4")
    private WebElement state;
    public WebElement state() {
        return state;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox5")
    private WebElement zip;
    public WebElement zip() {
        return zip;
    }

    //Payment Information
    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_0")
    private WebElement visa;
    public WebElement cardtype() {
        return visa;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox6")
    private WebElement cardNumber;
    public WebElement cardNumber() {
        return cardNumber;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox1")
    private WebElement expiryDate;
    public WebElement expiryDate() {
        return expiryDate;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_InsertButton")
    private WebElement process;
    public WebElement process() {
        return process;
    }

    @FindBy(id = "ctl00_MainContent_fmwOrder_UpdateButton")
    private WebElement updateorder;
    public WebElement updateorder() {
        return updateorder;
    }

    @FindBy(xpath = "//a[contains(text(),'View all orders')]")
    private WebElement vieworders;
    public WebElement vieworders() {
        return vieworders;
    }


}
