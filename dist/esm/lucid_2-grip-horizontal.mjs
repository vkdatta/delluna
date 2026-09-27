export const name="lucid_2-grip-horizontal";
export const id="dl_d19a1f0bf0814b8495a1";
export const url=new URL("../icons/lucid_2-grip-horizontal.svg?v=7194b6c53e6fa0b892d7f572a7cccaa06d6d3b852e03e4fde4e203d104cb246f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
