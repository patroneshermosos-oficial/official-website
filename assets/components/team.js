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
					<div class="tiny-slider-inner" data-autoplay="true" data-arrow="true" data-dots="false" data-items="5" data-items-lg="4" data-items-md="3">

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h5 class="mb-0"><a href="#">Abel Sanchez</a></h5>
							<p class="mb-0 small">Founder, Academic Production</p>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h5 class="mb-0"><a href="#">Kasturi Shah</a></h5>
							<p class="mb-0 small">Director, Academic Delivery</p>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h5 class="mb-0"><a href="#">Carolina Barreiro</a></h5>
							<p class="mb-0 small">Director, Estrategy and Comms</p>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h5 class="mb-0"><a href="#">Mariana Gutierrez</a></h5>
							<p class="mb-0 small">Academic Dev and Instructor</p>
						</div>

						<!-- Avatar item -->
						<div class="text-center">
							<!-- Avatar -->
							<div class="avatar avatar-xxxl mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar">
							</div>
							<!-- Info -->
							<h5 class="mb-0"><a href="#">Daniela Ahumana</a></h5>
							<p class="mb-0 small">Academic Dev and Instructor</p>
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