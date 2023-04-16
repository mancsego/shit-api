const regex = /\/(.*)/;

const fetchResult = async (uri) => {
    const resource = regex.exec(uri)[1]
    if (resource === '' || resource ==='favicon.ico') return null


    const path = `./results/${resource}.json`
    console.log(`Requesting [${path}] ...`)
    try {
        const { default: { data } } = await import(path, { assert: { type: 'json' } })
        return data
    } catch (e) {
        return null
    }
}

export { fetchResult };