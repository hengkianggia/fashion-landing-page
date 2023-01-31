   const hamburger = document.querySelector("#burger");

    const menu = document.querySelector("#menu");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      menu.classList.toggle("-top-0");
      console.log('wowo')
    });

    button.addEventListener("click", function () {
      button.classList.add("animate__animated", " animate__bounceIn");
    });