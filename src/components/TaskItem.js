function TaskItem({ task, onChangeStatus, onDelete }) {
  const getPriorityBadgeClass = (p) => {
    switch (p) {
      case 'Urgent': return 'bg-danger-subtle text-danger';
      case 'Medium': return 'bg-primary-subtle text-primary';
      case 'Low': return 'bg-warning-subtle text-warning';
      default: return 'bg-light text-dark';
    }
  };

  const getStatusBadgeClass = (s) => {
    switch (s) {
      case 'Completed': return 'bg-success-subtle text-success';
      case 'In Progress': return 'bg-info-subtle text-info';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  return (
    <tr className={task.status === 'Completed' ? 'table-light text-muted' : ''}>
      <td>
        <select 
          className={`form-select form-select-sm rounded-pill border-0 fw-medium ${getStatusBadgeClass(task.status)}`}
          value={task.status}
          onChange={(e) => onChangeStatus(task.id, e.target.value)}
          style={{ minWidth: '120px' }}
        >
          <option value="Todo">📝 Todo</option>
          <option value="In Progress">⏳ In Progress</option>
          <option value="Completed">✅ Completed</option>
        </select>
      </td>
      <td className="fw-medium text-dark" style={{ textDecoration: task.status === 'Completed' ? 'line-through' : 'none' }}>
        {task.text}
      </td>
      <td className="text-secondary fs-7">{task.date}</td>
      <td>
        <span className={`badge rounded-pill ${getPriorityBadgeClass(task.priority)}`}>
          {task.priority}
        </span>
      </td>
      <td>
        <button 
          className="btn btn-sm btn-outline-danger border-0"
          onClick={() => onDelete(task.id)}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;