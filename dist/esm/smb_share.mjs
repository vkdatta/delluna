export const name="smb_share";
export const id="dl_b2f4969b36f54d5c34d5";
export const url=new URL("../icons/smb_share.svg?v=c2770990b5adcb80142d168fdb95ca1153c116beb4e98c61e4fed0df69199a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
