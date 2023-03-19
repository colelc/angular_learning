interface IWikiResponse {
    batchcomplete: string,
    continue: {},
    query: {
        search: {
            ns: number,
            pageid: number,
            size: number,
            snippet: string, 
            timestamp: string,
            title: string,
            wordcount: number
        }[]
    }
};

export { IWikiResponse }