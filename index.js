const express = require('express');
const app = express();

app.use(express.json());

let todo = [
    { id: 1, task: "Wake up at 8am" }
];

// GET: Retrieve all tasks
app.get("/", (req, res) => {
    res.json(todo);
});

// POST: Add a new task
app.post("/", (req, res) => {
    const { id, task } = req.body;
    if (!id || !task) {
        return res.status(400).json({ error: "ID and task are required" });
    }
    todo.push({ id, task });
    res.json({ message: "Task added successfully", todo });
});

// PUT: Update a specific task by ID
app.put("/", (req, res) => {
    const { id, task } = req.body;
    if (!id || !task) {
        return res.status(400).json({ error: "ID and task are required for updating" });
    }
    todo = todo.map(t => (t.id === id ? { ...t, task } : t));
    res.json({ message: "Task updated successfully", todo });
});

// DELETE: Remove a specific task by ID
app.delete("/", (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) {
        return res.status(400).json({ error: "ID is required for deletion" });
    }
    const initialLength = todo.length;
    todo = todo.filter(t => t.id !== id);
    
    if (todo.length === initialLength) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully", todo });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
