export const name="book-bookmark-thin";
export const id="dl_20df5d44303543e5b198";
export const url=new URL("../icons/book-bookmark-thin.svg?v=1ad0a3ab984f3901833bb5a645a33c303478ddead9f8da93f6770c1a9c2adc64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
