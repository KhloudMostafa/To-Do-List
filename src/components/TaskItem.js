import { useState } from 'react';

function TaskItem({ task, onChangeStatus, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editDate, setEditDate] = useState(task.date);

  const handleSave = () => {
    if (!editText.trim()) return;
    onEdit(task.id, editText, editPriority, editDate);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setEditPriority(task.priority);
    setEditDate(task.date);
    setIsEditing(false);
  };

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

      {isEditing ? (
        <>
          <td>
            <input 
              type="text" 
              className="form-control form-control-sm" 
              value={editText} 
              onChange={(e) => setEditText(e.target.value)} 
            />
          </td>
          <td>
            <input 
              type="date" 
              className="form-control form-control-sm" 
              value={editDate} 
              onChange={(e) => setEditDate(e.target.value)} 
            />
          </td>
          <td>
            <select 
              className="form-select form-select-sm" 
              value={editPriority} 
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Urgent">Urgent</option>
            </select>
          </td>
          <td>
            <button className="btn btn-sm btn-success me-1 border-0" onClick={handleSave}>
              <i className="bi bi-check-lg"></i>
            </button>
            <button className="btn btn-sm btn-secondary border-0" onClick={handleCancel}>
              <i className="bi bi-x-lg"></i>
            </button>
          </td>
        </>
      ) : (
        <>
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
              className="btn btn-sm btn-outline-primary border-0 me-1"
              onClick={() => setIsEditing(true)}
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button 
              className="btn btn-sm btn-outline-danger border-0"
              onClick={() => onDelete(task.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </>
      )}
    </tr>
  );
}

export default TaskItem;