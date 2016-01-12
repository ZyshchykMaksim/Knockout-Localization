# Knockout-Localization
Dynamic localization without overloading the page using knockout.js

###  Resources
				switch (language) {
				case 'de':
					self.language({
						Title: "HALLO",
						Description: 'IM MOMENT {0} JAHR'
					});
					break;
				case 'en':
					self.language({
						Title: "HELLO",
						Description: 'NOW {0} YEAR'
					});
					break;
				case 'ru':
					self.language({
						Title: "ПРИВЕТ",
						Description: 'СЕЙЧАС {0} ГОД'
					});
					break;
				default:
					self.language({
						Title: "HELLO",
						Description: 'NOW {0} YEAR'
					});
					break;
			}
		
###  Resources
This example get a localized text with the key Title.

    <h1 style="font-size: 52px;" data-bind="localization: language , params: { key: 'Title'}"></h1>

If replacement is necessary

    <h2 style="font-size: 48px" data-bind="localization: language , params: { key: 'Description', strFormat: { '{0}': '2016' } }"></h2>

###  License
[MIT License](http://www.opensource.org/licenses/mit-license.php).
