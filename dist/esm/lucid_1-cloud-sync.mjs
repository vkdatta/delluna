export const name="lucid_1-cloud-sync";
export const id="dl_d0ea3b78009640a1b672";
export const url=new URL("../icons/lucid_1-cloud-sync.svg?v=66c7d839302c8e2d399d586a0cf75ee86f1f806f08be097cd03f9e9c30d65b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
