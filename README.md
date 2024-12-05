# LinkedIn Jobs Scraper

A powerful Node.js package for scraping job listings from LinkedIn.

## Installation

```bash
npm install linkedin-jobs-scapper
```

## Usage

```javascript
const LinkedInScraper = require('linkedin-jobs-scapper');

// Example usage
async function main() {
    try {
        const scraper = new LinkedInScraper();
        const jobs = await scraper.scrapeJobs({
            keyword: 'software engineer',
            location: 'United States',
            dateSincePosted: '24h',
            jobType: 'full time',
            remoteFilter: 'remote'
        });
        console.log(jobs);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

## Features

- Search jobs by keyword and location
- Filter by date posted
- Filter by job type
- Filter by remote work options
- Get detailed job information including title, company, location, and description

## API Reference

### scrapeJobs(options)

Scrapes LinkedIn jobs based on the provided options.

#### Options

- `keyword` (string): Search keyword for jobs
- `location` (string): Location to search jobs in
- `dateSincePosted` (string): Filter for date posted ('24h', 'week', 'month')
- `jobType` (string): Type of job ('full time', 'part time', 'contract', etc.)
- `remoteFilter` (string): Remote work filter ('remote', 'on-site', 'hybrid')

## License

MIT

## Contributing

Contributions, issues, and feature requests are welcome! 