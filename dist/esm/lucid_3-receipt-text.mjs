export const name="lucid_3-receipt-text";
export const id="dl_c8000d841aff4c41a34d";
export const url=new URL("../icons/lucid_3-receipt-text.svg?v=92b1364df838883e82048559a202526935f5b377571a051c7a8ed98ca7ae528f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
