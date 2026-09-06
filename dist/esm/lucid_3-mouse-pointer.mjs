export const name="lucid_3-mouse-pointer";
export const id="dl_8a8be6e68b3b4b3589ad";
export const url=new URL("../icons/lucid_3-mouse-pointer.svg?v=137e7e01d122a47395443eca4f39676daa9cccd01fdbad0e2576ed03c01fc285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
