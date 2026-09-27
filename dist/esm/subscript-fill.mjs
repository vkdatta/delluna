export const name="subscript-fill";
export const id="dl_bdfca331688fe9a708e1";
export const url=new URL("../icons/subscript-fill.svg?v=5ca8559a1b353ec81ea40678a4b1f8f52eb3a45f3020d4ebfe32cdaa59d571f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
