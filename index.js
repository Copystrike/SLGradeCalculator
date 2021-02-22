let isSidebarInitialized = false;
let isTabsInitialized = false;
console.log("Grades page initialized");


window.onload = () => {
	console.log("Test");
	$(document).arrive('.smscToolbar', function() {
		console.log('toolbar has been initialized by arrive');
		const smscToolbar = $(this);
		initializeSideBar(smscToolbar);
	});
}


function initializeSideBar(smscToolBar) {
	if (!isSidebarInitialized) {
		let sidebar = smscToolBar.children();
		for (let i = 0; i < sidebar.length; i++) {
			let sidebarElem = $(sidebar[i]);
			if (sidebarElem.hasClass('icon_evals')) {
				sidebarElem.click(function() {
					tabsClickMonitor();
				});
			}
		}

		isSidebarInitialized = true;
	}
}


function tabsClickMonitor() {
	if (!isTabsInitialized) {
		$(document).arrive('.smscTabs', function() {
			let tabs = $(this).children();
			console.log(`Tabs: ${tabs.length}`);
			for (let i = 0; i < tabs.length; i++) {
				const tab = $(tabs[i]);
				if (tabs[i].id === 'eval_grid_tab') {
					tab.click(function () {
						onTableView();
					});
				}
			}
		});

		isTabsInitialized = true;
	}
}


function onTableView() {
	console.log("Pretty O,O");
}
