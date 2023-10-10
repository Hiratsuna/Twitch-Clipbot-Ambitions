### [How to setup Text-to-speech on Twitch as a Channel Points reward](https://spamemotes.com/posts/how-to-setup-tts/)

1. Download [Streamer.bot](https://streamer.bot/api/releases/streamer.bot/latest/download)
> Link it to your Twitch
> - Open Streamer.bot
> - Click on ‘Platforms’
>    - Go to ‘Twitch’ tab and link your Twitch
>    - Should look like this: 
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/dba623cf-6146-403c-858c-b3c7500a70b5)

3. After it is set up, go to ‘Actions’ tab and right-click on **white space** in the Actions section. 
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/a0eb9025-e4ae-4a4a-8e12-e5fa1d5bc764)
    
> 4. Click on ‘Add’
> 5. On the ‘Add Action’ window popup, you give the action a name (I named it ‘Auto TTS Clip Capture’, but you can name it whatever) 
> 6. Select the option to ‘Always Run’, since we are making it automatic. 
> 7. Click ‘Ok.’ 
> 8. Now we have the Action ready and we move on to the ‘Triggers’ section and right-click the **white space.**
> 9. On the dropdown menu select **Twitch > Channel Reward > Reward Redemption**  
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/f571d9ab-1352-4488-9575-ca56650ebb71)
    
10. Then you will get a popup to pick the Reward you want to set as a Trigger. (In my case, it’s ‘TTS’ Reward) and then click ‘**Ok’.** 
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/ee318a31-a0f5-423e-a245-850f15e63aa3)

11. Before moving on to the next step, you will need to copy the below code snippet: 
    
```csharp
using System;
using System.Threading;
    
public class CPHInline
{
public bool Execute()
{
Thread.Sleep(30000);
return true;
}
}
```  
> 💡 If you have setup your TTS reward to run after a delay of 10 seconds for example,
>  you would want to add 10000ms into the method and change the
>  **Thread.Sleep(30000);** to **Thread.Sleep(40000);**
    
12. After copying the above code snippet, go to Sub-Actions section and right-click white space. 
> 13. **Select Core > C# > Execute C# Code** 
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/a418b38f-d733-43e2-8f61-bbf417629aa4)

    
> 14. You will get a window pop-up looking like this: 
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/7476c2e2-4f2f-4abe-ab46-ea6fcea699b7)

    
> 15. Just remove the code inside of this window and paste the code snippet copied earlier and click on **Compile**. (CTRL+A > CTRL+V) 
> 16. You should get a message in the Compiling Log saying that it has been compiled successfully like this: 
    
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/dd323d6e-4f7f-42b8-a44d-c11597148153)

    
> 17. If the above has been compiled successfully, you can go ahead and click on **‘Save and Compile’.**
> 18. Right-click on **Sub-Actions white space** again and select **Twitch > Channel > Create Clip**. This will create your second Sub-Action.

![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/17aa882e-a49b-45f1-9106-20ebad86774f)

1. (Optional) Go to your Discord Server and go to the channel you would like your clips to be posted to and Make a Webhook for the channel, set up the hook and copy it’s link.
2. Right-click white space again and go to **Integrations > Discord > Basic Webhook.**
3. Give the hook names and put the url in place of the text in the **Webhook Url** box. 
> 4. Paste 
  
![image](https://github.com/Hiratsuna/Casual-Blog/assets/130181277/fba8dfb7-cd2b-49b5-8ce7-75c81d2880de)
    
### 5. Automated and stored in a dedicated place :3