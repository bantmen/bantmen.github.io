function keep_track(number) {
	if (number==0) {
		write_down("Welcome to my personal website."
		);
	}
	else if (number==1) {
		write_down("PLACEHOLDER"
		);
	}
	else if (number==2) {
		write_down("No More adf.ly (Google chrome addon) <br>\
		BandHacks (Single Page Web App) <br>\
		Project Flow (Paypal Hackathon project) <br>\
		Web Scrapper Projects <br>\
			- Information of Toronto residents, based on their streets, from 411.ca <br>\
			into an excel spreadsheet <br>\
			- Project Rosi"
		);
	}
	else if (number==3) {
		write_down("I am a self-driven and mainly a self-learning Computer \
		Science Student from University of Toronto. <br> You can reach me \
		over at: berkay.antmen@mail.utoronto.ca"
		);
	}
}

function write_down (temp) {
	document.getElementById("text_box").innerHTML = temp;
}

