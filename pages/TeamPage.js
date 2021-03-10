import {team,team1,email,role,role1,invitee,profitcode,serviceid,edited_profitcode,edited_serviceid} from "../config";
const expect=require('chai').expect

export default class TeamPage{
    async teamcreation(){
    await page.waitForSelector('[class="btn btn-primary"]',{visible:true})
    await page.click('[class="btn btn-primary"]')
    await page.waitForSelector("#input-name")
    await page.type("#input-name",team1)
    await page.type("#input-profit-code",profitcode)
    await page.type("#input-service-id",serviceid)
    await page.type("#input-email",email)
    await page.waitForSelector('[class="btn btn-primary"]',{visible:true})
    await page.click('[class="btn btn-primary"]')
    await page.waitFor(5000)
    await page.waitForSelector('[class="form-control border-left-0 border-secondary rounded-right"]')
    await page.type('[class="form-control border-left-0 border-secondary rounded-right"]',team1)
    const text=await page.$eval('[class="ng-star-inserted"]',element => element.textContent)
    expect(text).to.be.a('string',team1)
    }

    async inviteMember(){
        await page.setDefaultNavigationTimeout(50000)
        await page.waitForSelector('[class="btn btn-warning ng-star-inserted"]',{visible:true})
        await page.click('[class="btn btn-warning ng-star-inserted"]')  
        await page.waitForSelector('div[class="content-header"]')
        await page.click('div[class="content-header"]')
        await page.waitFor(4000)
        await page.waitForSelector('#input-email')
        await page.waitForXPath('(//*[@id="input-email"])[2]');
        const text=(await page.$x('(//*[@id="input-email"])[2]'))
        text[0].type(invitee);
        await page.waitFor(4000)
        await page.waitForSelector('[class="form-control mr-3 ng-untouched ng-pristine ng-invalid"]',{visible:true})
        await page.select('[class="form-control mr-3 ng-untouched ng-pristine ng-invalid"]',role)
        await page.waitFor(1000)
        await page.waitForSelector('[class="btn btn-primary"]',{enabled:true})
        await page.setDefaultNavigationTimeout(10000)
        await page.click('[class="btn btn-primary"]')
        await page.keyboard.press('Enter');
    }

    async changeRoleMember(){
    
        await page.waitFor(25000)
        await page.evaluate(() => {
        const uiElement = document.querySelector("#rakuten-ai-dashboard-sdk-template > div > div > app-account > app-team > div > div.content-body > div:nth-child(2) > div > div > ngx-datatable > div > datatable-body > datatable-selection > datatable-scroller > datatable-row-wrapper:nth-child(1) > datatable-body-row > div.datatable-row-center.datatable-row-group.ng-star-inserted > datatable-body-cell.datatable-body-cell.justify-content-end.sort-active.ng-star-inserted > div > button");
        uiElement.click();
            }); 
        await page.waitForSelector('[class="form-control mr-3 ng-untouched ng-pristine ng-valid"]',{visible:true})
        await page.select('[class="form-control mr-3 ng-untouched ng-pristine ng-valid"]',role1)
        await page.waitForSelector('[class="btn btn-primary ng-star-inserted"]',{visible:true})
        await page.click('[class="btn btn-primary ng-star-inserted"]')
    }

    async editTeam(){
        await page.setDefaultNavigationTimeout(25000)
        await page.waitForSelector("#btn-edit-team-detail")
        await page.click("#btn-edit-team-detail")
        await page.waitFor(4000)
        await page.click("#input-profit-code", {clickCount: 3})
        await page.type("#input-profit-code",edited_profitcode)
        await page.waitFor(4000)
        await page.click("#input-service-id", {clickCount: 3})
        await page.type("#input-service-id",edited_serviceid)
        await page.waitFor(1000)
        await page.waitForSelector('[class="btn btn-primary ng-star-inserted"]')
        await page.click('[class="btn btn-primary ng-star-inserted"]')
    }

    async teamlist(){
        await page.waitFor(5000)
        await page.waitForSelector('input[placeholder="search"]')
       // await page.click('input[placeholder="search"]')
        await page.waitFor(5000)
       // await page.type('input[placeholder="search"]',team1)
    }



    async deleteTeam(){
        await page.waitFor(1000)
        await page.waitForSelector('[class="btn btn-danger ng-star-inserted"]')
        await page.click('[class="btn btn-danger ng-star-inserted"]')
        await page.waitForSelector('[class="ngx-cool-dialog__ok-btn"]')
        await page.click('[class="ngx-cool-dialog__ok-btn"]')
    }

    async teamSearch(){
        await page.waitFor(10000)
        await page.waitForSelector('#rakuten-ai-dashboard-sdk-template > div > rakuten-ai-dashboard-sdk-template-sidebar > nav > div > header > ul > li > a')
        await page.evaluate(() => {
        const uiElement = document.querySelector('#rakuten-ai-dashboard-sdk-template > div > rakuten-ai-dashboard-sdk-template-sidebar > nav > div > header > ul > li > a');
        uiElement.click();
        })
    
       await page.waitFor(2000)
        await page.waitForSelector('input[placeholder="Search"]')
        await page.type('input[placeholder="Search"]',team)
        
       await page.waitFor(2000)
       await page.evaluate(() => {
        const uiElement1 = document.querySelector("body > modal-container > div > div > rakuten-ai-dashboard-sdk-template-sidebar-modal-teams > div > div.modal-body > div > div.table-body > div.table-column.teams > div:nth-child(1) > button > span")
        uiElement1.click();
        })
    

        await page.evaluate(()=>{
          const link=document.querySelector("body > modal-container > div > div > rakuten-ai-dashboard-sdk-template-sidebar-modal-teams > div > div.modal-body > div > div.table-body > div.table-column.applications > div > a")
          link.click()
        })
 
    }
    async gotoTeams(){
        const element2 = await page.waitForSelector('[ng-reflect-tooltip="Teams"]', { visible: true });
        await element2.click();
    }
}