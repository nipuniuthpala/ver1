import {team} from "../config";
const expect=require('chai').expect

export default class BotPage{

    async createBot(){
        await page.setDefaultNavigationTimeout(50000)
  
        await page.waitFor(30000)
        const bot=(await page.$x('//*[contains(text(),"BOT NAME")]',{ visible: true }))
        bot[0].click()
        bot[0].type(team+"team")    
        await page.waitForSelector("#input-target-user")
        await page.select("#input-target-user","Rakuten Staff")
        await page.waitForSelector("#input-purpose")
        await page.select("#input-purpose","Customer Service & Support")
        await page.waitForSelector('[class="btn btn-primary"]')
        await page.click('[class="btn btn-primary"]')
    }
    async verifyBot(){
        await page.setDefaultNavigationTimeout(50000)
      
        const element = await page.waitForSelector('[ng-reflect-tooltip="View All Bot"]', { visible: true });
        await element.click();

   
   
  
    }

    async viewBot(){
        await page.waitFor(20000)
        const element0= await page.waitForSelector('[ng-reflect-tooltip="View All Bot"]', { visible: true });
        await element0.click();
    }

    async verifyBotIsDeployed(){
        await page.waitFor(60000)
        await page.waitForSelector('#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-bots > div > div > div > div:nth-child(2) > div > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(7) > div')
        const text=await page.$eval('#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-bots > div > div > div > div:nth-child(2) > div > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(7) > div',element => element.textContent)
        expect(text).to.be.a('string',"Deployed")
    }

    async deleteBot(){
        await page.waitFor(5000)
        await page.waitForSelector('[class="btn btn-link ng-star-inserted"]')
        await page.click('[class="btn btn-link ng-star-inserted"]')
        const element4= await page.waitForSelector('[class="icon fas fa-list"]', { visible: true });
        await element4.click();
        await page.waitForSelector('button[class="btn btn-danger ng-star-inserted"]')
        await page.click('button[class="btn btn-danger ng-star-inserted"]')
        await page.waitForSelector('button[class="ngx-cool-dialog__ok-btn"]')
        await page.click('button[class="ngx-cool-dialog__ok-btn"]')
        await page.waitForSelector('#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-bots > div > div > div > div:nth-child(2) > div > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(7) > div')
        const text=await page.$eval('#rakuten-ai-dashboard-sdk-template > div > div > app-ai-answer > app-bots > div > div > div > div:nth-child(2) > div > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell:nth-child(7) > div',element => element.textContent)
        expect(text).to.be.a('string',"deleted")
    }
}