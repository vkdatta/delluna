export const name="bid_landscape-fill";
export const id="dl_0e45d16db94b6fae1156";
export const url=new URL("../icons/bid_landscape-fill.svg?v=41b16a0ff9a2b80d82245245fe4e3bbe02fc26301cc5c8a4f930797bc149a24c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
