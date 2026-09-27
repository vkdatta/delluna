export const name="lucid_1-cloud-moon";
export const id="dl_4eae36cb2ee8463e8d1f";
export const url=new URL("../icons/lucid_1-cloud-moon.svg?v=cbc3b2fee26b52661c9a3966a71af2fae8024453ebaf4945697d29dfc96f5757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
