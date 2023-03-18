interface IWikiResponse {
    query: {
        search: {
            title: string,
            wordcount: string,
            snippet: string,
            pageid: number
        }[]
    }
};

export { IWikiResponse }