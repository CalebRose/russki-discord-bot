# Russki
A Discord Bot that translates text to Russian and various other languages


## Translation Feature
Users can use Russki to translate any phrase into a given supported language.

## Languages Supported
- English
- Russian
- Hebrew
- Italian
- Spanish
- Chinese
- Korean
- Dutch
- Icelandic

For the full list of languages, [click the following link to the Yandex languages API](https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/#api-overview__languages).

### Commands List
- !translate {language code} {message} : Translate a phrase into a provided language
- !languages : Provides a short list of language codes the user can use
- !help : Bot sends a message to the channel with a short guide on using the bot

### Tech Stack / Implementation
The bot utilizes the following libraries and APIs in order to function:
- Yandex API: The bot uses Yandex to capture and return text to the user in a given language
- Node: Backend server used to store all commands and functions of bot
- Discord.js: A library allowing the user to program and use a bot for various functions, from sending users custom messages, to managing channels and discord servers.


### Future Changes
- A command that allows admin users to manage where the bot may message within a server
- Research into increasing the scope from languages to providing relevant information regarding a language's culture. Emphasis will be on Russian.
- Gifs and video to the readme to show how the bot works
