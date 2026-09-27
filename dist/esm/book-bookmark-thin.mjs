export const name="book-bookmark-thin";
export const id="dl_20df5d44303543e5b198";
export const url=new URL("../icons/book-bookmark-thin.svg?v=4608570b8ce426d8eed12c8bab1113ba9d7209f8a906b4a5c7bcf1fac8db8a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
