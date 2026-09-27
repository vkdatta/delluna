export const name="bookmark_bag";
export const id="dl_134d3018feef0e4649eb";
export const url=new URL("../icons/bookmark_bag.svg?v=231e0c66e1169c785c2b7ae8790265bdbad80944df7b7d1de8a1790b22ad95d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
