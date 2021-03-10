const expect=require('chai').expect
export default class KpiPage{

    async clickKPI(){
        await page.waitFor(1000)
        const element4 = await page.waitForSelector('[ng-reflect-tooltip="KPI"]', { visible: true });
        await element4.click();
    }

    async validateKPIValues(){
        await page.waitFor(1000)
        await page.waitForSelector("#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-mongo-analytics > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div:nth-child(2) > h3")
        
        
        const text=await page.$eval("#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-mongo-analytics > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div:nth-child(2) > h3",element => element.textContent)
        expect(text).to.be.a('string',"1 View")
        await page.waitForSelector("#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-mongo-analytics > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > h3")
        const text1=await page.$eval("#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-mongo-analytics > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div:nth-child(2) > h3",element => element.textContent)
        expect(text1).to.be.a('string',"1 Open")
        await page.waitForSelector("#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-mongo-analytics > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div:nth-child(2) > h3")
        const text2=await page.$eval("#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-mongo-analytics > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > div:nth-child(2) > h3",element => element.textContent)
        expect(text2).to.be.a('string',"1 Session")
    }

}