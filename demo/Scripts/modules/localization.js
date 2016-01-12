define(['jquery', 'knockout', 'bootstrap'], function ($, ko) {

	(function () {

		function getLocalizedText(objLanguage, params) {

			var key = params.key;
			var strFormat = params.strFormat;

			var item = objLanguage[key];

			if (!item) {
				return 'Not found the translation for the key ' + key;
			}

			var text = item;

			if (strFormat) {
				for (var replaceKey in strFormat) {
					var replacement = strFormat[replaceKey];
					text = text.replace(replaceKey, replacement);
				}
			}

			return text;
		}


		ko.bindingHandlers.localization = {
			update: function (element, valueAccessor, allBindingsAccessor, viewModel, context) {

				var params = allBindingsAccessor().params;
				var binding = ko.utils.unwrapObservable(valueAccessor());

				if (typeof binding !== "undefined" && typeof params !== "undefined") {
					var text = getLocalizedText(binding, params);

					if (element.localName.toLowerCase() === 'input' && element.type.toLowerCase() === 'text') {
						element.value = text;
					} else {
						ko.bindingHandlers.html.update(
							element,
							function () { return text },
							allBindingsAccessor,
							viewModel,
							context);
					}
				} else {
					console.log('binding object is not defined');
				}

			}
		};

	})();


	return function localizationViewModel() {

		self.language = ko.observable();

		function getLocalization(language) {
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
		}

		self.choosede = function () {
			getLocalization('de');
		};
		self.chooseen = function () {
			getLocalization('en');
		};

		self.chooseru = function () {
			getLocalization('ru');
		};

		getLocalization();
	}
});
