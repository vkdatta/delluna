export const name="hdr_strong-fill";
export const id="dl_f727a2a253504d3f8556";
export const url=new URL("../icons/H/hdr_strong-fill.svg?v=5b0b2c6824624dec91d7b0b000801fb30d24e392acd85776f69fdaad164ddf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
