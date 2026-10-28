// src/components/TaskFilter/TaskFilter.tsx
import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus, TaskPriority } from '../../types';

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedStatus(value);
    onFilterChange({
      status: value === 'all' ? undefined : (value as TaskStatus),
      priority: selectedPriority === 'all' ? undefined : (selectedPriority as TaskPriority),
    });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPriority(value);
    onFilterChange({
      status: selectedStatus === 'all' ? undefined : (selectedStatus as TaskStatus),
      priority: value === 'all' ? undefined : (value as TaskPriority),
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '28px',
        alignItems: 'center',
      }}
    >
      {/* Status Filter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>
          Status
        </label>
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          style={{
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            fontSize: '14px',
            color: '#334155',
            cursor: 'pointer',
          }}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Priority Filter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>
          Priority
        </label>
        <select
          value={selectedPriority}
          onChange={handlePriorityChange}
          style={{
            padding: '6px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            fontSize: '14px',
            color: '#334155',
            cursor: 'pointer',
          }}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}