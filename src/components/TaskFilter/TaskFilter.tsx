// src/components/TaskFilter/TaskFilter.tsx
import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus, TaskPriority } from '../../types';

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // Track selected dropdown values locally
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  // Handle status dropdown changes
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedStatus(value);

    // Notify parent (App.tsx) of the new filter combination
    onFilterChange({
      status: value === 'all' ? undefined : (value as TaskStatus),
      priority: selectedPriority === 'all' ? undefined : (selectedPriority as TaskPriority),
    });
  };

  // Handle priority dropdown changes
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPriority(value);

    // Notify parent (App.tsx) of the new filter combination
    onFilterChange({
      status: selectedStatus === 'all' ? undefined : (selectedStatus as TaskStatus),
      priority: value === 'all' ? undefined : (value as TaskPriority),
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        padding: '16px',
        marginBottom: '20px',
        backgroundColor: '#f1f5f9',
        borderRadius: '8px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {/* Status Filter Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', textTransform: 'uppercase' }}>
          Status
        </label>
        <select
          value={selectedStatus}
          onChange={handleStatusChange}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            fontSize: '14px',
            minWidth: '150px',
            cursor: 'pointer',
          }}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Priority Filter Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', textTransform: 'uppercase' }}>
          Priority
        </label>
        <select
          value={selectedPriority}
          onChange={handlePriorityChange}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#ffffff',
            fontSize: '14px',
            minWidth: '150px',
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