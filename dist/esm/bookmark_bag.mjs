export const name="bookmark_bag";
export const id="dl_2436e6255e15063e71e5";
export const url=new URL("../icons/bookmark_bag.svg?v=b19d85e3cc3eeaf5ea7b051a443243b4f225c95f2bb9c509fa1992c57076aa10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
