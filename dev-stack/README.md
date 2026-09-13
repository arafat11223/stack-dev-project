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

