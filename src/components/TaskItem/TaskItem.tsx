// src/components/TaskItem/TaskItem.tsx
import type { TaskItemProps, TaskStatus } from '../../types';

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  // Priority text color helper
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#dc2626'; // red
      case 'medium':
        return '#d97706'; // amber / gold
      case 'low':
      default:
        return '#16a34a'; // green
    }
  };

  // Status dropdown styling helper matching the assignment screenshot
  const getStatusSelectStyle = (status: TaskStatus) => {
    switch (status) {
      case 'pending':
        return {
          backgroundColor: '#fef9c3', // light warm yellow tint
          color: '#a16207',
          borderColor: '#fef08a',
        };
      case 'in-progress':
        return {
          backgroundColor: '#ffffff',
          color: '#2563eb', // blue
          borderColor: 'transparent',
        };
      case 'completed':
      default:
        return {
          backgroundColor: '#ffffff',
          color: '#16a34a', // green
          borderColor: 'transparent',
        };
    }
  };

  const statusStyle = getStatusSelectStyle(task.status);

  return (
    <div
      style={{
        border: '1px solid #334155',
        borderRadius: '8px',
        padding: '16px 20px',
        marginBottom: '16px',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Top Row: Title on Left, Status Dropdown + Delete Link on Right */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <h3
            style={{
              margin: '0 0 4px 0',
              fontSize: '16px',
              fontWeight: 600,
              color: '#0f172a',
            }}
          >
            {task.title}
          </h3>
          <p
            style={{
              margin: '0 0 14px 0',
              color: '#475569',
              fontSize: '14px',
            }}
          >
            {task.description}
          </p>
        </div>

        {/* Top-Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
            style={{
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              border: `1px solid ${statusStyle.borderColor}`,
              backgroundColor: statusStyle.backgroundColor,
              color: statusStyle.color,
            }}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          {/* Delete Button styled as simple red text button */}
          <button
            onClick={() => onDelete(task.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ef4444',
              fontSize: '14px',
              cursor: 'pointer',
              padding: 0,
              fontWeight: 400,
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Bottom Row: Priority and Due Date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13px' }}>
        <span style={{ color: getPriorityColor(task.priority), fontWeight: 500 }}>
          Priority: {task.priority}
        </span>
        <span style={{ color: '#64748b' }}>
          Due: {task.dueDate}
        </span>
      </div>
    </div>
  );
}