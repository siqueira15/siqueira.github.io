<!DOCTYPE html>
<html lang="pt-br" class="!scroll-smooth">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
  <link href="./build/output.css" rel="stylesheet" />
  <link href="./css/hamburger.css" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Siqueira</title>

    <!-- Flipbook StyleSheet -->
    <link href="lib/css/min.css" rel="stylesheet" type="text/css">
    <!-- Icons Stylesheet -->
    <link href="lib/css/themify-icons.min.css" rel="stylesheet" type="text/css">
</head>

<body>
  <div>
    <header class="bg-[#0042c1] z-50" id="home">
      <nav class="bg-transparent w-full">
        <div class="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <div class="py-3">
              <a class="flex items-center cursor-pointer" href="/">
                <img class="w-48" src="./assets/logo-siqueira.webp" alt="logo-siqueira" />
              </a>
            </div>

            <!-- Mobile menu button -->
            <button class="hamburger hamburger--collapse" type="button" id="btn-mobile">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <!-- Mobile Menu open: 'block', Menu closed: 'hidden' -->
          <nav class="hidden items-center pt-8 md:pt-0 md:flex" id="menu-spande">
            <ul class="flex flex-col md:mx-6 md:flex-row menu-ativo">
              <li>
                <a class="duration-200 transform my-1 text-sm font-medium text-white hover:text-green-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear font-roboto"
                  href="/">INICIO</a>
              </li>

              <li>
                <a class="duration-200 transform my-1 text-sm font-medium text-white hover:text-green-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear font-roboto"
                  href="/sobre-nos">SOBRE</a>
              </li>

              <li>
                <a class="duration-200 transform my-1 text-sm font-medium text-white hover:text-green-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear font-roboto"
                  href="/servicos">DESTAQUE</a>
              </li>

              <li>
                <a class="duration-200 transform my-1 text-sm font-medium text-white hover:text-green-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear font-roboto"
                  href="/revista">REVISTA</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>

    
<div class="flex justify-center w-full"><div class="max-w-3xl" id="flipbookContainer"></div></div>

  <footer>
    <div class="bg-[#0042c1] flex flex-col py-3">
      <p class="text-white font-roboto font-light text-center text-xs px-5 md:text-sm">
        © 2024 - MDB – Movimento Democrático do Brasil Tucuruí - Pará  |  Todos os
        direitos reservados - CNPJ: 15.471.532/0001-84
      </p>
    </div>
  </footer>


    <!-- jQuery  -->
    <script src="lib/js/libs/jquery.min.js" type="text/javascript"></script>
    <!-- Flipbook main Js file -->
    <script src="lib/js/dflip.min.js" type="text/javascript"></script>
    <!-- Flipbook main Js file -->
    <script>
      jQuery(document).ready(function () {
        //uses source from online(make sure the file has CORS access enabled if used in cross-domain)
        var pdf = 'https://drive.google.com/file/d/1CUiHYB14ZYDTdwg28m5YmYxziiSzuaQM/view?usp=drive_link';
        var options = {
          height:2000,
          duration: 700,
          backgroundColor: "#fff"
        };
        var flipBook = $("#flipbookContainer").flipBook(pdf, options);
      });
    </script>

  <script type="module" src="./main.js"></script>
</body>

</html>