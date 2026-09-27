export const name="book-bookmark-bold";
export const id="dl_06fa6dafb9514fab8c7c";
export const url=new URL("../icons/book-bookmark-bold.svg?v=d941964819b40223f3801f7ed0b35b8235c73ac17d806dbdab445a71523fbf73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
