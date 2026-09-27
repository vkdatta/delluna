export const name="lucid_1-bookmark-plus";
export const id="dl_6d7d6222bdc74689be13";
export const url=new URL("../icons/lucid_1-bookmark-plus.svg?v=7f3ebaee2f4edd87978d704870379fceeabc4c8e1d5f187638b1719d0b978dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
