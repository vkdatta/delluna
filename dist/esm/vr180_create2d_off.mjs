export const name="vr180_create2d_off";
export const id="dl_6044ee279311a090c0b0";
export const url=new URL("../icons/vr180_create2d_off.svg?v=57e8227249deeb5487d94a13545be89aacc2fd8df392be632281f4bbeb31fd48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
