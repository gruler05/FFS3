
**How to add FFS3 as a Chrome extension:**
- Step1 :Chrome > More tools > Extensions
- Step2 :Enable developer mode on the right
- Step3 :Click on Load Unpacked
- Step4: Route to the project and select Public folder
- Step5: Profit ???

**How to add custom shortcuts for sound:**
The default shortcuts are
Alt + 1,Alt + 2,Alt + 3 and Alt + 4
- Step1 :Open extensions page
- Step2 :Open the menu on the left
- Step3 :Click on the Keyboard shortcuts
- Step4 :Find FFS3 and add your custom Keyboard shortcuts

**How to add custom sounds**
- Step 1: download the mp3 
- Step 2:  Clone the git repo 
- Step 3: Add your mp3 to './Public/audios' 
- Step 4: Add your mp3 to the background file like so


`const makeitso = new Audio('../audios/makeitso.mp3');
...
if(command === 'makeitso'){
    playSound(makeitso);
}`

- Step 5: add sound to the manifest.json


`"makeitso": {
  "description": "Make it so"
},`


- Step 6: Chome -> extensions -> Refresh button (lower right corner of FF3 extension)
- Step 7: update your keymapping
