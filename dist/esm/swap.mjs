export const name="swap";
export const id="dl_c2a990c60689fc724f95";
export const url=new URL("../icons/swap.svg?v=dd68fa7dc0888ad39cdb18dfd81791a50815c4e6b230510752a956bcccbe8784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
