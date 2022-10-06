//component wrapper - used avoid to polluting global namespace
(function(){

    //START COMPONENT
    var html = `
    <section class="position-relative overflow-hidden pt-0 pt-sm-5">
	<div class="container">

		<!-- Title -->
		<div class="row position-relative z-index-9">
			<div class="col-12 text-center mx-auto">
				<h2 class="mb-0">Frequently Asked Questions</h2>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-10 col-xl-8 mx-auto text-center position-relative">

				<!-- SVG decoration -->
				<figure class="position-absolute top-0 start-0 translate-middle ms-8">
					<svg style="enable-background:new 0 0 141.7 143.9;">
						<path class="fill-success" d="M137.7,53.1c9.6,29.3,1.8,64.7-20.2,80.7s-58.1,12.6-83.5-5.8C8.6,109.5-6.1,76.1,2.4,48.7 C10.8,21.1,42.2-0.7,71.5,0S128.1,23.8,137.7,53.1z"/>
					</svg>
				</figure>
				
				<!-- SVG decoration -->
				<figure class="position-absolute bottom-0 end-0 me-n9 rotate-193">
					<svg width="297.5px" height="295.9px">
						<path stroke="#F99D2B" fill="none" stroke-width="13" d="M286.2,165.5c-9.8,74.9-78.8,128.9-153.9,120.4c-76-8.6-131.4-78.2-122.8-154.2C18.2,55.8,87.8,0.3,163.7,9"></path>
					</svg>
				</figure>

				<!-- FAQ START -->
				<div class="accordion accordion-icon accordion-shadow mt-4 text-start position-relative" id="accordionExample2">
					<!-- Item -->
					<div class="accordion-item mb-3">
						<h6 class="accordion-header font-base" id="heading-1">
							<button class="accordion-button fw-bold rounded collapsed pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
								What subject can you teach?
							</button>
						</h6>
						<!-- Body -->
						<div id="collapse-1" class="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
							<div class="accordion-body mt-3">
								Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<h6 class="accordion-header font-base" id="heading-2">
							<button class="accordion-button fw-bold rounded collapsed pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
								Will you give me the answer any time?
							</button>
						</h6>
						<!-- Body -->
						<div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
							<div class="accordion-body mt-3">
								What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<h6 class="accordion-header font-base" id="heading-3">
							<button class="accordion-button fw-bold collapsed rounded pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
								How much should I offer the sellers? 
							</button>
						</h6>
						<!-- Body -->
						<div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample2">
							<div class="accordion-body mt-3">
								Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<h6 class="accordion-header font-base" id="heading-4">
							<button class="accordion-button fw-bold collapsed rounded pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
								Installation Guide 
							</button>
						</h6>
						<!-- Body -->
						<div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionExample2">
							<div class="accordion-body mt-3">
								<p>What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.</p>
								<p class="mb-0">At the moment, we only accept Credit/Debit cards and Paypal payments. Paypal is the easiest way to make payments online. While checking out your order. Be sure to fill in correct details for fast & hassle-free payment processing.	</p>
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item mb-3">
						<h6 class="accordion-header font-base" id="heading-5">
							<button class="accordion-button fw-bold collapsed rounded pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
								Additional Options and Services
							</button>
						</h6>
						<!-- Body -->
						<div id="collapse-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample2">
							<div class="accordion-body mt-3">
								Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
							</div>
						</div>
					</div>

					<!-- Item -->
					<div class="accordion-item">
						<h6 class="accordion-header font-base" id="heading-6">
							<button class="accordion-button fw-bold collapsed rounded pe-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
								What's are the difference between a college and a university?
							</button>
						</h6>
						<!-- Body -->
						<div id="collapse-6" class="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample2">
							<div class="accordion-body mt-3">
								Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
							</div>
						</div>
					</div>
				</div>
				<!-- FAQ END -->
			</div>
		</div>
	</div>
</section>
    `;
    var faq = document.getElementById('faq');
    faq.innerHTML = html;
    //END COMPONENT
    //close component wrapper
})();