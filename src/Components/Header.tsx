import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
  };
  console.log(onLogin);
  return (
    <form
      className="space-y-4"
      aria-labelledby="signin-title"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="E-mail"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Password"
        />
      </div>
      <div className="text-right">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Sign In
      </button>
    </form>
  );
};
