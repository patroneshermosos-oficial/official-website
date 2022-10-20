//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = 
    `
    <footer class="pt-5">
      <div class="container">
        <!-- Row START -->
        <div class="row g-4">
          <!-- Widget 1 START -->
          <div class="col-lg-4">
            <!-- logo -->
            <a class="me-0" href="index.html">
              <img
                class="light-mode-item h-40px"
                src="assets/images/logo.svg"
                alt="logo"
              />
              <img
                class="dark-mode-item h-40px"
                src="assets/images/logo-light.svg"
                alt="logo"
              />
            </a>
            <p class="my-3">
              Patrones Hermosos provee educación de calidad y accesible desde 2018: de mujeres
              para mujeres. Por más mujeres latinas en STEM. 
            </p>
            <!-- Social media icon -->
            <ul class="list-inline mb-0 mt-3">
              <li class="list-inline-item">
                <a
                  class="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="https://www.facebook.com/patroneshermosos.oficial"
                  target="_blank"
                  ><i class="fab fa-fw fa-facebook-f"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="https://www.instagram.com/patroneshermosos.oficial/"
                  target="_blank"
                  ><i class="fab fa-fw fa-instagram"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn btn-white btn-sm shadow px-2 text-twitter"
                  href="https://twitter.com/patronesh"
                  target="_blank"
                  ><i class="fab fa-fw fa-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="https://www.linkedin.com/company/patroneshermosos/"
                  target="_blank"
                  ><i class="fab fa-fw fa-linkedin-in"></i
                ></a>
              </li> 
            </ul>
            <p class="my-3">
              ¿Preguntas? preguntas@patronas.org
            </p> 
          </div>
          <!-- Widget 1 END -->

          <!-- Widget 2 START -->
          <div class="col-lg-8">
            <div class="row g-4">
              <!-- Link block -->
              <div class="col-6 col-md-4">
                <h5 class="mb-2 mb-md-4">Nosotras</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Cursos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Eventos</a>
                  </li>      
                  <li class="nav-item"><a class="nav-link" href="#">Faq</a></li>        
                </ul>
              </div>

              <!-- Link block -->
              <div class="col-6 col-md-4">
                <h5 class="mb-2 mb-md-4">Comunidad</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sponsors</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Universidades</a>
                  </li>
                </ul>
              </div>

              <!-- Link block -->
              <div class="col-6 col-md-4">
                <h5 class="mb-2 mb-md-4">Únete</h5>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" href="#">¿Quieres ser instructora?</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Únete al equipo</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Widget 2 END -->
        </div>
        <!-- Row END -->

        <!-- Divider -->
        <hr class="mt-4 mb-0" />

        <!-- Bottom footer -->
        <div class="py-3">
          <div class="container px-0">
            <div
              class="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left"
            >
              <!-- copyright text -->
              <div class="text-primary-hover">
                Copyrights <a href="#" class="text-body">©2018 Patrones Hermosos</a>. Derechos reservados.
              </div>
              <!-- copyright links-->
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
    var footer = document.getElementById('footer');
    footer.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();