function keep_track(number) {
	if (number==0) {
		write_down("Welcome to my personal website."
		);
	}
	else if (number==1) {
		write_down("<a href='files/resume.pdf'>My resume"
		);
	}
	else if (number==2) {
		write_down(
		"No More adf.ly (Google chrome addon) <br>\
		BandHacks (Single Page Web App) <br>\
		Project Flow (Paypal Hackathon project) <br>\
		Web Crawler Projects <br>\
			- Information of Toronto residents, based on their streets, transferred the information from <br>\
			411.ca into an excel spreadsheet <br>\
			- A simple web app that asks you for a professor and his course code and then gives you comments <br> about him from ratemyprofessors.com <br>\
			- Stored all the products names, prices and urls from asos.com in a database"
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

