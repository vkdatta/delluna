export const name="order_play-fill";
export const id="dl_f6d87edc3f7ebe8c53f3";
export const url=new URL("../icons/order_play-fill.svg?v=5bdd9874995312f38684442b7fee8f3fd859a25a575f8dc978e3528988804dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
