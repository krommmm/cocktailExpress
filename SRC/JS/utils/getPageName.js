const getPageName = () => {
	const PATH = window.location.pathname;
	const parts = PATH.split('/');
	const FILE_NAME = parts[parts.length - 1];
	const PAGE_NAME = FILE_NAME.replace('.html', '');
	return PAGE_NAME;
};
export default getPageName;
