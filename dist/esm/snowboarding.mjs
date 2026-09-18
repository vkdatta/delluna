export const name="snowboarding";
export const id="dl_0c4502f2a975499f98f0";
export const url=new URL("../icons/snowboarding.svg?v=5e23842456933eff7d1eaf3a096dc1070812976240f39c7f2e85929d22e46321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
