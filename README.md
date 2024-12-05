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
            keyword: "software engineer",      // Job title, keywords, or company
            location: "India",                 // Location to search in
            dateSincePosted: "past Week",     // Options: "24h", "past Week", "past Month", etc.
            jobType: "full time",             // Job type
            remoteFilter: "remote",           // Remote work options
            salary: "1000",                   // Expected salary
            experienceLevel: "entry level",   // Experience level
            limit: "1",                       // Number of jobs to fetch
            sortBy: "recent",                 // Sort results by (recent, relevant)
            page: "1"                         // Page number for pagination
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
- Filter by salary expectations
- Filter by experience level
- Pagination support
- Sort results by relevance or date
- Get detailed job information including title, company, location, and description

## API Reference

### scrapeJobs(options)

Scrapes LinkedIn jobs based on the provided options.

#### Options

- `keyword` (string): Search keyword for jobs (job title, keywords, or company)
- `location` (string): Location to search jobs in (e.g., "India", "United States")
- `dateSincePosted` (string): Filter for date posted (e.g., "24h", "past Week", "past Month")
- `jobType` (string): Type of job ("full time", "part time", "contract", etc.)
- `remoteFilter` (string): Remote work filter ("remote", "on-site", "hybrid")
- `salary` (string): Expected salary (e.g., "1000")
- `experienceLevel` (string): Required experience level (e.g., "entry level", "mid-senior level", "director")
- `limit` (string): Number of jobs to fetch per request
- `sortBy` (string): Sort results by ("recent", "relevant")
- `page` (string): Page number for pagination

## License

MIT

## Contributing

Contributions, issues, and feature requests are welcome! 