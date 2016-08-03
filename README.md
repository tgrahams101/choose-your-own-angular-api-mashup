# Choose Your Own API Integration

You goal is to build an API "Mashup" / rapid prototype, using angular and your choice of public APIs.

#### Suggested API Endpoints

* [Open Movie Database API](http://www.omdbapi.com)
* [Github API](https://developer.github.com/v3/)
* [Reddit API](https://www.reddit.com/dev/api)
* [City Bikes API](http://api.citybik.es/v2/)
* [Spotify Web API](https://developer.spotify.com/web-api/)

**Do Not** Use endpoints that require AUTH or SECRET TOKENs.

> Keep in mind that *most* API endpoints are **NOT** meant to be consumed directly by the client/front-end/browser. There is *nowhere* to hide a "secret" api token in a front end application(!), so APIs like instagram, facebook, twitter, etc. are not suitable for this kind of project.

#### Rapid Prototype

Angular is the perfect tool for building quick front-end prototypes so that you can get feedback from your client.

You have the next hour to build a rapid prototype to show to your client (Keep it Simple!):

- First, come up with a "proof of concept".
  - Do you have the data you need?
  - Do you have the tools you need?
- Next, create a quick mock-up so you can get *client feedback*:
  - Your client should be able to navigate, and click/toggle UI elements.
  - But everything should be *hard coded*.
- Get *client feedback*.
  - If the client likes it, build it out, and plug in your API.
  - Otherwise, incorporate their feedback and iterate again.

Once you have client-approval, bring it to life.


#### Killer Feature
Your app should do one thing, and do it well. Here are some ideas:

* Like it / Love it / <3 it -- add UI elements for toggling buttons/icons
* Sort it / Filter it / Search it -- make it easy to explore your content
* Share it -- use query parameters or hash state to create bookmarkable/shareable links that affect how the page loads.
* Gameify it -- make a quiz, flash cards, guessing game

#### High Polish
Focus your attention on creating a seamless, highly polished, front-end user experience.

* Does the layout make sense?
* Is it "mobile first"? (Does content "reflow" correcty when the window resizes?)
* Do elements toggle correctly / intuitively?
* Could you incorporate icons/colors into your buttons?
* Did you use load-spinners so I know what's happening?
* Did you handle bad user input into forms?
* Did you handle API errors, not just success?
* Did you handle empty responses?

