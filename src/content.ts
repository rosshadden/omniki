console.log('content');
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
	if (req.message === 'foo') {
		console.log('yes');
	}
});
