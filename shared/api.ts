/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Request payload for requesting a product demo
 */
export interface DemoRequestPayload {
  name: string;
  email: string;
  company: string;
  role?: string;
  teamSize?: string;
  phone?: string;
  useCase?: string;
  compliance?: string[]; // e.g. ["HIPAA", "GDPR", "SOC 2"]
  agreeToPrivacy: boolean;
}

/**
 * Response returned after a demo request submission
 */
export interface DemoRequestResponse {
  status: "ok";
  requestId: string;
  receivedAt: string; // ISO date
}
