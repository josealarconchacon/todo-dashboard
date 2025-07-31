# Deployment Guide

## Issue Fixed

The error `Failed to load resource: net::ERR_CONNECTION_REFUSED` was caused by the frontend trying to connect to `http://localhost:3000/api` when deployed on Vercel. This doesn't work because:

1. There's no backend server running on localhost in production
2. The frontend needs to connect to a deployed backend API

## Solution Implemented

I've created a simple backend API using Vercel serverless functions in the `api/todos.js` file. This provides:

- GET `/api/todos` - Fetch all todos
- POST `/api/todos` - Create a new todo
- PUT `/api/todos/[id]` - Update a todo
- DELETE `/api/todos/[id]` - Delete a todo

## How to Deploy

### Option 1: Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app

3. **Deploy**: Vercel will automatically deploy both your frontend and the API functions

### Option 2: Use External Backend

If you prefer to use a separate backend service:

1. **Deploy your backend** to services like:

   - Railway
   - Render
   - Heroku
   - DigitalOcean

2. **Set environment variable** in Vercel:
   - Go to your Vercel project settings
   - Add environment variable: `VITE_API_URL`
   - Set value to your backend URL (e.g., `https://your-backend.railway.app/api`)

## Environment Variables

The app now uses environment variables for API configuration:

- **Development**: Uses `http://localhost:3000/api` (for local development)
- **Production**: Uses `/api` (for Vercel serverless functions) or your custom `VITE_API_URL`

## Testing

After deployment:

1. **Visit your Vercel URL**
2. **Try adding a todo** - it should work without connection errors
3. **Check the Network tab** in browser dev tools to see API calls to `/api/todos`

## Notes

- The current implementation uses in-memory storage (todos reset on server restart)
- For production, consider using a database like MongoDB, PostgreSQL, or Supabase
- The API includes CORS headers to allow frontend requests
