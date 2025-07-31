// Simple in-memory storage (in production, you'd use a database)
let todos = [
  {
    _id: "1",
    title: "Welcome to Todo Dashboard",
    description: "This is your first todo item",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export default function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { method } = req;

  switch (method) {
    case "GET":
      return getTodos(req, res);
    case "POST":
      return createTodo(req, res);
    case "PUT":
      return updateTodo(req, res);
    case "DELETE":
      return deleteTodo(req, res);
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res
        .status(405)
        .json({ success: false, message: `Method ${method} Not Allowed` });
  }
}

function getTodos(req, res) {
  try {
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch todos",
    });
  }
}

function createTodo(req, res) {
  try {
    const { title, description } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const newTodo = {
      _id: Date.now().toString(),
      title: title.trim(),
      description: description ? description.trim() : "",
      completed: false,
      createdAt: new Date().toISOString(),
    };

    todos.unshift(newTodo);

    res.status(201).json({
      success: true,
      data: newTodo,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to create todo",
    });
  }
}

function updateTodo(req, res) {
  try {
    const { id } = req.query;
    const updates = req.body;

    const todoIndex = todos.findIndex((todo) => todo._id === id);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updates };

    res.status(200).json({
      success: true,
      data: todos[todoIndex],
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to update todo",
    });
  }
}

function deleteTodo(req, res) {
  try {
    const { id } = req.query;

    const todoIndex = todos.findIndex((todo) => todo._id === id);

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    todos.splice(todoIndex, 1);

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to delete todo",
    });
  }
}
