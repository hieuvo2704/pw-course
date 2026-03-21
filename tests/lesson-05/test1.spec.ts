import { test } from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';

test("Test 1: Nhập thông tin các fields", async ({ page }) => {
    await test.step("step 1: open website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("step 2: Click 'bài học 1: Register Page'", async () => {
        await page.locator("//table/tbody/tr[1]/td[2]/a[contains(text(), 'Bài học 1: Register Page')]").click();
    });

    await test.step("step 3: input username", async () => {
        await page.locator("//input[@id='username']").fill("Hieu Vo K22");
    });

    await test.step("step 4: input email", async () => {
        await page.locator("//input[@id='email']").fill("hieuvo2704@gmail.com");
    });

    await test.step("step 5: 'Gender' radio button", async () => {
        await page.locator("//input[@id='male']").check();
    });

    await test.step("step 6: 'Hobbies' checkbox", async () => {
        await page.locator("//input[@id='cooking']").check();
    });

    await test.step("step 7: Select 'Interest' in a drop-down ", async () => {
        await page.locator("#interests").selectOption("technology");
    });

    await test.step("step 8: Select country from a drop-down", async () => {
        await page.locator("#country").selectOption("canada");
    });

    await test.step("step 9: Select date of birth", async () => {
        await page.locator("#dob").fill("1997-04-30");
    });

    await test.step("step 10: Upload a file", async () => {
        await page.locator("#profile").setInputFiles("tests/lesson-05/penguine.png");
    });

    await test.step("step 11: Input 'Biography'", async () => {
        await page.locator("#bio").pressSequentially("testing texts in biography", { delay: 300 });
    });

    await test.step("step 12: Click 'Register' button", async () => {
        await page.locator("//button[@type='submit']").click();
    });
});