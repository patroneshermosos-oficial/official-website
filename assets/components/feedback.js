//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section class="bg-light position-relative">
	<!-- SVG Image -->
	<figure class="position-absolute start-0 bottom-0 mb-0">
		<img src="assets/images/element/10.svg" class="h-200px" alt="">
	</figure>

	<div class="container">
		<!-- Title -->
		<div class="row mb-4">
			<div class="col-lg-8 mx-auto text-center">
				<h2>Our Customer Feedback</h2>
				<p class="mb-0">Perceived end knowledge certainly day sweetness why cordially</p>
			</div>
		</div>

		<!-- Feedback START -->
		<div class="row">
			<!-- Slider START -->
			<div class="tiny-slider arrow-round arrow-creative arrow-dark arrow-hover">
				<div class="tiny-slider-inner" data-autoplay="true" data-edge="5" data-arrow="true" data-dots="false" data-items="4" data-items-xl="3" data-items-md="2" data-items-xs="1">

					<!-- Feedback item -->
					<div>
						<div class="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							<!-- Avatar -->
							<div class="avatar avatar-lg mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar">
							</div>
							<!-- Title -->
							<h6 class="mb-2">Lori Stevens</h6>
							<!-- Content -->
							<blockquote class="mt-1">
								<p>
									<span class="me-1 small"><i class="fas fa-quote-left"></i></span>
										Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span class="ms-1 small"><i class="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>

					<!-- Feedback item -->
					<div>
						<div class="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							<!-- Avatar -->
							<div class="avatar avatar-lg mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar">
							</div>
							<!-- Title -->
							<h6 class="mb-2">Billy Vasquez</h6>
							<!-- Content -->
							<blockquote class="mt-1">
								<p>
									<span class="me-1 small"><i class="fas fa-quote-left"></i></span>
									Its enjoyment	Moonlight newspaper up agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span class="ms-1 small"><i class="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>

					<!-- Feedback item -->
					<div>
						<div class="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							<!-- Avatar -->
							<div class="avatar avatar-lg mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar">
							</div>
							<!-- Title -->
							<h6 class="mb-2">Carolyn Ortiz</h6>
							<!-- Content -->
							<blockquote class="mt-1">
								<p>
									<span class="me-1 small"><i class="fas fa-quote-left"></i></span>
										Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span class="ms-1 small"><i class="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>

					<!-- Feedback item -->
					<div>
						<div class="bg-body text-center p-4 rounded-3 border border-1 position-relative">
							<!-- Avatar -->
							<div class="avatar avatar-lg mb-3">
								<img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar">
							</div>
							<!-- Title -->
							<h6 class="mb-2">Carolyn Ortiz</h6>
							<!-- Content -->
							<blockquote class="mt-1">
								<p>
									<span class="me-1 small"><i class="fas fa-quote-left"></i></span>
										Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing
									<span class="ms-1 small"><i class="fas fa-quote-right"></i></span>
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</div>	
			<!-- Slider START -->	
		</div>
		<!-- Feedback END -->
	</div>
</section>
    `;
    var feedback = document.getElementById('feedback');
    feedback.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();