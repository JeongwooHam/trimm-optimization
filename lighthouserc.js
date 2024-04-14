module.exports = {
	ci: {
		collect: {
			url: ["http://localhost:3000", "https://trimm-pi.vercel.app/"],
			collect: {
				numberOfRuns: 5,
			},
		},
		assert: {
			assertions: {
				"categories:performance": ["warn", { minScore: 1 }],
				"categories:accessibility": ["warn", { minScore: 1 }],
				"categories:best-practices": ["warn", { minScore: 1 }],
				"categories:pwa": ["warn", { minScore: 1 }],
				"categories:seo": ["warn", { minScore: 1 }],
			},
			preset: "lighthouse:recommended",
		},
		upload: {
			startServerCommand: "npm run start",
			target: "temporary-public-storage",
		},
	},
};
