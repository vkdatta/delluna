export const name="macro_off-fill";
export const id="dl_abd32a6456452cf4586d";
export const url=new URL("../icons/macro_off-fill.svg?v=a42c83897d9a7438e67be8ad51a79ca2c5ba8bf1f255f20a23fe06181eaffbca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
