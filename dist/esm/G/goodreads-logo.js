export const name="goodreads-logo";
export const id="dl_81510ee5200340648120";
export const url=new URL("../../icons/G/goodreads-logo.svg?v=15baa287f8bf0fa159f8590e5d1c0b07ab72b13da50b87cec5f716c71c5c0039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
