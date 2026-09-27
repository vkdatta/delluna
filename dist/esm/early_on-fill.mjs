export const name="early_on-fill";
export const id="dl_f4e5b19cdf1463df70fa";
export const url=new URL("../icons/early_on-fill.svg?v=b1f50a794e824fac2008779cb79457a31e1eb6a9c1857888c88499669c87f473",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
