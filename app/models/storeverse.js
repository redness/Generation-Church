exports.definition = {
	config: {
		columns: {
		    "myVerses" : "string"
		},
		adapter: {
			type: "sql",
			collection_name: "storeverse"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};