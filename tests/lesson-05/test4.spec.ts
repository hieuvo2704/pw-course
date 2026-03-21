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
            const title = page.locator("//input[@id='note-title']");
            const content = page.locator("//textarea[@id='note-content']");
            const addNote = page.locator("//button[@id='add-note']")

            await title.fill("click");
            await content.fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
            await addNote.click();

            await title.fill("fill");
            await content.fill("Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web");
            await addNote.click();

            await title.type("type");
            await content.type("Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng");
            await addNote.click();

            await title.fill("hover");
            await content.fill("Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover");
            await addNote.click();

            await title.fill("check");
            await content.fill("Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
            await addNote.click();

            await title.fill("uncheck");
            await content.fill("Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
            await addNote.click();

            await title.fill("selectOption");
            await content.fill("Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown");
            await addNote.click();

            await title.fill("press");
            await content.fill("Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
            await addNote.click();

            await title.fill("dbclick");
            await content.fill("Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
            await addNote.click();

            await title.fill("dragAndDrop");
            await content.fill("Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web");
            await addNote.click();
        })
    })

    test("Test 2: Search for keyword 'một hoặc nhiều'", async ({ page }) => {
        await test.step("step 1: click 'Bài học 4: Personal notes'", async () => {
            await page.locator("//a[contains(text(),'Bài học 4: Personal notes')]").click();
        });

        await test.step("step 2: adding 10 notes based on the given table", async () => {
            const title = page.locator("//input[@id='note-title']");
            const content = page.locator("//textarea[@id='note-content']");
            const addNote = page.locator("//button[@id='add-note']")

            await title.fill("click");
            await content.fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
            await addNote.click();

            await title.fill("fill");
            await content.fill("Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web");
            await addNote.click();

            await title.type("type");
            await content.type("Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng");
            await addNote.click();

            await title.fill("hover");
            await content.fill("Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover");
            await addNote.click();

            await title.fill("check");
            await content.fill("Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
            await addNote.click();

            await title.fill("uncheck");
            await content.fill("Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
            await addNote.click();

            await title.fill("selectOption");
            await content.fill("Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown");
            await addNote.click();

            await title.fill("press");
            await content.fill("Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
            await addNote.click();

            await title.fill("dbclick");
            await content.fill("Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
            await addNote.click();

            await title.fill("dragAndDrop");
            await content.fill("Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web");
            await addNote.click();
        })

        await test.step("step 3: Search for keyword 'một hoặc nhiều'", async () => {
            const searchField = page.locator("//input[@id='search']");
            await searchField.fill("một hoặc nhiều");
        })
    })
})