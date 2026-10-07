import { useState } from 'react';

function Sidebar({ onAddTask, totalTasks, completedCount, inProgressCount, pendingCount }) {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    onAddTask(taskText, priority, dueDate);
    setTaskText('');
  };

  return (
    <div className="flex-grow-1 flex-shrink-0" style={{ flexBasis: '280px' }}>
      <div className="card shadow-sm border-0 p-4 mb-4 bg-white rounded-4">
        <h5 className="card-title fw-semibold mb-3 text-dark">Add New Task</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Task description..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <select 
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Urgent">Urgent Priority</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill py-2">
            <i className="bi bi-plus-lg me-1"></i> Add Todo
          </button>
        </form>
      </div>

      <div className="card shadow-sm border-0 p-4 mb-4 bg-white rounded-4">
        <h5 className="card-title fw-semibold mb-3 text-dark">Dashboard</h5>
        <ul className="list-unstyled space-y-3 fs-6 mb-0">
          <li className="mb-2">
            <i className="bi bi-calendar-event me-2 text-secondary"></i> Total Tasks: {totalTasks}
          </li>
          <li className="mb-2">
            <i className="bi bi-check2-circle me-2 text-success"></i> Completed: {completedCount}
          </li>
          <li className="mb-2">
            <i className="bi bi-arrow-repeat me-2 text-info"></i> In Progress: {inProgressCount}
          </li>
          <li className="mb-2">
            <i className="bi bi-clock me-2 text-warning"></i> Pending: {pendingCount}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;