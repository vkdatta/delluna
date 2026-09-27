export const name="lucid_1-cloud-sun";
export const id="dl_0f21d7c621704c75b3b9";
export const url=new URL("../icons/lucid_1-cloud-sun.svg?v=8234cbdc90866c148561dbb0ff1e22ad3154ab2cf22bf44332486514a9869243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
