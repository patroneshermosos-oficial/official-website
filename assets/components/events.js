//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section class="pb-0 pb-md-5">
	<div class="container">
		<!-- Title -->
		<div class="row mb-4">
			<h2 class="mb-0">Upcoming <span class="text-warning">Education</span> Events</h2>
		</div>
		<div class="row">
			<!-- Slider START -->
			<div class="tiny-slider arrow-round arrow-creative arrow-blur arrow-hover">
				<div class="tiny-slider-inner" data-autoplay="false" data-arrow="true" data-dots="false" data-items-xl="3" data-items-md="2" data-items-xs="1">
					
					<!-- Card item START -->
					<div class="card bg-transparent">
						<div class="position-relative">
							<!-- Image -->
							<img src="assets/images/courses/4by3/21.jpg" class="card-img" alt="course image">
							<!-- Overlay -->
							<div class="card-img-overlay d-flex align-items-start flex-column p-3">
								<div class="w-100 mt-auto">
									<!-- Category -->
									<a href="#" class="badge text-dark bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>29 September 2021</a>
								</div>
							</div>
						</div>

						<!-- Card body -->
						<div class="card-body px-2">
							<!-- Title -->
							<h5 class="card-title"><a href="#">Global Education Fall Meeting for Everyone</a></h5>
							<!-- Address and button -->
							<div class="d-flex justify-content-between align-items-center">
								<Address class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>Mumbai</Address>
								<a href="#" class="btn btn-sm btn-primary-soft mb-0">Join now</a>
							</div>
						</div>
					</div>
					<!-- Card item END -->

					<!-- Card item START -->
					<div class="card bg-transparent">
						<div class="position-relative">
							<!-- Image -->
							<img src="assets/images/courses/4by3/16.jpg" class="card-img" alt="course image">
							<!-- Overlay -->
							<div class="card-img-overlay d-flex align-items-start flex-column p-3">
								<div class="w-100 mt-auto">
									<!-- Category -->
									<a href="#" class="badge text-dark bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>Tomorrow</a>
								</div>
							</div>
						</div>

						<!-- Card body -->
						<div class="card-body px-2">
							<!-- Title -->
							<h5 class="card-title"><a href="#">International Conference on Information Technology</a></h5>
							<!-- Address and button -->
							<div class="d-flex justify-content-between align-items-center">
								<Address class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>New york</Address>
								<a href="#" class="btn btn-sm btn-primary-soft mb-0">Join now</a>
							</div>
						</div>
					</div>
					<!-- Card item END -->

					<!-- Card item START -->
					<div class="card bg-transparent">
						<div class="position-relative">
							<!-- Image -->
							<img src="assets/images/courses/4by3/18.jpg" class="card-img" alt="course image">
							<!-- Overlay -->
							<div class="card-img-overlay d-flex align-items-start flex-column p-3">
								<div class="w-100 mt-auto">
									<!-- Category -->
									<a href="#" class="badge text-dark bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>2 July 2022</a>
								</div>
							</div>
						</div>

						<!-- Card body -->
						<div class="card-body px-2">
							<!-- Title -->
							<h5 class="card-title"><a href="#">UK Demo Day 2022</a></h5>
							<!-- Address and button -->
							<div class="d-flex justify-content-between align-items-center">
								<Address class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>California</Address>
								<a href="#" class="btn btn-sm btn-primary-soft mb-0">Join now</a>
							</div>
						</div>
					</div>
					<!-- Card item END -->

					<!-- Card item START -->
					<div class="card bg-transparent">
						<div class="position-relative">
							<!-- Image -->
							<img src="assets/images/courses/4by3/17.jpg" class="card-img" alt="course image">
							<!-- Overlay -->
							<div class="card-img-overlay d-flex align-items-start flex-column p-3">
								<div class="w-100 mt-auto">
									<!-- Category -->
									<a href="#" class="badge text-dark bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>29 September 2021</a>
								</div>
							</div>
						</div>

						<!-- Card body -->
						<div class="card-body px-2">
							<!-- Title -->
							<h5 class="card-title"><a href="#">Personality Development Tour</a></h5>
							<!-- Address and button -->
							<div class="d-flex justify-content-between align-items-center">
								<Address class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>London</Address>
								<a href="#" class="btn btn-sm btn-primary-soft mb-0">Join now</a>
							</div>
						</div>
					</div>
					<!-- Card item END -->

					<!-- Card item START -->
					<div class="card bg-transparent">
						<div class="position-relative">
							<!-- Image -->
							<img src="assets/images/courses/4by3/19.jpg" class="card-img" alt="course image">
							<!-- Overlay -->
							<div class="card-img-overlay d-flex align-items-start flex-column p-3">
								<div class="w-100 mt-auto">
									<!-- Category -->
									<a href="#" class="badge text-success bg-white fs-6 rounded-1"><i class="fas fa-circle text-success me-2"></i>Live</a>
								</div>
							</div>
						</div>

						<!-- Card body -->
						<div class="card-body px-2">
							<!-- Title -->
							<h5 class="card-title"><a href="#">Global Education Fall Meeting for Everyone</a></h5>
							<!-- Address and button -->
							<div class="d-flex justify-content-between align-items-center">
								<Address class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>Delhi</Address>
								<a href="#" class="btn btn-sm btn-primary-soft mb-0">Join now</a>
							</div>
						</div>
					</div>
					<!-- Card item END -->

				</div>
			</div>
			<!-- Slider END -->
		</div>
	</div>
</section>
    `;
    var events = document.getElementById('events');
    events.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();