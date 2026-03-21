import { test } from '@playwright/test';

test("Test 1: Thêm vào giỏ hàng các số lượng sản phẩm", async ({ page }) => {
    await test.step("step 1: open website", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("step 2: Click 'bài học 2: Product page'", async () => {
        await page.locator("//table/tbody/tr[2]/td[2]/a[contains(text(),'Bài học 2: Product page')]").click();
    });

    await test.step("step 3: Add 2 'products 1' to cart", async () => {
        await page.locator("//div/button[@data-product-id='1']").click({ clickCount: 2 });
    });

    await test.step("step 4: Add 3 'product 2' to cart", async () => {
        await page.locator("//div/button[@data-product-id='2']").click({ clickCount: 3 });
    });

    await test.step("step 5: Add 1 'product 3' to cart", async () => {
        await page.locator("//div/button[@data-product-id='3']").click({ clickCount: 1 });
    });
})