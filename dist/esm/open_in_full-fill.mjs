export const name="open_in_full-fill";
export const id="dl_c6f1077e8a684f77b263";
export const url=new URL("../icons/del/open_in_full-fill.svg?v=0183fe77834e341e000c086527cbc063a0be5de1cbb6ac27cd1b6a0368d4e61a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
