# Browserless Login and Scrape Automation

This project demonstrates how to use [BrowserQL](https://browserless.io/) to:

- Login into Hacker News
- Navigate to a user's private profile page
- Scrape the email address from the page

## Features

- Secure token management using `.env`
- Uses BrowserQL GraphQL API
- Fully automates login, navigation, and data extraction

## Setup

1. Clone this repository:

```bash
git clone https://github.com/your-username/browserless-login-scrape.git
cd browserless-login-scrape
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder:

```bash
TOKEN=your-browserless-api-token
```

4. Replace credentials
```
<username> -> replace this with hackernews username
<password> -> replace this with password
```

5. Run the script:
```
npm start
```

6. Example Response

```bash
{
  "data": {
    "goto": {
      "status": 200
    },
    "enterUsername": {
      "time": 1252
    },
    "enterPassword": {
      "time": 1771
    },
    "clickLogin": {
      "time": 130
    },
    "afterLogin": {
      "url": "https://news.ycombinator.com/",
      "status": 200
    },
    "postLoginScrape": {
      "status": 200
    },
    "emailAddress": [
      {
        "email": {
          "value": "useremail@email.com"
        }
      }
    ]
  }
}
```

Notes:
- Make sure your .env file is NOT committed to GitHub. Add it in .gitignore file.
- The token must be a valid Browserless API token.
- This script uses node-fetch and dotenv packages.
