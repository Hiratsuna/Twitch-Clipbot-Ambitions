## [How to setup Text-to-speech on Twitch as a Channel Points reward](./1.md)

### 1. Download [Streamer.bot](https://streamer.bot/api/releases/streamer.bot/latest/download)

2. ### Link it to your Twitch 
    1. Open Streamer.bot
    2. Click on ‘Platforms’ 
    3. Go to ‘Twitch’ tab and link your Twitch
    4. Should look like this: 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/d511b3bd-2a37-44b5-b4df-696798d6793c/Untitled.png)
    
3. ### After it is set up, go to ‘Actions’ tab and right-click on **white space** in the Actions section. 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/321a8dba-2376-4ff2-adac-a61487020574/Untitled.png)
    
4. Click on ‘Add’
5. On the ‘Add Action’ window popup, you give the action a name (I named it ‘Auto TTS Clip Capture’, but you can name it whatever) 
6. Select the option to ‘Always Run’, since we are making it automatic. 
7. Click ‘Ok.’ 
8. Now we have the Action ready and we move on to the ‘Triggers’ section and right-click the **white space.**
9. On the dropdown menu select **Twitch > Channel Reward > Reward Redemption**  
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/a5c54a13-a7ab-4efc-b48b-af8f6034d59f/Untitled.png)
    
10. Then you will get a popup to pick the Reward you want to set as a Trigger. (In my case, it’s ‘TTS’ Reward) and then click ‘**Ok’.** 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/841f1e6b-1f3a-4a61-849a-7af95862d47a/Untitled.png)
    
11. ### Before moving on to the next step, you will need to copy the below code snippet: 
    
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
    
    <aside>
    💡 If you have setup your TTS reward to run after a delay of 10 seconds for example, you would want to add 10000ms into the method and change the **Thread.Sleep(30000);** to **Thread.Sleep(40000);**
    
    </aside>
    
12. ### After copying the above code snippet, go to Sub-Actions section and right-click white space. 
13. **Select Core > C# > Execute C# Code** 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/e4d9440a-bc9f-4d2d-b52a-5baf1d07c711/Untitled.png)
    
14. You will get a window pop-up looking like this: 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/e6da1aec-92bc-4115-af9a-652c38918afb/Untitled.png)
    
15. Just remove the code inside of this window and paste the code snippet copied earlier and click on **Compile**. (CTRL+A > CTRL+V) 
16. You should get a message in the Compiling Log saying that it has been compiled successfully like this: 
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/5105f7fc-c2e4-4b54-b9b9-a2a3bb9223c2/Untitled.png)
    
17. If the above has been compiled successfully, you can go ahead and click on **‘Save and Compile’.**
18. Right-click on **Sub-Actions white space** again and select **Twitch > Channel > Create Clip**. This will create your second Sub-Action.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/bb12d419-aa11-46e6-9523-c6c3f76a17ee/Untitled.png)

1. ### (Optional) Go to your Discord Server and go to the channel you would like your clips to be posted to and Make a Webhook for the channel, set up the hook and copy it’s link.
2. Right-click white space again and go to **Integrations > Discord > Basic Webhook.**
3. Give the hook names and put the url in place of the text in the **Webhook Url** box. 
4. Paste 

    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2be825fe-b4d1-44e1-9d30-a2b00088b476/12000412-5a39-4efa-afc2-54d23df46d8b/Untitled.png)
    
5. Automated and stored in a dedicated place :3