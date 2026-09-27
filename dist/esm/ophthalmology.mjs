export const name="ophthalmology";
export const id="dl_39e82982aa9ae08622be";
export const url=new URL("../icons/ophthalmology.svg?v=558938b4fe4afc4aa30bcfa780479a1b67f021a3a57eb4b3d97355882b31e96c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
