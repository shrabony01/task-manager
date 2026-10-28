// src/App.tsx
import { useState } from 'react';
import type { Task, TaskStatus, FilterState } from './types';
import { TaskList } from './components/TaskList/TaskList';
import { TaskFilter } from './components/TaskFilter/TaskFilter';

// 1. Initial sample tasks matching the lab assignment example
const INITIAL_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'low',
    dueDate: '12/31/2023',
  },
  {
    id: 'task-2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '1/1/2024',
  },
  {
    id: 'task-3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'completed',
    priority: 'high',
    dueDate: '1/2/2024',
  },
];

export default function App() {
  // Master state for the tasks list
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  // State to track current filter selections
  const [filters, setFilters] = useState<FilterState>({});

  // Handler: Update status for a single task immutably
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Handler: Remove a single task by its id immutably
  const handleDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Derived state: Compute visible tasks based on active filters
  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) {
      return false;
    }
    if (filters.priority && task.priority !== filters.priority) {
      return false;
    }
    return true;
  });

  return (
    <div style={{ maxWidth: '750px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 6px 0', fontSize: '28px', color: '#0f172a' }}>
          Task Manager
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
          Demonstrating React dynamic list rendering, key props, and conditional styling.
        </p>
      </header>

      {/* Filter component passes selected filters upward */}
      <TaskFilter onFilterChange={setFilters} />

      {/* TaskList renders the filtered tasks */}
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}