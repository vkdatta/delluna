export const name="arrow-square-up-left-fill";
export const id="dl_bce753a4701b44368760";
export const url=new URL("../icons/arrow-square-up-left-fill.svg?v=8b639c7a3db7ea89089f45f607097135d529ea8425af432ca9eba7e1f10f82f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
