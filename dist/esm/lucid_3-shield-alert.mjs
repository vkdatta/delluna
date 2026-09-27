export const name="lucid_3-shield-alert";
export const id="dl_727acaccf92e4ad19909";
export const url=new URL("../icons/lucid_3-shield-alert.svg?v=9adfa9fcbd782113067b700339170b83c68fa8c33556e0501d0104da89956d43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
