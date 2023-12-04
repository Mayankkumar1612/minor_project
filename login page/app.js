const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////
const signUpForm = document.querySelector('.sign-up-form');

async function signup(event) {
  event.preventDefault();

  const userType = signUpForm.querySelector('input[list="browsers"]').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log(userType, username, email, password);

  try {
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userType, username, email, password }),
    });

    if (response.ok) {
      window.open("personal.html")
      console.log('User registered successfully');
    } else {
      const data = await response.json();
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
};

/////////////////////////////////////////////////////////////////////////////////

const loginForm = document.querySelector('.sign-in-form');

async function login(event) {
  event.preventDefault();

  const userType = loginForm.querySelector('input[list="browsers"]').value;
  const email = loginForm.querySelector('#loginEmail').value;
  const password = loginForm.querySelector('#loginPassword').value;

  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userType , email, password }),
    });

    if (response.ok) {
      window.open("personal.html");
      console.log('Login successful');
    } else {
      const data = await response.json();
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
