console.log('SUp');
boolean isGridActive = false;

$(document).arrive(".smscMainBlockContainer", function() {
	const smscContainer = $(this);
	console.log('Hey');

	tabsClickMonitor();
});


function tabsClickMonitor() {
	let tabs = $('.smscTabs').children();
	for (let i = 0; i < tabs.length; i++) {
		const tab = $(tabs[i]);
		if (tabs[0].id === "eval_grid_tab") {
			tab.click(function () {
				isGridActive = true;
			});
		} else {
			tab.click(function () {
				isGridActive = false;
			});
		}

		console.log(`The tab is ${isGridActive}`);
	}
}
