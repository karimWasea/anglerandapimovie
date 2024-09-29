import { Pagination } from "./pagination";

// api-response.interface.ts
export interface ApiResponse<T> {
    success: boolean;         // Indicates whether the operation was successful
    message: string;          // Holds any message (e.g., success or error message)
    data: T;                  // The actual data payload (can be any type)
    pagination?: Pagination;  // Optional pagination details
  }
