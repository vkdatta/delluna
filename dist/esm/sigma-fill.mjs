export const name="sigma-fill";
export const id="dl_80f78067bab6990eed91";
export const url=new URL("../icons/sigma-fill.svg?v=3388e541a1aa3e62f74359fdc5a5b1ed47c67134d6fa5e10e7576aa440957c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
