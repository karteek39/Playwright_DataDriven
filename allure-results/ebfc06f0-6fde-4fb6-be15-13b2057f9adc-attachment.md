# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test.spec.ts >> he
- Location: tests\test.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Name' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link [ref=e4] [cursor=pointer]:
    - /url: https://flights.qedgetech.com/
    - img "Flight Reservation" [ref=e5]
  - generic [ref=e8]:
    - paragraph [ref=e9]: Login
    - generic [ref=e10]:
      - generic [ref=e11]:
        - textbox "Email ID" [ref=e12]
        - generic: ✉
      - generic [ref=e13]:
        - textbox "Password" [ref=e14]
        - generic: 
      - generic [ref=e15]:
        - generic [ref=e16]:
          - text: New Customer?
          - link "Register" [ref=e17] [cursor=pointer]:
            - /url: https://flights.qedgetech.com/register.html
          - text: today.
        - button "Sign In" [ref=e19] [cursor=pointer]
    - link "I forgot my password" [ref=e20] [cursor=pointer]:
      - /url: https://flights.qedgetech.com/forgot_password.html
```

# Test source

```ts
  1 | import test from "@playwright/test";
  2 | 
  3 | test('he',async({page})=>{
  4 |     await page.goto('https://flights.qedgetech.com/user/dandu.html')
  5 |     await page.waitForLoadState
> 6 |     await page.getByRole('textbox',{name:'Name'}).fill('adminnjajknasnjas')
    |                                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  7 |    // await page.getByRole('textbox',{name:'User Name'}).fill('admin23131')
  8 | })
```