// eslint-disable-next-line import/no-anonymous-default-export
export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string",
		},

		{
			name: "date",
			type: "datetime",
		},

		{
			name: "description",
			type: "text",
		},

		{
			name: "projectType",
			title: "Project Type",
			type: "string",
			options: {
				list: [
					{ value: "personal", title: "Personal" },
					{ value: "school", title: "School" },
					{ value: "client", title: "Client" },
				],
			},
		},

		{
			name: "link",
			type: "url",
		},

		{
			name: "tags",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
			options: {
				layout: "tags",
			},
		},
	],
};
