
const colorBlindnessType = Object.freeze({

    none : 0,
    protanomaly : 1,
    protanopia : 2,
    deuteranomaly : 3,
    deuteranopia : 4,
    tritanomaly : 5,
    tritanopia : 6,
    achromatomaly : 7,
    achromatopsia : 8

});

const visionType = Object.freeze({
  
    none : 0,
    modertate : 1,
    severe : 2

});




function injectColorFilter(filterType)
{
       
    if (document.getElementById("styleColorBlind")) 
        {
            styleID = document.getElementById("styleColorBlind").remove();
            filterID = document.getElementById("filterColorBlind").remove();
        }
     

    
    styleID = document.createElement('styleContainer');
    styleID.id = "styleColorBlind";
    document.body.appendChild(styleID);
      
    pc = document.getElementById("styleColorBlind").id;

     

    filterID = document.createElement('filterContainerCustom');
    filterID.id = "filterColorBlind";
    filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
    document.body.appendChild(filterID);

      
    //   switch(filterType)
    //   {
  
    //     case '1':
  
    //     filterID.innerHTML = `<svg id="colorblindfilters" style="display: none"> 
    //                           <defs> 
    //                           <filter id="protanomaly"> 
    //                           <feColorMatrix type="matrix" values="
    //                            0.817, 0.183, 0,0, 
    //                            0,0.333, 0.667, 0,
    //                            0, 0,0,0.125,
    //                            0.875, 0, 0,0,
    //                            0,0,1, 0" 
    //                           in="SourceGraphic" /> </filter> </defs> </svg>`;
  
    //     stylingID.innerHTML = 'html{-webkit-filter:url(#protanomaly);-moz-filter:(#protanomaly);-ms-filter:(#protanomaly);-o-filter:(#protanomaly);filter:(#protanomaly);}';
       
    //       break;
  

    //     default:
           
    //         break;
  
    //   }
  
  
      
  
  }
  

//Gets the Current Tab reference from the chrom queries
async function getCurrentChromeTab()
{
   let [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

   return currentTab;
}

// Function to emulate radio button behaviour
function setColorFilterCheckBox(value)
{
    try
    {
        chrome.storage.local.set({ key: value }, function() 
        {
            document.getElementById(value).checked = true;
        });

    } catch{}
}





function processFilter(filterType, chromeTabId)
{
    

    chrome.scripting.executeScript(
    {
            target: {tabId : chromeTabId},
            function: injectColorFilter,
            args : [filterType]
       
    }).then(() => console.warn("injected a function"));
}

function reportError(error) 
{
    console.error(`Error testing: ${error}`);
}

function listenForClicks()
{
    const radioButtonList = document.querySelectorAll('[id^="radio"]');

    radioButtonList.forEach((radioButton) => 
    {
        radioButton.addEventListener("click", async function () 
        {

            const currentTabRef = await getCurrentChromeTab();
            const filter = radioButton.id.replace("radio_", "");

            setColorFilterCheckBox(radioButton.id);
            processFilter(filter, currentTabRef.id);

        });
       
    });

}



 // storage for remembering the last selected color filter
window.selectedColorFilter = null;

window.onload = function () {
    if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function (result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });

 


};







// Runtime Function calls here , I know this is messy :( 
  
listenForClicks();
