import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Since the app is client-side only (LocalStorage), we don't need real API routes 
  // for the core functionality requested.
  // We just serve the static frontend.
  
  // Optional: We could add a simple health check or time endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return httpServer;
}
