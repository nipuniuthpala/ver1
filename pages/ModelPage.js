import {entity,modelname,intent,intent2,question,answer,example1,example2,example3,example4,example5,example6} from "../config";
const expect=require('chai').expect

export default class ModelPage{

    async clickModelPage(){
        await page.waitFor(5000)
        const element3 = await page.waitForSelector('[ng-reflect-tooltip="Model"]', { visible: true });
        await element3.click();  
    }

    async importModel(){
        await page.waitFor(5000)
        await page.waitForSelector('[class="btn btn-primary"]')
        await page.click('[class="btn btn-primary"]')
        
        const model = (await page.$x("//span[contains(text(),'Import Model')]"));
        model[0].click()

        await page.waitForSelector('input[type=file]');
        await page.waitFor(1000);
    
        const inputUploadHandle = await page.$('input[type=file]');
    
        let fileToUpload = 'test-model.json';
   
        inputUploadHandle.uploadFile(fileToUpload);

         await page.waitForSelector('[class="ng-star-inserted"]')
         const text=await page.$eval('[class="ng-star-inserted"]',element => element.textContent)
         expect(text).to.be.a('string',"Felix_V5.1")
    }

    async deployModelTostaging(){
        await page.waitForSelector('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.click('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.waitFor(7000)
        const  publishbtn = (await page.$x('//button[contains(text(),"Publish to Staging")]'))
        publishbtn[0].click()
        await page.waitForSelector('button[class="ngx-cool-dialog__ok-btn"]')
        await page.click('button[class="ngx-cool-dialog__ok-btn"]')
    }

    async createModel(){
        await page.waitFor(3000)
        await page.waitForSelector('[class="btn btn-primary"]')
        await page.click('[class="btn btn-primary"]')
        
        const model = (await page.$x("//span[contains(text(), 'Create Model')]"));
        model[0].click()
        await page.waitFor(6000)
        await page.waitForSelector('#input-name')
        await page.type('#input-name',modelname)
        await page.waitForSelector('[class="btn btn-primary save-btn ng-star-inserted"]')
        await page.click('[class="btn btn-primary save-btn ng-star-inserted"]')
    }

    async editModel(){
        await page.waitFor(15000)
    
      await page.waitForSelector('button[class="btn btn-dropdown-toggle bg-transparent"]')
      await page.click('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.waitFor(6000)
        const  editbtn = (await page.$x('//button[contains(text(),"Edit")]'))
        editbtn[0].click()
        await page.waitFor(5000)
        const  entitybtn = (await page.$x('//span[contains(text(),"Entity")]'))
        entitybtn[0].click()
        await page.waitForSelector('[class="btn btn-primary save-btn"]')
        await page.click('[class="btn btn-primary save-btn"]')
        await page.waitForSelector('#form-entity')
        await page.type('#form-entity',entity)
        await page.waitForSelector('[class="btn btn-primary mt-2"]')
        await page.click('[class="btn btn-primary mt-2"]')
     
    }


    async createQAList(){
        await page.waitFor(15000)
    
        const  entitybtn = (await page.$x('//span[contains(text(),"Q&A List")]'))
        entitybtn[0].click()
        await page.waitForSelector('[class="btn btn-primary save-btn"]')
        await page.click('[class="btn btn-primary save-btn"]')
        await page.waitForSelector('#form-intent')
        await page.type('#form-intent',intent)
        await page.waitForSelector('#form-question')
        await page.type('#form-question',question)
        await page.waitForSelector('#form-answer')
        await page.type('#form-answer',answer)
        await page.waitFor(2000)
        await page.waitForSelector('#form-example')
        await page.type('#form-example',example1)
        await page.keyboard.press('Enter');
        await page.waitFor(2000)
        await page.waitForSelector('#form-example')
        await page.type('#form-example',example2)
        await page.keyboard.press('Enter');
        await page.waitFor(2000)
        await page.waitForSelector('#form-example')
        await page.type('#form-example',example3)
        await page.keyboard.press('Enter');
        await page.waitForSelector('[class="btn btn-primary mt-2"]')
        await page.click('[class="btn btn-primary mt-2"]')
    
    }

    async deleteModel(){
        await page.waitFor(10000)
     
       await page.waitForSelector('button[class="btn btn-dropdown-toggle bg-transparent"]')
       await page.click('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.waitFor(5000)
        const  deletebtn = (await page.$x('//button[contains(text(),"Delete")]'))
        deletebtn[0].click()
        await page.waitFor(2000)
        await page.waitForSelector('button[class="ngx-cool-dialog__ok-btn"]')
        await page.click('button[class="ngx-cool-dialog__ok-btn"]')
    }



    async createQAMatrix(){
        await page.waitFor(15000)
    
        const  entitybtn = (await page.$x('//span[contains(text(),"Q&A Matrix")]'))
        entitybtn[0].click()
        await page.waitForSelector('[class="btn btn-primary m-2 d-inline-block"]')
        await page.click('[class="btn btn-primary m-2 d-inline-block"]')
      
        await page.waitForSelector("#qamatrix-fileupload")

        await page.waitForSelector('input[type=file]');
        await page.waitFor(1000);
    
        const inputUploadHandle = await page.$('input[type=file]');
    
        let fileToUpload = 'QAMatrix.tsv';
   
        inputUploadHandle.uploadFile(fileToUpload);

        await page.waitFor(5000)
        await page.waitForSelector('button[class="btn btn-primary save-btn ng-star-inserted"]')
        await page.click('button[class="btn btn-primary save-btn ng-star-inserted"]')
        
    }

    async exportMatrix(){
        await page.waitFor(20000)
        await page.waitForSelector('i[class="fa fa-download"]')
        await page.click('i[class="fa fa-download"]')
  
    }

    async createIntent(){
        await page.waitFor(15000)
    
        const  entitybtn = (await page.$x('//span[contains(text(),"Intent")]'))
        entitybtn[0].click()
        await page.waitForSelector('button[class="btn btn-primary save-btn"]')
        await page.click('button[class="btn btn-primary save-btn"]')
        await page.waitForSelector("#form-intent")
        await page.click("#form-intent")
        await page.type("#form-intent",intent2)
        await page.waitFor(2000)
        await page.waitForSelector('#form-example')
        await page.type('#form-example',example4)
        await page.keyboard.press('Enter');
        await page.waitFor(2000)
        await page.waitForSelector('#form-example')
        await page.type('#form-example',example5)
        await page.keyboard.press('Enter');
        await page.waitFor(2000)
        await page.waitForSelector('#form-example')
        await page.type('#form-example',example6)
        await page.keyboard.press('Enter');
        await page.waitForSelector('button[class="btn btn-primary mt-2"]')
        await page.click('button[class="btn btn-primary mt-2"]')
      
    }


    async deleteQAList(){
        await page.waitFor(15000)
    
        const  entitybtn = (await page.$x('//span[contains(text(),"Q&A List")]'))
        entitybtn[0].click()
        await page.waitFor(7000)
        await page.waitForSelector('button[class="btn btn-danger ng-star-inserted"]')
        await page.click('button[class="btn btn-danger ng-star-inserted"]')
        await page.waitFor(5000)
        await page.click('button[class="ngx-cool-dialog__ok-btn"]')
        await page.waitForSelector('button[class="ngx-cool-dialog__ok-btn"]')
        await page.waitFor(2000)
        await page.waitForSelector('[class="btn pl-3"]')
        await page.click('[class="btn pl-3"]')
    }


    async deleteModel(){
        await page.waitFor(10000)
     
       await page.waitForSelector('button[class="btn btn-dropdown-toggle bg-transparent"]')
       await page.click('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.waitFor(5000)
        const  deletebtn = (await page.$x('//button[contains(text(),"Delete")]'))
        deletebtn[0].click()
        await page.waitFor(2000)
        await page.waitForSelector('button[class="ngx-cool-dialog__ok-btn"]')
        await page.click('button[class="ngx-cool-dialog__ok-btn"]')
    }

    async deployModelToProduction(){
        await page.waitFor(10000)
        await page.waitForSelector('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.click('button[class="btn btn-dropdown-toggle bg-transparent"]')
        await page.waitFor(5000)
        const  publishbtn = (await page.$x('//button[contains(text(),"Publish to Production")]'))
        publishbtn[0].click()
        await page.waitFor(6000)
        await page.waitForSelector('button[class="ngx-cool-dialog__ok-btn"]')
        await page.click('button[class="ngx-cool-dialog__ok-btn"]')
    }


}
