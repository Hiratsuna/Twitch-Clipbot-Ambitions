### Twitch-Clipbot-Ambitions

**Twitch bot that is supposed to create clips automatically when TTS is claimed** 

> If all goes well this bot would be able to react to the 'channel points' reward claim that activates Twitch's TTS & generates a clip automatically that captures the event. 
- Planning to host on [Heroku](https://www.heroku.com/) if all works well locally. 
> the cURL events for clip generation can configure the duration for the event in the url themselves from [Twitch API Clip Command](https://dev.twitch.tv/docs/api/reference/#get-clips)


- [Twitch API Clip Command](https://dev.twitch.tv/docs/api/reference/#get-clips)
- [Twitch Chat OAuth Gen](https://twitchapps.com/tmi/)
- [Twitch Bot.js](https://www.youtube.com/watch?v=hoiWxlZ6xHw&t=309s)
- [tmi.js install](https://www.npmjs.com/package/tmi.js)
- tokens & secret in gist 
- [Heroku](https://www.heroku.com/)
- [tmi.js actual docs](https://github.com/tmijs/docs/tree/gh-pages/_posts)
  - [commands](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Commands.md)
  - [configurations](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Configuration.md)
  - [events](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Events.md)
    > like cheers, **reward claims**, etc.
- [Twitch API EventSub *pre Webhook*](https://dev.twitch.tv/docs/eventsub/)
> The OAuth user access token must include the clips:edit scope.
- [webhook events & example](https://dev.twitch.tv/docs/eventsub/handling-webhook-events/)
  -  subscribe to events?
  -  u might have to include the link processing logic while on the event stage???
  -  1 sub event & 1 separate get event? & then post event to dm or discord XD
     - **the sub event triggers the get event & they get triggered by tts reward claim**
       - alternative is to trigger the clip event & make an api call with [zapier](https://zapier.com/apps/discord/integrations/twitch--webhook) & set it up to [get](https://dev.twitch.tv/docs/api/reference/#get-clips) the clip after 1st req??
  -  where to get subscription ID??
  -  [Subscription Types](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/)
  -  [Managing Event Subscriptions](https://dev.twitch.tv/docs/eventsub/manage-subscriptions/)
  -  [Custom Reward Redemption Event](https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/#channelchannel_points_custom_reward_redemptionadd)
  -   `` channel.channel_points_custom_reward_redemption.add `` sub event ,version `` 1 ``

> ### [Helpful Article When Stuck](https://spacejelly.dev/posts/how-to-create-a-twitch-chat-bot-with-node-js-tmi-js-heroku/)

### Potential features: 
- [ ] Whisper command that is meant to send me a whisper with the clip's link to avoid chat clutter and spam after it is generated -> [tmi - Whisper command how to](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Commands.md#whisper)
- [ ] Static webpage as UI if possible on GH Pages - *ex in: [configurations](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Configuration.md)*
- [ ] Typescript version kek
- [ ] consider sth with raids
- [ ] docker TOPKEK

## FML:
- [ ] Test a get request with CLI for latest vid ?  


> ### For setting up Webhook!   
```
{
    "type": "channel.channel_points_custom_reward_redemption.add",
    "version": "1",
    "condition": {
        "broadcaster_user_id": "1337",
        "reward_id": "92af127c-7326-4483-a52b-b0da0be61c01" // optional; gets notifications for a specific reward
    },
    "transport": {
        "method": "webhook",
        "callback": "https://example.com/webhooks/callback",
        "secret": "s3cRe7"
    }
}
```
