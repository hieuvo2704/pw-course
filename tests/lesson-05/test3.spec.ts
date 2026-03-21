import { test } from "@playwright/test";

test.describe("material.playwrightvn.com", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/");
    });

    test("Test 1: Add 100 todo with 'Todo<i>'", async ({ page }) => {
        await test.step("step 1: click 'Bài học 3: Todo page'", async () => {
            await page.locator("//table/tbody/tr[3]/td[2]/a[contains(text(),'Bài học 3: Todo page')]").click();
        });


        await test.step("step 2: input 100 todo", async () => {
            const inputField = page.locator("#new-task");
            const addButton = page.locator("#add-task");

            for (let i = 1; i <= 100; i++) {
                await inputField.fill(`Todo ${i}`);
                await addButton.click();
            }
        });

    })

    test("Test 2: Remove todo row having odd number", async ({ page }) => {
        await test.step("step 1: click 'Bài học 3: Todo page'", async () => {
            await page.locator("//table/tbody/tr[3]/td[2]/a[contains(text(),'Bài học 3: Todo page')]").click();
        });

        await test.step("step 2: add 100 todo and remove todo having odd number", async () => {
            const inputField = page.locator("#new-task");
            const addButton = page.locator("#add-task");
            page.on("dialog", async dialog => dialog.accept());

            for (let i = 1; i <= 100; i++) {
                await inputField.fill(`Todo ${i}`);
                await addButton.click();
            }

            for (let i = 100; i >= 1; i--) {
                if (i % 2 !== 0) {
                    const deleteButton = page.locator(`//button[contains(@id,'${i}-delete')]`);
                    await deleteButton.click();
                }
            }
        })
    })
})



