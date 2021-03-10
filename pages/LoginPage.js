import {email,password} from "../config";

export default class LoginPage{

    async login(){
        await page.setDefaultNavigationTimeout(200000)
        await page.goto('https://stg-ai-dashboard.intra.rakuten-it.com/login')
       // await page.goto('https://ai-dashboard.rakuten-it.com/login')
       
        await page.waitForSelector('button[class="btn btn-primary btn-block mt-3"]')
        await page.click('button[class="btn btn-primary btn-block mt-3"]')
        await page.waitForSelector("#i0116")
        await page.type("#i0116",email)
        await page.waitForSelector("#idSIButton9")
        await page.click("#idSIButton9")
        await page.waitForSelector("#okta-signin-username")
        await page.type("#okta-signin-username",email)
        await page.waitForSelector('input[class="button button-primary"]')
        await page.click('input[class="button button-primary"]')
        await page.waitForSelector("#input9")
        await page.type("#input9",password)
        await page.waitForSelector('input[class="button button-primary"]')
        await page.click('input[class="button button-primary"]')
       
        await page.waitForSelector("#idSIButton9")
        await page.click("#idSIButton9")
    }

    async loginProd(){
        await page.setDefaultNavigationTimeout(200000)
     
        await page.goto('https://ai-dashboard.intra.rakuten-it.com/login')
        await page.waitForSelector('button[class="btn btn-primary btn-block mt-3"]')
        await page.click('button[class="btn btn-primary btn-block mt-3"]')
        await page.waitForSelector("#i0116")
        await page.type("#i0116",email)
        await page.waitForSelector("#idSIButton9")
        await page.click("#idSIButton9")
        await page.waitForSelector("#okta-signin-username")
        await page.type("#okta-signin-username",email)
        await page.waitForSelector('input[class="button button-primary"]')
        await page.click('input[class="button button-primary"]')
        await page.waitForSelector("#input9")
        await page.type("#input9",password)
        await page.waitForSelector('input[class="button button-primary"]')
        await page.click('input[class="button button-primary"]')
        await page.waitForSelector("#idSIButton9")
        await page.click("#idSIButton9")
    }
    async reloadPage(){
        await page.waitFor(10000)
        await page.reload()
    }
}