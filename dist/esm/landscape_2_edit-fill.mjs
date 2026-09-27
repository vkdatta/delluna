export const name="landscape_2_edit-fill";
export const id="dl_5bc7d7cc35888d74a474";
export const url=new URL("../icons/landscape_2_edit-fill.svg?v=ab3e7da2f92afa71379921536b9234fceabb063a090b1ace0a2a22c5984e7e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
