
const getUrl = () => {
	var str = window.location.href;
	var url = new URL(str);
	var id = url.searchParams.get('id');
    return id;
};
export default getUrl;
