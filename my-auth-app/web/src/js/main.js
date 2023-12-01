// web/src/js/main.js
function submitLoginForm(event) {
  event.preventDefault(); // 기본 폼 전송 동작 방지
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 서버로 로그인 정보 전송 (Ajax 또는 fetch 등 사용)
  fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message); // 로그인 결과 메시지
    })
    .catch((error) => {
      console.error("Error during login:", error);
    });
}

function submitSignupForm(event) {
  event.preventDefault(); // 기본 폼 전송 동작 방지
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Password and Confirm Password do not match");
    return;
  }

  // 서버로 회원가입 정보 전송 (Ajax 또는 fetch 등 사용)
  fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message); // 회원가입 결과 메시지
    })
    .catch((error) => {
      console.error("Error during signup:", error);
    });
}
