fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello, backend!" }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Response:", data))
    .catch((err) => console.error("Error:", err));
  
