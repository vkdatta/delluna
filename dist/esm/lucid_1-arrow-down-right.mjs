export const name="lucid_1-arrow-down-right";
export const id="dl_c2976220519144b8a711";
export const url=new URL("../icons/lucid_1-arrow-down-right.svg?v=eafd2edd308683ad456c2e91323c65711492e523074e2b9ea2274288b251b419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
