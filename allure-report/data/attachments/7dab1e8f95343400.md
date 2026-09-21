# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> he
- Location: tests\test.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://webapp.qedgetech.com/login.php
Call log:
  - navigating to "https://webapp.qedgetech.com/login.php", waiting until "load"

```

# Test source

```ts
  1 | import test from "@playwright/test";
  2 | 
  3 | test('he',async({page})=>{
> 4 |     await page.goto('https://webapp.qedgetech.com/login.php')
    |                ^ Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://webapp.qedgetech.com/login.php
  5 |     await page.getByRole('textbox',{name:'User Name'}).clear()
  6 |     await page.getByRole('textbox',{name:'User Name'}).fill('admin23131')
  7 | })
```