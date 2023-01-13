import { test, expect } from "@playwright/test";
import user from "./fixtures/user";

test.describe("test app", () => {
  test("tests test app", async ({ page }) => {
    // mock api
    await page.route(
      "https://jsonplaceholder.typicode.com/users/1",
      async (route) => {
        await route.fulfill({ json: user });
      }
    );

    await page.goto("http://localhost:3000/");
    await page.locator("input[name='id']").fill("test");
    await page.locator("input[name='pass']").fill("pass");
    await page.locator("button[type='submit']").click();

    // production : Leanne Graham
    await expect(
      page
        .locator("h1")
        .getByText(/Test User Name/)
        .first()
    ).toBeVisible();
  });
});
