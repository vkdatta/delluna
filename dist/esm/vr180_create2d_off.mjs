export const name="vr180_create2d_off";
export const id="dl_e80e831ddaf949a79665";
export const url=new URL("../icons/vr180_create2d_off.svg?v=959c3e52197a894a0cf9d7fcdbc2f4945103b009af71b2fdd5f15c734ca85598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
