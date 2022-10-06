//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section>
	<div class="container">
		<!-- Title -->
		<div class="row">
			<div class="col-lg-8 mb-4">
				<h2>Our Lovely Movements</h2>
				<p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
			</div>
		</div>

		<div class="row g-4 filter-container overflow-hidden" data-isotope='{"layoutMode": "masonry"}'>

			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/19.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/19.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>

			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/20.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/20.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>

			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/17.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/17.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>
			
			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/21.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/21.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>

			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/18.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/18.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>

			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/16.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/16.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>

			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/23.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/23.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>
			
			<div class="col-6 col-md-4 col-lg-3 grid-item">
				<div class="card overflow-hidden">
					<div class="card-overlay-hover">
						<!-- Image -->
						<img src="assets/images/about/22.jpg" class="rounded-3" alt="course image">
					</div>
					<!-- Full screen button -->
					<a class="card-element-hover position-absolute top-50 start-50 translate-middle bg-dark rounded-3 p-2 lh-1" data-glightbox="" data-gallery="portfolio" href="assets/images/about/22.jpg">
						<i class="bi bi-fullscreen fa-fw fs-6 text-white"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
    `;
    var gallery = document.getElementById('gallery');
    gallery.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();