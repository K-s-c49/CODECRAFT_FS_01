This project provides a complete, secure user authentication flow using the MERN stack. Users can register with a unique username and email,
and their passwords are hashed using bcryptjs before being stored in MongoDB, ensuring that no plain‑text passwords are saved. 
The backend exposes REST APIs for registration, login, and fetching the current authenticated user, 
and uses JWT tokens (optionally in HTTP‑only cookies) to protect private routes and verify user identity on each request.

On the frontend, a React UI offers registration and login forms, basic validation, and state management to store the authenticated user and token. 
After logging in, users can access protected pages, while unauthenticated requests are redirected to the login screen. This project is a solid 
starting point for any application that needs secure, modern authentication and can be extended with features like password reset, email verification,
roles/permissions, and full profile management.
