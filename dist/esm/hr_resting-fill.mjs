export const name="hr_resting-fill";
export const id="dl_c5f55321a5a4280ab132";
export const url=new URL("../icons/hr_resting-fill.svg?v=25f4782c2d2f04371ade2be9f4e843a25eaf56e43fe67a98134082f38ed6ac1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
