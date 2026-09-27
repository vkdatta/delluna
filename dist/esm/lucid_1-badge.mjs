export const name="lucid_1-badge";
export const id="dl_4ea1e38c26944360b566";
export const url=new URL("../icons/lucid_1-badge.svg?v=1bd1c1012ba25fc1c175e6003728303ed6b2e9e78a45823a48f178dbb0411a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
