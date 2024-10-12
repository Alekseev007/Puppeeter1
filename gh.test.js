let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    jest.setTimeout(10000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });

  test("The first link attribute", async () => {
    jest.setTimeout(10000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(10000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});

test("Title", async () => {
  jest.setTimeout(60000);
  await page.goto("https://github.com/features");
  const title1 = await page.title();
  expect(title1).toEqual("GitHub Features · GitHub");
});

test("Title2", async () => {
  jest.setTimeout(60000);
  await page.goto("https://github.com/");
  const title1 = await page.title();
  expect(title1).toEqual("GitHub: Let’s build from here · GitHub");
});

test("title3", async () => {
  jest.setTimeout(60000);
  await page.goto("https://github.com/features/code-review");
  const title1 = await page.title();
  expect(title1).toEqual("GitHub Code Review · GitHub");
});
