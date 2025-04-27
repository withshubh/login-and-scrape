import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const endpoint = "https://production-sfo.browserless.io/chrome/bql";
const token = process.env.TOKEN;

const optionsString = "&blockConsentModals=true";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
mutation LoginAndScrape {
  goto(url: "https://news.ycombinator.com/login", waitUntil: networkIdle) {
    status
  }

  enterUsername: type(
    text: "<username>", 
    selector: "input[name='acct']"
  ) {
    time
  }

  enterPassword: type(
    text: "<password>", 
    selector: "input[name='pw']"
  ) {
    time
  }

  clickLogin: click(
    selector: "input[type='submit'][value='login']"
  ) {
    time
  }

  afterLogin: waitForNavigation {
    url
    status
  }

  postLoginScrape: goto(
    url: "https://news.ycombinator.com/user?id=<username>",
    waitUntil: networkIdle
  ) {
    status
  }

emailAddress: mapSelector(selector: "input[name='email']") {
  email: attribute(name: "value") {
    value
  }
}
}

    `,
    operationName: "LoginAndScrape",
  }),
};

const url = `${endpoint}?token=${token}${optionsString}`;
const response = await fetch(url, options);
const data = await response.json();

console.log(JSON.stringify(data, null, 2));
