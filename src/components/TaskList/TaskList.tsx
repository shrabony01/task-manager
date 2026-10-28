// src/components/TaskList/TaskList.tsx
import { TaskListProps } from '../../types';
import { TaskItem } from '../TaskItem/TaskItem';

export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  // 1. Conditional Rendering: Check if the list is empty
  if (tasks.length === 0) {
    return (
      <div
        style={{
          padding: '40px 20px',
          textAlign: 'center',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px dashed #cbd5e1',
          color: '#64748b',
        }}
      >
        <p style={{ margin: 0, fontSize: '15px' }}>
          No tasks found matching your criteria.
        </p>
      </div>
    );
  }

  // 2. List Rendering: Loop over tasks array with .map() and provide key={task.id}
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}