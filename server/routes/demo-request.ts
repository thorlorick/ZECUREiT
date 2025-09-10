import { RequestHandler } from "express";
import { z } from "zod";
import { DemoRequestPayload, DemoRequestResponse } from "@shared/api";

const DemoRequestSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().min(1).max(200),
  role: z.string().max(100).optional(),
  teamSize: z.string().max(50).optional(),
  phone: z.string().max(50).optional(),
  useCase: z.string().max(2000).optional(),
  compliance: z.array(z.string()).optional(),
  agreeToPrivacy: z.boolean().refine((v) => v === true, {
    message: "You must agree to the privacy policy",
  }),
});

export const handleDemoRequest: RequestHandler = (req, res) => {
  const result = DemoRequestSchema.safeParse(req.body as DemoRequestPayload);
  if (!result.success) {
    return res.status(400).json({
      status: "error",
      errors: result.error.flatten(),
    });
  }

  // In a real app, save to DB or send to CRM/email here
  const payload = result.data;
  const requestId = Math.random().toString(36).slice(2);
  const response: DemoRequestResponse = {
    status: "ok",
    requestId,
    receivedAt: new Date().toISOString(),
  };

  // Avoid logging sensitive data, log minimal metadata
  console.info("demo_request", {
    requestId,
    email: payload.email,
    company: payload.company,
  });

  res.status(200).json(response);
};
