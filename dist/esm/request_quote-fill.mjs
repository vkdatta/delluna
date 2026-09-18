export const name="request_quote-fill";
export const id="dl_b7aa5fd63e514312971b";
export const url=new URL("../icons/R/request_quote-fill.svg?v=bdfac66a6e7b2d8ee5d7e0a07a0593fae678dabe28bec4ef9ca0de279550c2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
