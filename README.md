# Anime/Manga Hub

## Overview
This project is a full-stack Anime/Manga hub with a Node.js/MongoDB backend (deployed as Vercel serverless functions) and a static HTML/CSS/JS frontend.

## Deployment (Vercel)

### 1. **Frontend**
- All static files are in the `/public` directory and served automatically by Vercel.

### 2. **Backend (API)**
- API endpoints are in `/api` as serverless functions.
- MongoDB connection uses the `MONGODB_URI` environment variable (set this in Vercel dashboard).

### 3. **Environment Variables**
- Set `MONGODB_URI` in your Vercel project settings.

### 4. **How to Deploy**
1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Set the `MONGODB_URI` environment variable in Vercel dashboard.
4. Deploy!

## Local Development
- Install Vercel CLI: `npm i -g vercel`
- Run: `vercel dev`

## Project Structure
- `/public` - Static frontend
- `/api` - Serverless backend (Node.js, MongoDB) "# Animejs" 
"# Animejs" 
