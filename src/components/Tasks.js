const tasks = [

    {
        id: 1,
        text: 'a thing to do',
        day: 'June 15th @ 2:45p',
        reminder: true
    },
    {
        id: 2,
        text: 'another thing to do',
        day: 'June 16th @ 3:45p',
        reminder: true
    },
    {
        id: 3,
        text: 'a third thing',
        day: 'June 17th @ 5:15p',
        reminder: true
    }
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                // <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
                <h3>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks