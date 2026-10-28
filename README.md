# Task Management Application (Lab 3)

This is a React and TypeScript application built with Vite to practice rendering dynamic lists, handling unique keys, passing props and callbacks, and applying conditional rendering and styles.

---

## What the App Does

- Displays a list of tasks with titles, descriptions, due dates, status, and priority tags.
- Color codes priority badges: Green for Low, Amber/Yellow for Medium, and Red for High.
- Changes task card appearance when completed (adds a line-through on the title and dims the background).
- Allows users to change a task's status (`pending`, `in-progress`, `completed`) using a dropdown.
- Allows users to delete tasks from the list with a Delete button.
- Filters tasks by Status, Priority, or both.
- Displays an empty state message if no tasks match the selected filters.


## Reflection Questions

### 1. How did you ensure unique keys for your list items?
I used `key={task.id}` when mapping over the tasks list. Every task already has its own unique ID string, so using `task.id` tells React exactly which card is which. I avoided using array index numbers because that can mess up the cards when deleting or filtering items.

### 2. What considerations did you make when implementing the filtering functionality?
I kept the original tasks in state and saved the user's dropdown choices in a separate filter state. Then I used `.filter()` to decide what to show on screen. That way, the real list is never deleted, and when the user selects "All Statuses" or "All Priorities", all tasks show right back up.

### 3. How did you handle state updates for task status changes?
I used `prevTasks.map()` to loop through the tasks. When it found the task with the matching ID, it created a copy of that task with the new status using `{ ...task, status: newStatus }`. All other tasks stayed untouched.

### 4. What challenges did you face when implementing conditional rendering?
One challenge was making sure the priority colors still showed properly even when a task was marked completed and grayed out. Another issue was TypeScript giving errors on imports until I added the `type` keyword (`import type { ... }`).