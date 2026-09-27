export const name="lucid_3-shield-keyhole";
export const id="dl_1b13002b8b984924a3ba";
export const url=new URL("../icons/lucid_3-shield-keyhole.svg?v=2a6b7652c149f553bdf32860d9a4f8b2b6991cf715ca83982f528cc38988c6c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
