export default axios => ({
    iii() {
        console.log('iiiiiiiiiiiiiiiii');
        return axios('/api/category/list', {
            noLoading: true
        }).then(res => res).catch(err => {
            console.log(err);
            return {
                code: -1,
                data: {}
            };
        });
    }
});