export const name="lucid_1-cloud-alert";
export const id="dl_c11b1d4bf5cb497da3ff";
export const url=new URL("../icons/lucid_1-cloud-alert.svg?v=cc6234d1dcc822606c215cf3d8db91edf689c394dd6f2fceccaff387bd831b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
