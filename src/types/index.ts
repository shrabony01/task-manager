export type TaskStatus = 'pending' | 'in-progress' | 'completed' ;
export type TaskPriority = 'low'|'medium'|'high';

 export interface Task {
    id:string;
    description : string;
    status : TaskStatus;
    priority: TaskPriority;
    dueDate : string;

}

export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId:string, newStatus:TaskStatus) =>void;
    onDelete:(taskId:string)=>void;
}

export interface TaskItemProps {
    task : Task;
    onStatusChnage : (taskId:string,newStatus:TaskStatus) => void;
    onDelete : (taskId : string) => void;

}
export interface FiltersState{
    status? : TaskStatus;
    priority?:TaskPriority;
}

export interface TaskFilterProps{
    onFilterChange:(filters:FiltersState)=>void;
}