export type TTaskList = {
    taskName: string,
    priority: string,
    status: 'To do' | 'In Process' | 'Done',
    statusProcess: 'To do' | 'In Process' | 'Done',
}