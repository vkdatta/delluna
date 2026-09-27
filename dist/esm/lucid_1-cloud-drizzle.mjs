export const name="lucid_1-cloud-drizzle";
export const id="dl_eac6a7011dcb45e1841b";
export const url=new URL("../icons/lucid_1-cloud-drizzle.svg?v=8a8d1eae410afe4a5927d29cc1ce14d5563786ed0238c3921f45fffc4c2a93fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
