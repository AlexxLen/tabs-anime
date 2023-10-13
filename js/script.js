window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tab__item'),
		tabContent = document.querySelectorAll('.tab__content'),
		tabsParent = document.querySelector('.tab__items');

	function hideContentTabs() {
		tabContent.forEach((item, i) => {
			item.classList.add('hide');
			tabs[i].classList.remove('active', 'animation');
		});
	}

	function showContentTab(i = 0) {
		tabContent[i].classList.remove('hide');
		tabContent[i].classList.add('animation');
		tabs[i].classList.add('active');
	}

	hideContentTabs();
	showContentTab();

	tabsParent.addEventListener('click', (event) => {

		const target = event.target;

		if (target && target.matches('.tab__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideContentTabs();
					showContentTab(i);
				}
			});
		}

	});

});