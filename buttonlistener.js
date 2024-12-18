
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


function reportError(error) 
{
    console.error(`Error testing: ${error}`);
}


function appendColorFilter(filterType)
{
 
    // Clear Previous Styles
    if (document.getElementById("styleColorBlind")) 
    {
        //Removing the previous styles if any
        stylingID = document.getElementById("styleColorBlind").remove();
        filterID = document.getElementById("filterColorBlind").remove();
    }
     
    // Create a ne style element
    stylingID = document.createElement('style');
    stylingID.id = "styleColorBlind";
   
    // Create a new filter div
    filterID = document.createElement('div');
    filterID.id = "filterColorBlind";
    filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');

    //Add the elements to the document
    document.body.appendChild(stylingID);
    document.body.appendChild(filterID);

      
    switch(filterType)
    {
  
        // Protanomaly
        case '1':
  
        filterID.innerHTML =  `
        <svg 
        id="access-filter"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <defs>
                <filter id="protanomaly">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.817, 0.183, 0,     0, 0
                        0.333, 0.667, 0,     0, 0
                        0,     0.125, 0.875, 0, 0
                        0,     0,     0,     1, 0"/>
                </filter>
        </defs> 
        </svg>`;
  
        stylingID.innerHTML = 'html{-webkit-filter:url(#protanomaly);-moz-filter:(#protanomaly);-ms-filter:(#protanomaly);-o-filter:(#protanomaly);filter:(#protanomaly);}';

        break;
  
        // Protanopia
        case '2':
        
        filterID.innerHTML =  `
        <svg 
        id="access-filter"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <defs>
                <filter id="protanopia">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.567, 0.433, 0,     0, 0
                        0.558, 0.442, 0,     0, 0
                        0,     0.242, 0.758, 0, 0
                        0,     0,     0,     1, 0"/>
                </filter>
        </defs> 
        </svg>`;

        stylingID.innerHTML = 'html{-webkit-filter:url(#protanopia);-moz-filter:(#protanopia);-ms-filter:(#protanopia);-o-filter:(#protanopia);filter:(#protanopia);}';
              
           
        break;

        // Deuteranomaly
        case '3':
                
        filterID.innerHTML =  `
        <svg 
        id="access-filter"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <defs>
                <filter id="deuteranomaly">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.8,   0.2,   0,     0, 0
                        0.258, 0.742, 0,     0, 0
                        0,     0.142, 0.858, 0, 0
                        0,     0,     0,     1, 0"/>
                </filter>
        </defs> 
        </svg>`;

        stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranomaly);-moz-filter:(#deuteranomaly);-ms-filter:(#deuteranomaly);-o-filter:(#deuteranomaly);filter:(#deuteranomaly);}';
            
        break;

         // Deuteranomaly
         case '4':
                
         filterID.innerHTML =  `
         <svg 
         id="access-filter"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         version="1.1">
         <defs>
                <filter id="deuteranopia">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.625, 0.375, 0,   0, 0
                        0.7,   0.3,   0,   0, 0
                        0,     0.3,   0.7, 0, 0
                        0,     0,     0,   1, 0"/>
                </filter>
         </defs> 
         </svg>`;
 
         stylingID.innerHTML = 'html{-webkit-filter:url(#deuteranopia);-moz-filter:(#deuteranopia);-ms-filter:(#deuteranopia);-o-filter:(#deuteranopia);filter:(#deuteranopia);}';
             
         break;


        // Tritanomaly
        case '5':
                
        filterID.innerHTML =  `
        <svg 
        id="access-filter"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1">
        <defs>
                <filter id="tritanomaly">
                    <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="0.967, 0.033, 0,     0, 0
                            0,     0.733, 0.267, 0, 0
                            0,     0.183, 0.817, 0, 0
                            0,     0,     0,     1, 0"/>
                </filter>
        </defs> 
        </svg>`;
   
        stylingID.innerHTML = 'html{-webkit-filter:url(#tritanomaly);-moz-filter:(#tritanomaly);-ms-filter:(#tritanomaly);-o-filter:(#tritanomaly);filter:(#tritanomaly);}';
               

           break;

         // Tritanomaly
         case '6':
                
         filterID.innerHTML =  `
         <svg 
         id="access-filter"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         version="1.1">
         <defs>
                <filter id="tritanopia">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.95, 0.05,  0,     0, 0
                        0,    0.433, 0.567, 0, 0
                        0,    0.475, 0.525, 0, 0
                        0,    0,     0,     1, 0"/>
                </filter>
         </defs> 
         </svg>`;
    
         stylingID.innerHTML = 'html{-webkit-filter:url(#tritanopia);-moz-filter:(#tritanopia);-ms-filter:(#tritanopia);-o-filter:(#tritanopia);filter:(#tritanopia);}';
               
         break;

            default:
                break;
  
    }
  
  
      
  
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
            function: appendColorFilter,
            args : [filterType],
       
    });

}


function listenForClicks()
{
    const radioButtonList = document.querySelectorAll('[id^="radio"]');

    radioButtonList.forEach((radioButton) => 
    {
        radioButton.addEventListener("click", async function () 
        {
            // Getting a refernce for the current tab id from chromo(for not its only for cromium based browsers)
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
