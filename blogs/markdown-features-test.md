---
title: 'Markdown Features Test'
date: '2025-01-01'
description: 'A comprehensive test of all markdown features'
---

# All Markdown Features Test

This post demonstrates **all** markdown features supported by your blog.

## Text Formatting

**Bold text** and *italic text* and ***bold italic***.

~~Strikethrough text~~ and regular text.

## Headers

### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

## Lists

### Unordered Lists
- Item 1
- Item 2
  - Nested item 1
  - Nested item 2
    - Double nested
- Item 3

### Ordered Lists
1. First item
2. Second item
   1. Nested numbered
   2. Another nested
3. Third item

### Task Lists (GFM)
- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task

## Tables

| Feature | Status | Notes |
|---------|--------|-------|
| Headers | ✅ Working | All levels supported |
| Lists | ✅ Working | Nested and ordered |
| Tables | ✅ Working | With borders and hover |
| Code | ✅ Working | Inline and blocks |

## Code

Inline `code` with backticks.

```javascript
// Code block with syntax highlighting
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("World");
```

```python
# Python example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

## Blockquotes

> This is a blockquote.
> 
> It can span multiple lines and include **formatting**.

## Links and Images

Visit [my website](https://durgaprasad.dev) for more content.

Auto-link: https://github.com

## Horizontal Rules

Above this line.

---

Below this line.

## Special Elements

### Keyboard Keys
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

### Abbreviations
The HTML specification is maintained by the W3C.

*[HTML]: HyperText Markup Language
*[W3C]: World Wide Web Consortium

### Definition Lists
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

## Collapsible Content

<details>
<summary>Click to expand</summary>

This content is hidden by default and can be toggled by clicking the summary.

You can include any markdown content here:
- Lists
- **Bold text**
- `Code`
- Links

</details>

## Math (if supported)

Inline math: $E = mc^2$

Block math:
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$

## Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

## Subscript and Superscript

H~2~O and E = mc^2^

## Advanced Features

### GitHub-Style Alerts

> [!NOTE]
> This is a note alert.

> [!WARNING]
> This is a warning alert.

> [!IMPORTANT]
> This is an important alert.

## Escaping Characters

You can escape special characters: \*not bold\* \`not code\`

## Mixed Content

Here's a complex example combining multiple features:

1. **First item** with `inline code`
   - Nested *italic* item
   - Another nested item with [a link](https://example.com)

2. **Second item** with a table:

   | Column 1 | Column 2 |
   |----------|----------|
   | Value 1  | Value 2  |

3. **Third item** with a code block:

   ```bash
   npm install
   npm run dev
   ```

---

That covers all the major markdown features! Your blog now supports everything from basic formatting to advanced GitHub Flavored Markdown features. 🎉 