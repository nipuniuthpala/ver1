import LoginPage from "../pages/LoginPage"
import TeamPage from "../pages/TeamPage"
import BotPage from "../pages/BotPage"
import AccountPage from "../pages/AccountPage"
import KpiPage from "../pages/KpiPage"
import HistoryPage from "../pages/HistoryPage"
import ModelPage from "../pages/ModelPage"
import PreviewPage from "../pages/PreviewPage"


describe('AIAnswer Automation',()=>{
    let loginpage;
    let teampage;
    let botpage;
    let accountpage;
    let kpipage;
    let historypage;
    let modelpage;
    let previewpage;
 

    beforeAll(async ()=>{
     jest.setTimeout(80000);
     loginpage=new LoginPage();
     teampage=new TeamPage();
     botpage=new BotPage();
     accountpage=new AccountPage();
     kpipage=new KpiPage();
     historypage=new HistoryPage();
     modelpage=new ModelPage();
     previewpage=new PreviewPage();
    
    })


  it('Verify user able to create a Team',async ()=>{
        await loginpage.login();
        jest.setTimeout(50000);
        await teampage.teamcreation();
          
    })

   it('Verify user able to invite a Team member',async()=>{
    jest.setTimeout(60000);
       await teampage.inviteMember();
          
    })

    it('Verify user can change the role of the user',async ()=>{
      jest.setTimeout(60000);
       await teampage.changeRoleMember();
    })

    it('Verify user able to edit a Team',async ()=>{
      jest.setTimeout(50000);
     await teampage.editTeam();
           
    })



   it('Verify user able to search a Team in the team list',async ()=>{  

  
      await teampage.teamlist();    
    })

    it ('Verify user able to delete the team',async ()=>{
    
      await teampage.deleteTeam();
      })


    it('Verify the accounts page is available ',async()=>{
      jest.setTimeout(50000);
      await accountpage.goToAccountsPage();
      await accountpage.validateAccountsPage();
 
   })

    it('Verify created Team shows KPI and history,model pages',async ()=>{
      jest.setTimeout(50000);
      await teampage.teamSearch();
    
      jest.setTimeout(40000);
      await historypage.clickHistory();
    
      
          
    })



    it('Verify a new conversational model can be created by importing json',async ()=>{
      await modelpage.clickModelPage(); 
      await modelpage.importModel();
    })

    it('Verify the preview page and anyalse the bot',async ()=>{
      jest.setTimeout(90000);
      await previewpage.clickPreview();

           
   })

    it('Verify the KPI values',async ()=>{

     
        jest.setTimeout(50000);
        await kpipage.clickKPI();
        await kpipage.validateKPIValues();
        jest.setTimeout(10000);
        await historypage.clickHistory();
        await loginpage.reloadPage();

    })

    it('Verify the History values and export functionality in history page',async()=>{
     jest.setTimeout(60000);
      await historypage.clickExportButton();
      await historypage.clickDownload();
    
      
    })

    it('Verify the file can be downloaded and data is available',async ()=>{
     await historypage.validateDownlaodedFile();
        
    })

    it('Verify the conversational model can be deployed to staging',async ()=>{

       await modelpage.clickModelPage();
       jest.setTimeout(50000);
       await modelpage.deployModelTostaging();
       
     })

     it('Verify user can manually create a model',async ()=>{
      await modelpage.createModel();
    })

    it('Verify user can edit a created model',async ()=>{
      jest.setTimeout(40000);
       await modelpage.editModel();
    })

    it('Verify user can create qa list',async ()=>{
      jest.setTimeout(40000);
       await modelpage.createQAList();
    })

    it('Verify user can create matrix',async ()=>{
      jest.setTimeout(40000);
       await modelpage.createQAMatrix();
    })

    it('Verify user can export matrix',async ()=>{
      jest.setTimeout(40000);
       await modelpage.exportMatrix();
    })


    it('Verify user can create Intent',async ()=>{
      jest.setTimeout(40000);
       await modelpage.createIntent();
    })

    it('Verify user can edit/delete qalist',async ()=>{
      jest.setTimeout(40000);
       await modelpage.deleteQAList();
    })

    it('Verify user can delete a created model',async ()=>{
      jest.setTimeout(40000);
       await modelpage.deleteModel();
    
    })

     it('Verify the conversational model can be deployed to production',async ()=>{
      jest.setTimeout(40000);
      await modelpage.deployModelToProduction();
      
     })

    
      
    
})






