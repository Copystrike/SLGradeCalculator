let isGridActive = false;
let isSideBarGridActive = false;


$(document).arrive('.smscMainBlockContainer', function() {
	const smscContainer = $(this);
	initializeSideBar();
});


function initializeSideBar() {
		let sidebar = $('.smscToolbar').children();
		for (let i = 0; i < sidebar.length; i++) {
			let sidebarElem = $(sidebar[i]);
			if (sidebarElem.hasClass('icon_evals')) {
				sidebarElem.click(function() {
					isSideBarGridActive = true;
					tabsClickMonitor();
				});
			} else {
				sidebarElem.click(function() {
					isSideBarGridActive = false;
				});
			}
		}
}


function tabsClickMonitor() {
	let tabs = $('.smscTabs').children();
	console.log(tabs);
	for (let i = 0; i < tabs.length; i++) {
		const tab = $(tabs[i]);
		if (tabs[i].id === 'eval_grid_tab') {
			tab.click(function () {
				isGridActive = true;
			});
		} else {
			tab.click(function () {
				isGridActive = false;
			});
		}
	}
}
