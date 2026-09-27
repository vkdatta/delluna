export const name="hdr_strong-fill";
export const id="dl_738831a6a0ce0cda5b5f";
export const url=new URL("../icons/hdr_strong-fill.svg?v=5b0b2c6824624dec91d7b0b000801fb30d24e392acd85776f69fdaad164ddf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
