# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: usingExcleData.spec.ts >> ERp Management Module >> Customer data using Excel Palanadu4
- Location: tests\usingExcleData.spec.ts:42:12

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "http://webapp.qedgetech.com/", waiting until "load"

```

```
Error: locator.waitFor: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogoutPage{
  4  |     page:Page
  5  |     readonly clickLogout:Locator
  6  |     constructor(page:Page)
  7  |     {
  8  |         this.page =page
  9  |         this.clickLogout = page.locator('li#mi_logout')
  10 |     }
  11 |     async ERpLogout()
  12 |     {
> 13 |         await this.clickLogout.waitFor()
     |                                ^ Error: locator.waitFor: Target page, context or browser has been closed
  14 |         await this.clickLogout.click()
  15 |     }
  16 | }
```