export const name="lucid_3-message-circle-dashed";
export const id="dl_b1f3534bddc242a8a7b3";
export const url=new URL("../icons/lucid_3-message-circle-dashed.svg?v=2ecca5c05430a1a28d94486f3e4a73b3889e0a3e3e0ae4506f40311cdc04c2ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
