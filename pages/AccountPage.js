
export default class AccountPage{
 
    async goToAccountsPage(){
   

    await page.waitFor(5000)  
    const element = await page.waitForSelector('[ng-reflect-tooltip="Account"]', { visible: true });
    await element.click();
 }

 async validateAccountsPage(){

    await page.waitFor(2000)
    const  accounts = (await page.$x("//*[contains(text(),'Account Plan')]"))
    accounts[0].click()

 }

}