chrome.commands.onCommand.addListener((cmd) => {
	console.log('cmd', cmd);

	chrome.tabs.query({ active: true, currentWindow: true }, ([ activeTab ]) => {
		if (!activeTab) return;
		console.log('activeTab', activeTab.id, activeTab.title);
		chrome.tabs.sendMessage(activeTab.id, { cmd });
	});
});

chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.query({ active: true, currentWindow: true }, ([ activeTab ]) => {
		chrome.tabs.sendMessage(activeTab.id, {
			message: 'foo'
		});
	});
});
