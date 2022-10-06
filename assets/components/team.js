//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section>
	<div class="container">
		<div class="row">
			<!-- Our team START -->
			<div class="col-md-12">
				<!-- Title and button -->
				<div class="d-sm-flex justify-content-sm-between">
					<h2 class="mb-0">Meet Our Team</h2>
					<a href="#" class="btn btn-light mt-2">Join Team</a>
				</div>
				
				<!-- Slider START -->
				<div class="tiny-slider arrow-round arrow-creative arrow-blur arrow-hover mt-2 mt-sm-5">
					<div class="tiny-slider-inner" data-autoplay="true" data-arrow="true" data-dots="false" data-items="6" data-items-lg="3" data-items-md="2">

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h6 class="mb-0"><a href="#">Carolyn Ortiz</a></h6>
							<p class="mb-0 small">Designer</p>
							<!-- Rating -->
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h6 class="mb-0"><a href="#">Dennis Barrett</a></h6>
							<p class="mb-0 small">IT professor</p>
							<!-- Rating -->
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h6 class="mb-0"><a href="#">Frances Guerrero</a></h6>
							<p class="mb-0 small">Developer</p>
							<!-- Rating -->
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
							</ul>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h6 class="mb-0"><a href="#">Larry Lawson</a></h6>
							<p class="mb-0 small">Designer</p>
							<!-- Rating -->
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h6 class="mb-0"><a href="#">Louis Crawford</a></h6>
							<p class="mb-0 small">Medical Professor</p>
							<!-- Rating -->
							<ul class="list-inline mb-0">
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
								<li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
							</ul>
						</div>
					</div>
				</div>	
				<!-- Slider END -->
			</div>
			<!-- Our team END -->
		</div>
	</div>
</section>
    `;
    var team = document.getElementById('team');
    team.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();