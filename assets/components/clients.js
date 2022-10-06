//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section class="bg-light">
	<div class="container">
		<div class="row d-flex justify-content-center">
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/microsoft.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/linkedin.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/netflix.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/coca-cola.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/envato.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/android.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/coca-cola.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/shippable.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/algolia.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/importio.svg" alt="">
				</div>
			</div>
			<!-- Logo item -->
			<div class="col-6 col-sm-4 col-lg-2">
				<div class="p-4 grayscale text-center">
					<img src="assets/images/client/yamaha.svg" alt="">
				</div>
			</div>
		</div>
	</div>
</section>
    `;
    var clients = document.getElementById('clients');
    clients.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();