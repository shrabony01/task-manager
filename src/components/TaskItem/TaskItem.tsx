// src/components/TaskItem/TaskItem.tsx
import React from 'react';
import { TaskItemProps, TaskStatus } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  // Helper for priority badge colors
  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'high':
        return { backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #f87171' };
      case 'medium':
        return { backgroundColor: '#fef3c7', color: '#92400e', border: '1px solid #fcd34d' };
      case 'low':
      default:
        return { backgroundColor: '#dcfce7', color: '#166534', border: '1px solid #86efac' };
    }
  };

  const isCompleted = task.status === 'completed';

  return (
    <div
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: isCompleted ? '#f8fafc' : '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        transition: 'all 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3
            style={{
              margin: '0 0 6px 0',
              fontSize: '18px',
              color: isCompleted ? '#64748b' : '#0f172a',
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          >
            {task.title}
          </h3>
          <p
            style={{
              margin: '0 0 12px 0',
              color: isCompleted ? '#94a3b8' : '#475569',
              fontSize: '14px',
            }}
          >
            {task.description}
          </p>
        </div>

        {/* Priority Badge */}
        <span
          style={{
            ...getPriorityStyle(task.priority),
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          {task.priority}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '8px',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        {/* Status Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>Status:</label>
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#ffffff',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Due Date & Delete Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>
            Due: <strong>{task.dueDate}</strong>
          </span>

          <button
            onClick={() => onDelete(task.id)}
            style={{
              padding: '6px 12px',
              backgroundColor: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.15s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};