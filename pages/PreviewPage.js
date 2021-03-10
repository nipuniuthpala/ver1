

export default class PreviewPage{

    async clickPreview(){
        await page.waitFor(15000)
        const element = await page.waitForSelector('[ng-reflect-tooltip="Preview"]', {visible:true});
        await element.click();
    }

    async chatwithBot(){
        await page.waitFor(100000)
    
        const element = await page.waitForSelector('[ng-reflect-value="dsaidbot"]',{visible:true});
        await element.focus();
        await element.click();
        await page.waitForSelector("#helpIcon",{visible:true})
        await page.focus("#helpIcon",{visible:true})
        await page.click("#helpIcon",{force:true})
        await page.waitFor(5000)
        await page.waitForSelector('input[class="inputBar__field"]')
        await page.type('input[class="inputBar__field"]',"hi")
        await page.keyboard.press('Enter');
    }
}