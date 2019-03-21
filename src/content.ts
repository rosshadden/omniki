console.log('content');
chrome.runtime.onMessage.addListener(({ cmd }, sender, sendResponse) => {
	if (cmd === 'split') {
		const $splits = document.getElementsByClassName('splits')[0];
		$splits.click();
	}
});
