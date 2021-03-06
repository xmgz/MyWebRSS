// Filename: ArticlesCollection.js

define([
	'backbone', 'localStorage', 'models/Article'
], function(Backbone, localStorage, ArticleModel) {
	var ArticlesCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage("Articles"),
		model: ArticleModel,

		// Order by date (desc)
		comparator: function(article) {
			return -article.attributes.date;
		},

		// Save all the articles models
		save: function() {
			this.each(function(article) {
				article.save();
			});
			return this;
		},

		reset: function(articles) {
			while(this.length)
				this.at(0).destroy();

			if(articles)
				this.add(articles);
		}
	});
	
	return ArticlesCollection;
});
