Project Name: Dev Stack
Description: A platform where developers can explore technologies and build their own technology stack.
Technologies: React, TypeScript, Tailwind CSS, JavaScript
3 Features:
Explore technologies by category.
Add and remove technologies from your personal stack.
Responsive design for mobile, tablet, and desktop.



1.

JSX lets us write HTML-like code inside JavaScript/TypeScript. It is used to create React UI easily.

2. Props vs State
Props: Data passed from parent to child.
State: Data managed inside a component that can change.
3. What does useState do?

useState manages changing data. In our project, it manages technologies and stack.

4. What does useEffect do?

useEffect handles side effects. We used it to fetch technology data from data.json.

5. Why use key in .map()?

A unique key helps React identify each list item efficiently.

6. What is conditional rendering?

Showing different UI based on a condition. For example, showing “Your stack is empty” when stack.length === 0.

7. Parent → Child and Child → Parent
Parent → Child: Pass data using props.
Child → Parent: Pass a function as a prop and call it from the child.

<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories. -->
