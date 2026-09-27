export const name="lucid_1-bookmark";
export const id="dl_9e4d90ac12bf4749a1f5";
export const url=new URL("../icons/lucid_1-bookmark.svg?v=6ea0593bd28c8a30a1baf69bb36fc290d0d09883c07ecd1c3321b4e5c8868284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
