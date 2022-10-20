//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section class="py-0 py-xl-5">
        <div class="container">
          <div class="row g-4">
            <!-- Counter item -->
            <div class="col-sm-6 col-xl-3">
              <div
                class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3"
              >
                <span class="display-6 lh-1 text-warning mb-0"
                  ><i class="fas fa-tv"></i
                ></span>
                <div class="ms-4 h6 fw-normal mb-0">
                  <div class="d-flex">
                    <h5
                      class="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="10"
                      data-purecounter-delay="100"
                    >
                      0
                    </h5>
                    <span class="mb-0 h5">K</span>
                  </div>
                  <p class="mb-0">Cursos</p>
                </div>
              </div>
            </div>
            <!-- Counter item -->
            <div class="col-sm-6 col-xl-3">
              <div
                class="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-10 rounded-3"
              >
                <span class="display-6 lh-1 text-blue mb-0"
                  ><i class="fas fa-user-tie"></i
                ></span>
                <div class="ms-4 h6 fw-normal mb-0">
                  <div class="d-flex">
                    <h5
                      class="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="8"
                      data-purecounter-delay="200"
                    >
                      0
                    </h5>
                    <span class="mb-0 h5">+</span>
                  </div>
                  <p class="mb-0">Instructoras</p>
                </div>
              </div>
            </div>
            <!-- Counter item -->
            <div class="col-sm-6 col-xl-3">
              <div
                class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3"
              >
                <span class="display-6 lh-1 text-purple mb-0"
                  ><i class="fas fa-user-graduate"></i
                ></span>
                <div class="ms-4 h6 fw-normal mb-0">
                  <div class="d-flex">
                    <h5
                      class="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="4"
                      data-purecounter-delay="200"
                    >
                      0
                    </h5>
                    <span class="mb-0 h5">K+</span>
                  </div>
                  <p class="mb-0">Estudiantes</p>
                </div>
              </div>
            </div>
            <!-- Counter item -->
            <div class="col-sm-6 col-xl-3">
              <div
                class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3"
              >
                <span class="display-6 lh-1 text-info mb-0"
                  ><i class="bi bi-patch-check-fill"></i
                ></span>
                <div class="ms-4 h6 fw-normal mb-0">
                  <div class="d-flex">
                    <h5
                      class="purecounter mb-0 fw-bold"
                      data-purecounter-start="0"
                      data-purecounter-end="6"
                      data-purecounter-delay="200"
                    >
                      0
                    </h5>
                    <span class="mb-0 h5">+</span>
                  </div>
                  <p class="mb-0">Universidades Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
    var counter = document.getElementById('counter');
    counter.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();