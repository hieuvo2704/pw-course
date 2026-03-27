import { test } from "@playwright/test";

// i. Field “Title”: điền nội dung ở cột “Tên action”
// ii. Field “Content”: điền nội dung ở cột “Mô tả”

test.describe("material.playwrightvn.com", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/");
    });

    test("Test 1: Adding 10 notes", async ({ page }) => {
        await test.step("step 1: click 'Bài học 4: Personal notes'", async () => {
            await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
        });

        await test.step("step 2: adding 10 notes based on the given table", async () => {
            const listAction = [
                {
                    name: "click",
                    description: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"
                },
                {
                    name: "fill",
                    description: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"
                },
                {
                    name: "type",
                    description: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"
                },
                {
                    name: "hover",
                    description: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"
                },
                {
                    name: "check",
                    description: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"
                },
                {
                    name: "uncheck",
                    description: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"
                },
                {
                    name: "selectOption",
                    description: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"
                },
                {
                    name: "press",
                    description: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"
                },
                {
                    name: "dbclick",
                    description: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"
                },
                {
                    name: "dragAndDrop",
                    description: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"
                },
            ]

            for (const items of listAction) {

                const title = page.locator("//input[@id='note-title']");
                const content = page.locator("//textarea[@id='note-content']");
                const addNote = page.locator("//button[@id='add-note']");

                await title.fill(items.name);
                await content.fill(items.description);
                await addNote.click();
            }
        })
    })

    test("Test 2: Search for keyword 'một hoặc nhiều'", async ({ page }) => {
        await test.step("step 1: click 'Bài học 4: Personal notes'", async () => {
            await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
        });

        await test.step("step 2: adding 10 notes based on the given table", async () => {
            const listAction = [
                {
                    name: "click",
                    description: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"
                },
                {
                    name: "fill",
                    description: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"
                },
                {
                    name: "type",
                    description: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"
                },
                {
                    name: "hover",
                    description: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"
                },
                {
                    name: "check",
                    description: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"
                },
                {
                    name: "uncheck",
                    description: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"
                },
                {
                    name: "selectOption",
                    description: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"
                },
                {
                    name: "press",
                    description: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"
                },
                {
                    name: "dbclick",
                    description: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"
                },
                {
                    name: "dragAndDrop",
                    description: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"
                },
            ]

            for (const items of listAction) {

                const title = page.locator("//input[@id='note-title']");
                const content = page.locator("//textarea[@id='note-content']");
                const addNote = page.locator("//button[@id='add-note']");

                await title.fill(items.name);
                await content.fill(items.description);
                await addNote.click();
            }
        })

        await test.step("step 3: Search for keyword 'một hoặc nhiều'", async () => {
            const searchField = page.locator("//input[@id='search']");
            await searchField.fill("một hoặc nhiều");
        })
    })
})