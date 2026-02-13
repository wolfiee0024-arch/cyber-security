async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // FAIL SECURE: if anything is empty -> deny
  if (!username || !password) {
    alert("Access Denied: Username and Password required.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include"
    });

    if (response.ok) {
      const data = await response.json();
      // Store session info if needed
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);
      localStorage.setItem("role", data.role);
      window.location.href = "index.html";
    } else {
      alert("Access Denied: Invalid credentials.");
    }
  } catch (error) {
    alert("Access Denied: Server error.");
    console.error(error);
  }
}
